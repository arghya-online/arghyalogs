import React from "react";
import { CopyButton } from "../../components/CopyButton";
import final_folder from "../../../public/blogs/oidc/fileStructure.png";

export const metadata = {
  title: "Building a Mini OIDC Provider from Scratch - What I Learned",
  slug: "building-mini-oidc-provider-from-scratch",
  date: "2026-05-18",
  category: "Programming",
  readTime: "12 min",
  summary:
    "A deep dive into building a mini OpenID Connect (OIDC) provider from scratch using Node.js, Express, JOSE, Drizzle ORM, and PostgreSQL. Understanding JWTs, JWKS, authorization code flow, and discovery endpoints.",
};

function CodeBlock({ code, language = "javascript" }) {
  return (
    <div className="relative my-6 group">
      <pre className="overflow-x-auto bg-[#1e1e1e] p-4 rounded-lg text-sm text-[#d4d4d4] border border-border font-mono leading-relaxed">
        <div className="flex justify-between items-center mb-2 pb-2 border-b border-white/10 opacity-50 text-xs uppercase tracking-widest text-[#808080]">
          <span>{language}</span>
        </div>
        <code>{code}</code>
      </pre>
      <div className="absolute top-12 right-2 invisible group-hover:visible transition-all">
        <CopyButton code={code} />
      </div>
    </div>
  );
}

function ImagePlaceholder({ alt, seed }) {
  return (
    <figure className="my-8">
      <img
        src={final_folder}
        alt={alt}
        className="rounded-lg border border-border w-full object-cover"
      />
      <figcaption className="text-sm text-center text-text-secondary mt-2">
        {alt}
      </figcaption>
    </figure>
  );
}

export default function BlogContent() {
  return (
    <article className="max-w-none mx-auto sm:px-6 text-text-primary">
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary mt-8">
        <p>
          Most developers I know use authentication every single day. We drop in
          Passport.js, reach for NextAuth, configure Auth0, and move on. The
          login works, the JWT gets issued, the protected routes protect. Done.
        </p>
        <p>
          But I realized at some point that I had been using all of this without
          genuinely understanding what was happening underneath. I knew what a
          JWT looked like. I could decode one. I understood that it had a
          header, payload, and signature. But when someone mentioned OIDC, JWKS,
          authorization code flow, or discovery endpoints - I nodded along and
          quietly hoped the conversation moved on.
        </p>
        <p>
          That felt like a gap worth fixing. Not because I needed to build my
          own identity provider for production (I don't, and neither do you
          probably), but because understanding how these systems work internally
          changes how you think about them. It changes how you debug auth
          issues, how you evaluate third-party providers, how you design APIs
          that rely on them.
        </p>
        <p>
          So I decided to build a mini OIDC provider from scratch using Node.js,
          Express, JOSE, Drizzle ORM, PostgreSQL, and Docker. No shortcuts, no
          magic libraries that abstract the important parts away. Every piece
          intentional.
        </p>
        <p>This is that story.</p>
      </section>

      <ImagePlaceholder
        seed="final_folder"
        alt="SCREENSHOT: Final project folder structure"
      />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        What Actually is OpenID Connect (OIDC)?
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <p>
          Before building anything, I had to actually understand what I was
          building. This sounds obvious but I think most learning resources skip
          this step.
        </p>
        <p>
          Start with OAuth 2.0. OAuth is an authorization framework. Its job is
          to answer one question: "Does this application have permission to do X
          on behalf of this user?" That's it. OAuth is about delegated access.
          It tells you what a user can do, not who the user is.
        </p>
        <p>
          OIDC - OpenID Connect - is built on top of OAuth 2.0 and adds an
          identity layer. It answers a different question: "Who is this user?"
          OIDC introduces the concept of the ID Token, which is a signed JWT
          that contains identity claims about the authenticated user - their
          name, email, unique identifier, and so on.
        </p>
        <p>
          Here is the important distinction people miss: a JWT alone is not
          OIDC. You can issue a JWT from your own server with a secret key.
          That's just authentication. OIDC is a standardized protocol with
          specific endpoints, specific token formats, discovery mechanisms, and
          key management conventions. The JWT is just one piece of it.
        </p>
        <p>
          When you log in with Google and Google sends back a token, what Google
          is doing internally is running something very similar to what I built
          here. There is an authorization server that validates your identity,
          issues an authorization code, exchanges that code for tokens (an
          access token and an ID token), and exposes a public JWKS endpoint
          where anyone can verify those tokens cryptographically.
        </p>
        <p>
          Providers like Auth0, Okta, and Keycloak are all OIDC providers at
          their core. They follow the same spec. The concept once it clicks is
          surprisingly clean.
        </p>
      </section>

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        Why I Decided to Build My Own
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <p>
          The turning point for me was reading through a bunch of "JWT
          authentication in Node.js" tutorials. Almost all of them do the same
          thing:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>User logs in</li>
          <li>
            Server signs a JWT with a secret string (
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              jwt.sign(payload, "mysecret")
            </code>
            )
          </li>
          <li>Client stores it in localStorage</li>
          <li>Client sends it with each request</li>
          <li>Server verifies it with the same secret</li>
        </ul>
        <p>
          That pattern works. But it leaves so many important things
          unexplained. Why is symmetric signing a problem in distributed
          systems? What is a JWKS and why do servers expose public keys? What is
          the actual authorization code flow and why do we need the intermediate
          code step? What is an ID token and how is it different from an access
          token? What is a discovery endpoint and why do real providers expose
          one?
        </p>
        <p>
          None of the tutorials I found explained these things because they were
          all solving a simpler problem - how to protect a route. I wanted to
          understand the broader picture: how real identity providers actually
          work.
        </p>
        <p>
          Building something forces understanding in a way that reading about it
          never quite does. So I decided to build a server that implements:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>RSA asymmetric key signing (RS256)</li>
          <li>A real JWKS endpoint exposing public keys</li>
          <li>
            A{" "}
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              .well-known/openid-configuration
            </code>{" "}
            discovery endpoint
          </li>
          <li>The full authorization code flow</li>
          <li>Both access tokens and ID tokens</li>
          <li>Refresh tokens with database-backed sessions</li>
          <li>
            A{" "}
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              /userinfo
            </code>{" "}
            endpoint
          </li>
        </ul>
        <p>
          That list felt intimidating initially. By the end, each piece made
          complete sense.
        </p>
      </section>

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        Tech Stack Used
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Node.js + Express</strong> - straightforward choice. I
            wanted to focus on the auth concepts, not fight a framework. Express
            is minimal enough to stay out of the way.
          </li>
          <li>
            <strong>PostgreSQL</strong> - I needed persistent storage for users,
            refresh token sessions, and authorization codes. PostgreSQL is rock
            solid and I know it well enough that it wouldn't become its own
            learning project.
          </li>
          <li>
            <strong>Drizzle ORM</strong> - I picked Drizzle over Prisma here
            specifically because Drizzle keeps the SQL visible. With Prisma, the
            schema and migrations can feel a bit magical. Drizzle forces you to
            think about your tables clearly and the queries read close to actual
            SQL. For a project where I was trying to understand everything
            deeply, that transparency helped.
          </li>
          <li>
            <strong>JOSE</strong> - this is the important one. JOSE stands for
            JavaScript Object Signing and Encryption. It is the package that
            handles JWT operations in a standards-compliant, production-grade
            way. Most tutorials use the{" "}
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              jsonwebtoken
            </code>{" "}
            library, which is fine for symmetric HS256 signing. But jsonwebtoken
            has awkward support for asymmetric RS256 signing with PEM-loaded
            keys, and it doesn't handle JWKS operations cleanly. JOSE is built
            specifically around the RFC standards (RFC 7517 for JWK, RFC 7519
            for JWT) and supports RSA key import, RS256 signing and
            verification, and JWK export natively. Once I understood what I
            needed to do, JOSE was the right tool.
          </li>
          <li>
            <strong>Docker + Docker Compose</strong> - I containerized the
            PostgreSQL database. This meant I didn't install anything directly
            on my machine, I could spin the whole database up and tear it down
            with a single command, and the setup was reproducible.
          </li>
          <li>
            <strong>bcrypt</strong> - for password hashing. This one is
            non-negotiable. Passwords never touch the database as plaintext.
          </li>
          <li>
            <strong>Tailwind CSS (frontend)</strong> - I added a simple frontend
            later to have a visual interface for testing the login/signup/logout
            flow. Tailwind made it fast.
          </li>
        </ul>
      </section>

      <ImagePlaceholder
        seed="package_deps"
        alt="SCREENSHOT: package.json dependencies"
      />

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        Project Architecture
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <p>
          Before going into individual pieces, it helps to understand how
          everything fits together.
          <br />
          The high-level flow looks like this:
        </p>
        <pre className="bg-surface border border-border p-4 rounded-lg overflow-x-auto text-sm font-mono">
          {`Client (browser or API client)
    ↓
Express Server (OIDC Provider)
    ↓ (reads/writes users, codes, sessions)
PostgreSQL (via Drizzle ORM)
    ↓ (signs tokens)
RSA Private Key
    ↓ (issued tokens can be verified by anyone with)
RSA Public Key (exposed via /jwks)`}
        </pre>
        <p>Inside the Express server, the structure is:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              routes/
            </code>{" "}
            - individual route files for auth, OIDC endpoints, and protected
            resources
          </li>
          <li>
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              services/
            </code>{" "}
            - business logic separated from routing. The jwt.service.js here
            handles all token operations.
          </li>
          <li>
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              middleware/
            </code>{" "}
            - the verifyToken middleware that validates JWTs on protected routes
          </li>
          <li>
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              db/
            </code>{" "}
            - Drizzle schema definitions and the database connection
          </li>
          <li>
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              keys/
            </code>{" "}
            - the private.pem and public.pem RSA key files
          </li>
          <li>
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              scripts/
            </code>{" "}
            - the key-gen.sh script that generates the RSA key pair
          </li>
        </ul>
        <p>The routes I implemented:</p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 pr-4 font-semibold text-text-primary">
                  Route
                </th>
                <th className="py-2 pr-4 font-semibold text-text-primary">
                  Method
                </th>
                <th className="py-2 pr-4 font-semibold text-text-primary">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">
                  <code className="px-1.5 py-0.5 bg-surface rounded">
                    /register
                  </code>
                </td>
                <td className="py-2 pr-4">POST</td>
                <td className="py-2 pr-4">Create new user account</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">
                  <code className="px-1.5 py-0.5 bg-surface rounded">
                    /login
                  </code>
                </td>
                <td className="py-2 pr-4">POST</td>
                <td className="py-2 pr-4">Authenticate user, issue tokens</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">
                  <code className="px-1.5 py-0.5 bg-surface rounded">
                    /refresh
                  </code>
                </td>
                <td className="py-2 pr-4">POST</td>
                <td className="py-2 pr-4">
                  Exchange refresh token for new access token
                </td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">
                  <code className="px-1.5 py-0.5 bg-surface rounded">
                    /logout
                  </code>
                </td>
                <td className="py-2 pr-4">POST</td>
                <td className="py-2 pr-4">Invalidate refresh token session</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">
                  <code className="px-1.5 py-0.5 bg-surface rounded">
                    /profile
                  </code>
                </td>
                <td className="py-2 pr-4">GET</td>
                <td className="py-2 pr-4">
                  Protected resource, requires valid access token
                </td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">
                  <code className="px-1.5 py-0.5 bg-surface rounded">
                    /userinfo
                  </code>
                </td>
                <td className="py-2 pr-4">GET</td>
                <td className="py-2 pr-4">OIDC-standard identity endpoint</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">
                  <code className="px-1.5 py-0.5 bg-surface rounded">
                    /authorize
                  </code>
                </td>
                <td className="py-2 pr-4">GET</td>
                <td className="py-2 pr-4">Start authorization code flow</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">
                  <code className="px-1.5 py-0.5 bg-surface rounded">
                    /token
                  </code>
                </td>
                <td className="py-2 pr-4">POST</td>
                <td className="py-2 pr-4">Exchange auth code for tokens</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">
                  <code className="px-1.5 py-0.5 bg-surface rounded">
                    /.well-known/openid-configuration
                  </code>
                </td>
                <td className="py-2 pr-4">GET</td>
                <td className="py-2 pr-4">OIDC discovery metadata</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4">
                  <code className="px-1.5 py-0.5 bg-surface rounded">
                    /jwks
                  </code>
                </td>
                <td className="py-2 pr-4">GET</td>
                <td className="py-2 pr-4">
                  Public key set for token verification
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <ImagePlaceholder
        seed="arch_folder"
        alt="SCREENSHOT: Architecture diagram or folder structure"
      />

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        Setting Up PostgreSQL with Docker
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <p>
          I started here because nothing else could work without a database
          running.
          <br />
          The{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            docker-compose.yml
          </code>{" "}
          defines a single PostgreSQL service with environment variables for the
          database name, user, and password. Port 5432 on the container maps to
          5432 on the host.
        </p>

        <CodeBlock
          language="yaml"
          code={`services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: oidc_db
      POSTGRES_USER: oidc_user
      POSTGRES_PASSWORD: secret
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data`}
        />

        <p>
          One thing I ran into almost immediately was a port conflict. I had a
          local PostgreSQL installation on my machine already running on 5432.
          Docker couldn't bind to the port. The fix was either to stop the local
          PostgreSQL service or change the host port mapping to something like{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            5433:5432
          </code>
          . I went with stopping the local service since I wasn't using it for
          anything active.
        </p>
        <p>
          Another issue was the database connection URL inside{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            .env
          </code>
          . If you're connecting from Node.js running directly on your machine
          to a containerized PostgreSQL, the host is localhost. But if Node.js
          were running inside a container too, the host would be the service
          name (postgres). I got confused by this initially and spent some time
          looking at Drizzle connection errors before I realized what was
          happening.
        </p>
        <p>
          The big benefit of Docker here is reproducibility. Anyone who clones
          this project can run{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            docker-compose up -d
          </code>{" "}
          and have the database running in under a minute, exactly as I
          configured it. No installation steps, no version mismatches.
        </p>
      </section>

      <ImagePlaceholder
        seed="docker_yml"
        alt="SCREENSHOT: docker-compose.yml"
      />
      <ImagePlaceholder
        seed="docker_ps"
        alt="SCREENSHOT: docker ps terminal output showing running container"
      />

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        Designing Database Schema with Drizzle ORM
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <p>
          I ended up with three tables. Each one has a clear reason for
          existing.
        </p>

        <h3 className="text-lg font-bold text-text-primary">users table</h3>
        <p>
          This is the identity store. It holds the user's email, their hashed
          password, and a few optional profile fields like name. The id is a
          UUID generated on creation. The email has a unique constraint.
        </p>

        <CodeBlock
          language="typescript"
          code={`export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  name: text("name"),
  createdAt: timestamp("created_at").defaultNow(),
});`}
        />

        <h3 className="text-lg font-bold text-text-primary mt-6">
          refresh_tokens table
        </h3>
        <p>
          This one stores active refresh token sessions. When a user logs in, I
          generate a random token string, store it here with the associated user
          ID and an expiry timestamp, and return it to the client. When the
          client wants a new access token, they send this refresh token, I look
          it up in the database, validate it hasn't expired, and issue fresh
          tokens.
        </p>

        <CodeBlock
          language="typescript"
          code={`export const refreshTokens = pgTable("refresh_tokens", {
  id: uuid("id").defaultRandom().primaryKey(),
  token: text("token").notNull().unique(),
  userId: uuid("user_id").references(() => users.id),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});`}
        />

        <p>
          The key insight here is that refresh tokens are stateful. They exist
          in the database. This means I can revoke them - if a user logs out, I
          delete the row, and that refresh token is dead forever. This is
          different from access tokens, which are stateless JWTs and can't be
          revoked once issued (within their short lifetime).
        </p>

        <h3 className="text-lg font-bold text-text-primary mt-6">
          auth_codes table
        </h3>
        <p>
          This stores temporary authorization codes for the OAuth2/OIDC
          authorization code flow. When a client initiates the{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            /authorize
          </code>{" "}
          route, I generate a random short-lived code, store it here with the
          associated user ID and requested scopes, and redirect back to the
          client. The client then exchanges this code at the{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            /token
          </code>{" "}
          endpoint for actual tokens.
        </p>

        <CodeBlock
          language="typescript"
          code={`export const authCodes = pgTable("auth_codes", {
  id: uuid("id").defaultRandom().primaryKey(),
  code: text("code").notNull().unique(),
  userId: uuid("user_id").references(() => users.id),
  redirectUri: text("redirect_uri"),
  scope: text("scope"),
  expiresAt: timestamp("expires_at").notNull(),
  used: boolean("used").default(false),
});`}
        />

        <p>
          The used flag is important. Authorization codes are single-use. Once a
          client exchanges a code for tokens, the code is marked as used and any
          subsequent attempt to use the same code is rejected. This is a
          security requirement of the spec.
        </p>
      </section>

      <ImagePlaceholder
        seed="drizzle_schema"
        alt="SCREENSHOT: Drizzle schema file"
      />
      <ImagePlaceholder
        seed="drizzle_studio"
        alt="SCREENSHOT: Drizzle Studio showing all three tables"
      />

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        Understanding Asymmetric Authentication
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <p>
          This section matters a lot. Most introductory tutorials use symmetric
          signing (HS256) and this creates a mental model that doesn't translate
          well to real-world distributed authentication systems.
        </p>

        <h3 className="text-lg font-bold text-text-primary">
          Symmetric signing (HS256)
        </h3>
        <p>
          With HMAC SHA-256, you sign the JWT using a shared secret string. The
          same string that signs the token is the same string used to verify it.
          This works fine if only one server exists that both creates and
          validates tokens. But if you have multiple services that need to
          independently verify tokens, they all need access to the same secret.
          Distributing a shared secret is a security problem - more places a
          secret exists, more places it can leak.
        </p>

        <h3 className="text-lg font-bold text-text-primary">
          Asymmetric signing (RS256)
        </h3>
        <p>
          RSA uses a key pair: a private key and a public key. The private key
          signs the token. The public key verifies it. The critical property is
          that you cannot derive the private key from the public key.
        </p>
        <p>
          This means the OIDC provider (my server) holds the private key and
          never shares it. The public key can be shared freely - in fact, it's
          literally published at the{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            /jwks
          </code>{" "}
          endpoint. Any client, any service, anywhere on the internet can
          download the public key and verify that a token was genuinely signed
          by this provider, without ever needing access to the private key.
        </p>
        <p>
          This is how Google's tokens work. You can go to{" "}
          <a
            href="https://www.googleapis.com/oauth2/v3/certs"
            className="text-accent hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            https://www.googleapis.com/oauth2/v3/certs
          </a>{" "}
          right now and see Google's public JWK set. Any application that
          receives a Google-issued token can independently verify it by fetching
          those keys.
        </p>
        <p>
          For a distributed system where many different services need to verify
          tokens independently - this is the right approach. RS256 was the
          obvious choice for this project.
        </p>
        <p>In practice:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              private.pem
            </code>{" "}
            lives on the server, used only during token signing
          </li>
          <li>
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              public.pem
            </code>{" "}
            is exposed via{" "}
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              /jwks
            </code>{" "}
            in JWK format, used by anyone who needs to verify a token
          </li>
        </ul>
      </section>

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        Generating RSA Keys
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <p>
          I wrote a small shell script to generate the RSA key pair using
          OpenSSL.
        </p>

        <CodeBlock
          language="bash"
          code={`#!/bin/bash
mkdir -p keys
openssl genrsa -out keys/private.pem 2048
openssl rsa -in keys/private.pem -pubout -out keys/public.pem
echo "RSA key pair generated successfully."`}
        />

        <p>
          Running{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            bash scripts/key-gen.sh
          </code>{" "}
          produces two files:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              keys/private.pem
            </code>{" "}
            - the 2048-bit RSA private key
          </li>
          <li>
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              keys/public.pem
            </code>{" "}
            - the corresponding public key
          </li>
        </ul>
        <p>
          Both are in PEM format, which is the standard text encoding for
          cryptographic keys. The private key file starts with{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            -----BEGIN RSA PRIVATE KEY-----
          </code>{" "}
          and the public key starts with{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            -----BEGIN PUBLIC KEY-----
          </code>
          .
        </p>
        <p>
          Important:{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            keys/private.pem
          </code>{" "}
          belongs in{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            .gitignore
          </code>
          . Never commit private keys to version control.
        </p>
        <p>
          In production OIDC systems, key rotation is an important practice -
          periodically generating a new key pair and updating the JWKS endpoint.
          I didn't implement rotation in this project, but the JWKS structure
          supports it (you can have multiple keys in the set, each identified by
          a{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            kid
          </code>{" "}
          - key ID).
        </p>
      </section>

      <ImagePlaceholder seed="keygen_sh" alt="SCREENSHOT: key-gen.sh script" />
      <ImagePlaceholder
        seed="generated_keys"
        alt="SCREENSHOT: Generated keys folder showing private.pem and public.pem"
      />

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        JWT Signing Using JOSE
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <p>
          This is where the{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            jwt.service.js
          </code>{" "}
          file does its work. There are three main things I needed to do with
          tokens: sign access tokens, sign ID tokens, and verify tokens. JOSE
          handles all of these cleanly.
        </p>

        <h3 className="text-lg font-bold text-text-primary">
          Loading the keys
        </h3>
        <CodeBlock
          language="javascript"
          code={`import { createPrivateKey, createPublicKey } from "crypto";
import { readFileSync } from "fs";

const privateKey = createPrivateKey(readFileSync("./keys/private.pem"));
const publicKey = createPublicKey(readFileSync("./keys/public.pem"));`}
        />

        <h3 className="text-lg font-bold text-text-primary mt-6">
          Signing a token
        </h3>
        <CodeBlock
          language="javascript"
          code={`import { SignJWT } from "jose";

export async function signAccessToken(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "RS256" })
    .setIssuedAt()
    .setIssuer("http://localhost:3000")
    .setAudience("oidc-client")
    .setExpirationTime("15m")
    .sign(privateKey);
}`}
        />

        <p>The JWT claims worth understanding here:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>sub (subject)</strong> - who the token is about, typically
            the user's ID
          </li>
          <li>
            <strong>iss (issuer)</strong> - which server issued this token, the
            OIDC provider's base URL
          </li>
          <li>
            <strong>aud (audience)</strong> - who this token is intended for,
            the client application
          </li>
          <li>
            <strong>iat (issued at)</strong> - Unix timestamp of when the token
            was issued
          </li>
          <li>
            <strong>exp (expiration)</strong> - Unix timestamp of when the token
            expires
          </li>
        </ul>

        <h3 className="text-lg font-bold text-text-primary mt-6">
          Verifying a token
        </h3>
        <CodeBlock
          language="javascript"
          code={`import { jwtVerify } from "jose";

export async function verifyToken(token) {
  const { payload } = await jwtVerify(token, publicKey, {
    issuer: "http://localhost:3000",
    audience: "oidc-client",
  });
  return payload;
}`}
        />

        <p>
          JOSE's{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            jwtVerify
          </code>{" "}
          validates the signature, checks the issuer and audience claims, and
          verifies the token hasn't expired. If any of these fail, it throws an
          error. Clean and explicit.
        </p>
      </section>

      <ImagePlaceholder seed="jwt_service" alt="SCREENSHOT: jwt.service.js" />
      <ImagePlaceholder
        seed="login_response_tokens"
        alt="SCREENSHOT: Login response showing issued tokens"
      />

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        Building the JWKS Endpoint
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <p>
          JWKS stands for JSON Web Key Set. It is a standardized JSON structure
          that represents one or more public keys.
        </p>
        <p>The endpoint looks like this:</p>
        <pre className="bg-surface border border-border p-4 rounded-lg overflow-x-auto text-sm font-mono">
          {`GET /jwks`}
        </pre>
        <p>And returns something like:</p>

        <CodeBlock
          language="json"
          code={`{
  "keys": [
    {
      "kty": "RSA",
      "n": "...(base64url encoded modulus)...",
      "e": "AQAB",
      "use": "sig",
      "alg": "RS256",
      "kid": "my-rsa-key-1"
    }
  ]
}`}
        />

        <p>
          The important fields:{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            kty
          </code>{" "}
          is the key type (RSA),{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            n
          </code>{" "}
          is the RSA modulus,{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            e
          </code>{" "}
          is the public exponent,{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            use
          </code>{" "}
          indicates this key is used for signing, and{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            kid
          </code>{" "}
          is the key ID used to match a specific key when multiple keys exist in
          the set.
        </p>
        <p>
          JOSE makes converting the public key to JWK format straightforward:
        </p>
        <CodeBlock
          language="javascript"
          code={`import { exportJWK } from "jose";

const jwk = await exportJWK(publicKey);`}
        />
        <p>
          Why does this endpoint exist publicly?
          <br />
          Because it's the mechanism by which token verification is
          decentralized. Any service that receives a JWT from this OIDC provider
          can fetch the public keys from this endpoint and cryptographically
          verify the token's signature without calling the OIDC provider again.
          No network call back to the auth server for every request - just a
          one-time key fetch (which gets cached).
        </p>
        <p>
          This is fundamentally different from opaque tokens or session IDs that
          require a database lookup on every request. JWTs with public key
          verification scale beautifully.
        </p>
        <p>
          The key rotation concept connects here too. When you rotate keys, you
          keep the old public key in the JWKS set for a transition period (so
          old tokens issued with the old key still validate), while new tokens
          get issued with the new private key. The{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            kid
          </code>{" "}
          field tells verifiers which key to use for which token.
        </p>
      </section>

      <ImagePlaceholder
        seed="jwks_response"
        alt="SCREENSHOT: /jwks endpoint response"
      />

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        Understanding the .well-known/openid-configuration Endpoint
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <p>
          This one was probably my favorite piece to build because it makes the
          provider self-describing.
        </p>
        <p>
          The idea is simple: instead of clients needing to know all your
          endpoints in advance, they just need to know your base URL. They fetch{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            /.well-known/openid-configuration
          </code>{" "}
          and the response tells them everything.
        </p>
        <p>A simplified version of what this returns:</p>
        <CodeBlock
          language="json"
          code={`{
  "issuer": "http://localhost:3000",
  "authorization_endpoint": "http://localhost:3000/authorize",
  "token_endpoint": "http://localhost:3000/token",
  "userinfo_endpoint": "http://localhost:3000/userinfo",
  "jwks_uri": "http://localhost:3000/jwks",
  "response_types_supported": ["code"],
  "subject_types_supported": ["public"],
  "id_token_signing_alg_values_supported": ["RS256"],
  "scopes_supported": ["openid", "profile", "email"]
}`}
        />
        <p>
          Real providers return much richer metadata, but these are the core
          fields.
        </p>
        <p>
          Why this matters: when you configure an app to use Google as an
          identity provider, you typically only provide Google's base OIDC URL.
          The library you're using then fetches this discovery document and
          learns all the endpoints automatically. That's the whole point -
          decoupled, self-describing identity infrastructure.
        </p>
        <p>
          The{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            jwks_uri
          </code>{" "}
          field here connects back to the JWKS endpoint. Clients use the
          discovery document to find where to fetch public keys, and then use
          those keys to verify tokens. The whole system is self-referential in a
          clean way.
        </p>
      </section>

      <ImagePlaceholder
        seed="openid_config"
        alt="SCREENSHOT: /.well-known/openid-configuration response"
      />

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        Building Authentication Flow
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <p>
          The basic auth flow - register and login - is where users enter the
          system.
        </p>

        <h3 className="text-lg font-bold text-text-primary">Registration</h3>
        <p>
          The{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            /register
          </code>{" "}
          endpoint takes an email and password. Before storing anything, the
          password is hashed with bcrypt:
        </p>
        <CodeBlock
          language="javascript"
          code={`const hashedPassword = await bcrypt.hash(password, 12);`}
        />
        <p>
          The cost factor of 12 means bcrypt performs 2^12 = 4096 iterations of
          its internal function. This makes brute-force attacks slow -
          intentionally. The hashed password is what goes into the database,
          never the original.
        </p>

        <h3 className="text-lg font-bold text-text-primary mt-6">Login</h3>
        <p>
          The{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            /login
          </code>{" "}
          endpoint takes the email and password, looks up the user, runs{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            bcrypt.compare
          </code>{" "}
          against the stored hash, and if valid, issues tokens. The response
          includes an access token, an ID token, and a refresh token.
        </p>

        <h3 className="text-lg font-bold text-text-primary mt-6">
          Protected routes
        </h3>
        <p>
          The verifyToken middleware extracts the Authorization header, splits
          out the Bearer token, and calls{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            jwtVerify
          </code>
          . If the token is missing, malformed, expired, or has an invalid
          signature, the middleware returns a 401. If it's valid, the decoded
          payload gets attached to{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            req.user
          </code>{" "}
          and the route handler runs.
        </p>

        <CodeBlock
          language="javascript"
          code={`export async function verifyTokenMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const payload = await verifyToken(token);
    req.user = payload;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}`}
        />
        <p>
          The Bearer token pattern is just a convention: clients send{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            Authorization: Bearer &lt;token&gt;
          </code>{" "}
          in the header. The server strips the Bearer prefix to get the raw JWT.
        </p>
      </section>

      <ImagePlaceholder
        seed="register_route"
        alt="SCREENSHOT: Register route code or Postman call"
      />
      <ImagePlaceholder
        seed="login_route_resp"
        alt="SCREENSHOT: Login route response"
      />
      <ImagePlaceholder
        seed="profile_route_resp"
        alt="SCREENSHOT: Protected /profile response"
      />
      <ImagePlaceholder
        seed="hash_drizzle"
        alt="SCREENSHOT: Hashed password visible in Drizzle Studio"
      />

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        Access Token vs ID Token
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <p>
          This is a distinction that genuinely tripped me up before I built
          this. Most tutorials issue one token and call it a JWT. OIDC issues
          two: an access token and an ID token, and they serve completely
          different purposes.
        </p>

        <h3 className="text-lg font-bold text-text-primary">Access Token</h3>
        <p>
          The access token is a credential that says "this entity is authorized
          to access these resources." It's what you send to APIs. APIs check it,
          verify the signature, and decide what the caller is allowed to do. The
          access token says nothing about who you are - it says what you can do.
        </p>
        <p>In my implementation, the access token payload looks like:</p>
        <CodeBlock
          language="json"
          code={`{
  "sub": "user-uuid",
  "iss": "http://localhost:3000",
  "aud": "oidc-client",
  "scope": "read:profile",
  "iat": 1718000000,
  "exp": 1718000900
}`}
        />
        <p>
          Short-lived (15 minutes), scoped, not necessarily tied to identity.
        </p>

        <h3 className="text-lg font-bold text-text-primary mt-6">ID Token</h3>
        <p>
          The ID token is introduced by OIDC specifically to carry identity
          claims. It answers "who is this user?" It's a JWT that the client
          application reads to understand the authenticated user's identity.
          It's not sent to APIs - it's consumed by the client.
        </p>
        <CodeBlock
          language="json"
          code={`{
  "sub": "user-uuid",
  "iss": "http://localhost:3000",
  "aud": "oidc-client",
  "email": "user@example.com",
  "name": "Test User",
  "iat": 1718000000,
  "exp": 1718003600
}`}
        />
        <p>
          The presence of email and name is what distinguishes this as an ID
          token - it contains human identity claims from the user's profile.
        </p>

        <h3 className="text-lg font-bold text-text-primary mt-6">
          Why the separation exists
        </h3>
        <p>
          OAuth 2.0 was designed for authorization. When OIDC extended it for
          identity, they didn't modify the existing access token structure -
          they added a new token type with a specific purpose. This keeps
          concerns separated: authorization infrastructure handles access
          tokens, identity infrastructure handles ID tokens. Services that only
          need to know "can this user do X" never need to see identity data.
          Services that need to know "who is this user" use the ID token or call{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            /userinfo
          </code>
          .
        </p>
      </section>

      <ImagePlaceholder
        seed="access_token"
        alt="SCREENSHOT: Access token decoded (e.g., on jwt.io)"
      />
      <ImagePlaceholder
        seed="id_token"
        alt="SCREENSHOT: ID token decoded showing identity claims"
      />

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        Refresh Tokens and Session Management
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <p>
          Access tokens are intentionally short-lived (15 minutes in my
          implementation). If a user has to log in every 15 minutes, the product
          is unusable. Refresh tokens solve this.
        </p>

        <h3 className="text-lg font-bold text-text-primary">The pattern</h3>
        <p>At login, the server issues:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>An access token (short-lived JWT, 15 minutes)</li>
          <li>
            A refresh token (long-lived opaque string, 7 days, stored in the
            database)
          </li>
        </ul>
        <p>
          The client stores both. When the access token expires, the client
          sends the refresh token to{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            /refresh
          </code>
          . The server looks it up in the database, checks it hasn't expired and
          hasn't been revoked, and issues a new access token (and usually a new
          refresh token too, rotating it).
        </p>

        <h3 className="text-lg font-bold text-text-primary mt-6">
          Why the asymmetry?
        </h3>
        <p>
          Access tokens are stateless JWTs - the server doesn't store them.
          There's no way to revoke them mid-lifetime. This is a known trade-off.
          For most use cases, 15 minutes is a short enough window that the risk
          is acceptable.
        </p>
        <p>
          Refresh tokens are stateful - they live in the database. This means
          they can be revoked instantly. Logout doesn't need to wait for the
          access token to expire. You delete the refresh token record and that
          session is dead.
        </p>

        <h3 className="text-lg font-bold text-text-primary mt-6">
          The /logout endpoint
        </h3>
        <CodeBlock
          language="javascript"
          code={`app.post("/logout", async (req, res) => {
  const { refreshToken } = req.body;
  await db.delete(refreshTokens)
    .where(eq(refreshTokens.token, refreshToken));
  res.json({ message: "Logged out successfully" });
});`}
        />
        <p>
          Simple. The record is gone. The refresh token is dead. The access
          token will expire on its own within 15 minutes - acceptable.
        </p>
      </section>

      <ImagePlaceholder
        seed="refresh_drizzle"
        alt="SCREENSHOT: refresh_tokens table in Drizzle Studio"
      />
      <ImagePlaceholder
        seed="refresh_resp"
        alt="SCREENSHOT: /refresh endpoint response"
      />
      <ImagePlaceholder
        seed="logout_resp"
        alt="SCREENSHOT: /logout endpoint response"
      />

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        Understanding Authorization Code Flow
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <p>
          This is where OIDC really clicked for me. Everything else I had built
          up to this point was somewhat familiar - login, tokens, refresh. But
          the authorization code flow is the piece that makes OIDC distinct.
        </p>
        <p>
          The question this flow answers is: how does a third-party application
          authenticate a user through an identity provider, without ever
          handling the user's credentials?
        </p>
        <p>Here is the full flow step by step:</p>

        <h3 className="text-lg font-bold text-text-primary">
          Step 1: Client initiates authorization
        </h3>
        <p>
          The client (your application) redirects the user to the OIDC
          provider's{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            /authorize
          </code>{" "}
          endpoint:
        </p>
        <pre className="bg-surface border border-border p-4 rounded-lg overflow-x-auto text-sm font-mono whitespace-pre-wrap break-all">
          {`GET /authorize?response_type=code&client_id=myapp&redirect_uri=http://localhost:4000/callback&scope=openid profile email`}
        </pre>
        <p>
          The user is now on the OIDC provider's domain. Your app is out of the
          picture temporarily.
        </p>

        <h3 className="text-lg font-bold text-text-primary mt-6">
          Step 2: User authenticates
        </h3>
        <p>
          The OIDC provider handles authentication. In my implementation, if the
          user has an active session (I check a session cookie), I skip the
          login step. Otherwise, they log in here. Critically, the client
          application never sees the password.
        </p>

        <h3 className="text-lg font-bold text-text-primary mt-6">
          Step 3: Authorization code is issued
        </h3>
        <p>
          After successful authentication, the OIDC provider generates a random
          authorization code, stores it in the{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            auth_codes
          </code>{" "}
          table with a short expiry (5 minutes), and redirects the user back to
          the client's redirect_uri:
        </p>
        <pre className="bg-surface border border-border p-4 rounded-lg overflow-x-auto text-sm font-mono whitespace-pre-wrap break-all">
          {`http://localhost:4000/callback?code=abc123xyz`}
        </pre>

        <h3 className="text-lg font-bold text-text-primary mt-6">
          Step 4: Client exchanges code for tokens
        </h3>
        <p>
          The client (server-side) makes a back-channel POST request to{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            /token
          </code>
          :
        </p>
        <pre className="bg-surface border border-border p-4 rounded-lg overflow-x-auto text-sm font-mono whitespace-pre-wrap break-all">
          {`POST /token
grant_type=authorization_code&code=abc123xyz&redirect_uri=http://localhost:4000/callback&client_id=myapp`}
        </pre>
        <p>
          The OIDC provider looks up the code in the database, verifies it's
          valid, not expired, and not already used. It marks the code as used,
          then responds with the actual tokens:
        </p>
        <CodeBlock
          language="json"
          code={`{
  "access_token": "eyJ...",
  "id_token": "eyJ...",
  "token_type": "Bearer",
  "expires_in": 900
}`}
        />

        <h3 className="text-lg font-bold text-text-primary mt-6">
          Why the code step exists
        </h3>
        <p>
          This question confused me initially. Why not just issue the tokens
          directly in the redirect? Why the intermediate code?
        </p>
        <p>
          The answer is about security and channel separation. The redirect URL
          goes through the browser - browser history, server logs, referrer
          headers can all leak URL parameters. If the actual tokens appeared in
          the redirect URL, they'd be exposed.
        </p>
        <p>
          The authorization code is a short-lived, single-use reference. Even if
          someone intercepts it, they can't use it without also having the
          client secret (which is held server-side). The actual token exchange
          happens back-channel, server to server, not through the browser.
        </p>
        <p>
          This separation of the front channel (browser redirects) and back
          channel (server-to-server API calls) is the core security insight of
          the authorization code flow. It protects tokens from browser-level
          exposure.
        </p>
        <p>
          Building this and seeing it work end-to-end was the moment everything
          about OIDC finally made sense to me. The intermediate code, the
          redirect dance, the back-channel exchange - all of it serves a
          specific security purpose.
        </p>
      </section>

      <ImagePlaceholder
        seed="auth_code_resp"
        alt="SCREENSHOT: /authorize response showing generated code"
      />
      <ImagePlaceholder
        seed="auth_codes_table"
        alt="SCREENSHOT: auth_codes table in Drizzle Studio"
      />
      <ImagePlaceholder
        seed="token_resp"
        alt="SCREENSHOT: /token response with access_token and id_token"
      />

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        Building the Frontend
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <p>
          After all the API work, I added a simple frontend to have a real
          interface to test with. Nothing complicated - a few pages built with
          HTML and Tailwind CSS.
        </p>
        <p>The pages:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Login / Signup page</strong> - form that hits{" "}
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              /login
            </code>{" "}
            or{" "}
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              /register
            </code>
          </li>
          <li>
            <strong>Dashboard</strong> - shown after login, displays the user
            profile fetched from{" "}
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              /profile
            </code>
          </li>
          <li>
            <strong>Token viewer</strong> - a debug panel showing the raw access
            token and ID token, with decoded payloads
          </li>
        </ul>
        <p>
          On login, the frontend stores the access token and refresh token in
          localStorage. When making authenticated requests, it pulls the access
          token and adds it to the{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            Authorization: Bearer
          </code>{" "}
          header. When the access token expires, it automatically calls{" "}
          <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
            /refresh
          </code>{" "}
          with the stored refresh token and updates localStorage.
        </p>
        <p>
          This is a simple implementation. In a real production frontend, you'd
          want to think more carefully about token storage - localStorage is
          vulnerable to XSS attacks. HttpOnly cookies are generally preferred
          for token storage in browser applications. But for this project's
          learning purposes, localStorage was fine.
        </p>
        <p>
          The token viewer panel was genuinely useful - being able to see the
          exact token structure and decoded claims while testing helped me
          understand the output of each step.
        </p>
      </section>

      <ImagePlaceholder
        seed="frontend_ui"
        alt="SCREENSHOT: Frontend login/signup UI"
      />
      <ImagePlaceholder
        seed="token_viewer"
        alt="SCREENSHOT: Token viewer showing decoded access and ID tokens"
      />

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        Challenges Faced While Building
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <p>
          I want to be honest about what was actually hard, because the polished
          blog version of a project often hides the 4-hour debugging sessions.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Docker port conflict</strong> - the very first thing I hit.
            PostgreSQL already running locally, Docker couldn't bind to 5432.
            Took me longer than it should have to realize what was happening.
          </li>
          <li>
            <strong>Environment variable encoding</strong> - I had a database
            URL in{" "}
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              .env
            </code>{" "}
            that included a special character in the password. Node's pg driver
            was failing with a cryptic connection error. Eventually figured out
            the special character needed to be percent-encoded in the connection
            string. Boring bug, annoying to track down.
          </li>
          <li>
            <strong>JOSE key loading</strong> - initially tried to load the PEM
            file and pass the string directly to SignJWT. That doesn't work.
            JOSE expects a KeyObject (Node's native crypto representation), not
            a raw PEM string. The fix was wrapping the PEM with{" "}
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              createPrivateKey()
            </code>{" "}
            and{" "}
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              createPublicKey()
            </code>{" "}
            from Node's crypto module. Once I understood this, it was obvious,
            but it wasn't obvious at first.
          </li>
          <li>
            <strong>JWT verification confusion</strong> - I kept getting
            JWTClaimValidationFailed errors during verification. Turns out I was
            signing tokens with audience: "oidc-client" but verifying with a
            different audience string. JOSE is strict about claim validation by
            default - which is correct behavior - but tracking down which claim
            was mismatched took a while.
          </li>
          <li>
            <strong>Asymmetric crypto concepts</strong> - spending time to
            actually understand what the math is doing helped. Not the
            implementation math, but the conceptual model: public key for
            verification, private key for signing, the relationship between
            them. Once this was clear, all the code made more sense.
          </li>
          <li>
            <strong>Refresh token bugs</strong> - had an off-by-one issue with
            the expiry comparison. Was comparing expiry timestamps incorrectly
            (mixing milliseconds and seconds with Unix timestamps - a classic).
            Easy fix once spotted, time-consuming to find.
          </li>
          <li>
            <strong>Middleware order</strong> - Express middleware runs in
            declaration order. I had the body parser and my verify middleware in
            the wrong order on a route, which meant{" "}
            <code className="px-1.5 py-0.5 bg-surface border border-border font-mono text-sm">
              req.body
            </code>{" "}
            was undefined inside the middleware. That one was obvious in
            retrospect.
          </li>
          <li>
            <strong>Authorization code flow</strong> - understanding why the
            code exists took me the longest. I kept thinking it was unnecessary
            complexity until I understood the front-channel vs back-channel
            distinction. After that, it made complete sense.
          </li>
        </ul>
      </section>

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        What I Learned From Building This
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary">
        <p>
          The biggest thing I learned is just how deep authentication systems
          actually are. Not in a discouraging way - in a clarifying way. Before
          this project, "authentication" was a fuzzy concept. Now I can
          articulate the specific pieces: identity storage, token signing, key
          management, session handling, token types, discovery, verification.
        </p>
        <p>
          OIDC is genuinely bigger than JWTs. JWT is a token format. OIDC is an
          identity protocol. Understanding the difference matters when you're
          evaluating auth solutions, debugging token issues, or designing
          systems that integrate with identity providers.
        </p>
        <p>
          The JWKS and discovery endpoints were the things I understood least
          before this project and appreciated most after building them. The idea
          that an identity provider can be completely self-describing, that any
          conforming client can learn everything it needs from a single
          well-known URL - that's a clean piece of protocol design.
        </p>
        <p>
          Asymmetric signing finally clicked not as an abstract concept but as a
          practical necessity. When I thought concretely about the problem -
          "how does Service B verify a token issued by Service A without sharing
          a secret?" - RS256 becomes obviously the right answer.
        </p>
        <p>
          The thing about building rather than reading is that you encounter the
          actual failure modes. You hit the real error messages. You have to
          understand the thing well enough to fix it. That's different from
          reading about it.
        </p>
      </section>

      <hr className="my-12 border-border" />

      <h2 className="mt-12 mb-6 text-xl sm:text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        Final Thoughts
      </h2>
      <section className="space-y-6 text-base sm:text-lg leading-relaxed text-text-secondary mb-12">
        <p>
          This project started as wanting to understand a few confusing
          acronyms. It ended as a meaningful exploration of how modern identity
          infrastructure works.
        </p>
        <p>
          I'm not recommending that anyone roll their own OIDC provider for
          production. There are excellent, battle-tested implementations
          (Keycloak, Auth0, Authentik, the oidc-provider npm package) that have
          been audited and hardened. Building your own is for learning, not
          production.
        </p>
        <p>
          But I do think there is real value in building things like this. The
          next time I configure an OAuth2 integration or debug a JWT validation
          issue or evaluate an identity provider, I'll know what I'm looking at.
          I'll understand why the endpoints exist, what the tokens contain, how
          the verification works, and what the security trade-offs are.
        </p>
        <p>
          That kind of understanding doesn't come from reading documentation. It
          comes from building something, breaking it, fixing it, and building it
          again.
        </p>
        <p>
          If any of this is interesting to you, build it. Start with just
          signing a JWT with an RSA key. Then build the JWKS endpoint. Then add
          the discovery document. Each step teaches something concrete. By the
          time you've implemented the authorization code flow end-to-end, you'll
          look at any OIDC provider in the world and understand exactly what
          it's doing.
        </p>
        <p>That's worth the weekend.</p>
      </section>
    </article>
  );
}
