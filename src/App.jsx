import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Blogs from "@/pages/Blogs";
import BlogPost from "@/pages/BlogPost";
import Portfolio from "@/pages/Portfolio";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import YouTube from "@/pages/YouTube";
import Notes from "@/pages/Notes";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Analytics />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/youtube" element={<YouTube />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/:category/:slug" element={<BlogPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
