import { ReactNode, useEffect } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../sections/Footer";

export function PublicLayout({ children }: { children: ReactNode }) {
  // Ensure we scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-midnight flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
