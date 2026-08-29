import React from 'react';
import { Router, Route } from "wouter";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { FloatingButtons } from "./components/FloatingButtons";
import { Home } from "./pages/Home";
import { MultitrackVideos } from "./pages/MultitrackVideos";
import { Apply } from "./pages/Apply";
import FAQ from "./pages/FAQ";
import CVDownload from "./pages/CVDownload";
import { Admin } from "./pages/Admin";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
         <Router>
        <div className="min-h-screen bg-background text-foreground">
          {/* Navigation */}
          <Navbar />

          {/* Floating Buttons */}
          <FloatingButtons />

          {/* Routes */}
          <Route path="/" component={Home} />
          <Route path="/videos" component={MultitrackVideos} />
          <Route path="/apply" component={Apply} />
          <Route path="/faq" component={FAQ} />
          <Route path="/cv" component={CVDownload} />
          <Route path="/admin" component={Admin} />
          <Route component={NotFound} />
        </div>

        {/* Toast Notifications */}
        <Toaster position="top-right" />
      </Router>
      );
}
