import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 rounded-full bg-gradient-primary p-3 text-primary-foreground shadow-glow transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "translate-y-6 pointer-events-none opacity-0"
      } hover:scale-110`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
