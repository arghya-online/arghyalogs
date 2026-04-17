import { Helmet } from "react-helmet-async";
import { CodeBlock } from "@/components/CodeBlock";
import { CODE_SECTIONS } from "@/data/codes";

export default function Codes() {
  return (
    <div className="space-y-8">
      <Helmet>
        <title>Codes - Arghya Logs</title>
        <meta
          name="description"
          content="Useful code snippets with details and copy support."
        />
      </Helmet>

      <header className="border-b border-border pb-6">
        <h1 className="text-3xl font-bold">Codes</h1>
        <p className="text-text-secondary mt-2">
          Lab-style code sections with algorithm, code, and output.
        </p>
      </header>

      <section className="space-y-6">
        {CODE_SECTIONS.map((section, index) => (
          <article
            key={section.id}
            className=" -lg border border-border bg-surface/30 p-4"
          >
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
              <span className=" -full border border-border px-2 py-0.5 text-text-secondary">
                Section {index + 1}
              </span>
            </div>

            <h2 className="text-xl font-semibold text-text-primary">
              {section.title}
            </h2>

            {section.algorithmTitle && (
              <div className="mt-4">
                <h3 className="font-medium text-text-primary">
                  {section.algorithmTitle}
                </h3>
                {section.algorithmSteps?.length > 0 && (
                  <ol className="mt-2 list-decimal pl-6 text-text-secondary space-y-1">
                    {section.algorithmSteps.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ol>
                )}
              </div>
            )}

            <div className="mt-5 space-y-6">
              {section.snippets.map((snippet, snippetIndex) => (
                <div key={`${section.id}-snippet-${snippetIndex}`}>
                  <h3 className="font-medium text-text-primary mb-2">
                    {snippet.title}
                  </h3>
                  <CodeBlock code={snippet.code} language={snippet.language} />

                  {snippet.explanation?.length > 0 && (
                    <div className="mt-3">
                      <h4 className="text-sm font-medium text-text-primary mb-2">
                        Explanation
                      </h4>
                      <ul className="list-disc pl-6 text-text-secondary space-y-1">
                        {snippet.explanation.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {snippet.output && (
                    <div className="mt-3">
                      <h4 className="text-sm font-medium text-text-primary mb-2">
                        Output
                      </h4>
                      <pre className=" -md border border-border bg-background/60 p-3 text-sm text-text-secondary overflow-x-auto">
                        <code>{snippet.output}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
