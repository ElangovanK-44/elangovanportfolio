import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-2 border-border" />
        <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-transparent border-t-cyan border-r-blue" />
        <div className="absolute inset-2 rounded-full bg-gradient-primary opacity-80 blur-[2px]" />
      </div>
    </div>
  );
}
