import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-background text-text">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted sm:flex-row sm:px-8 lg:px-12">
        
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-text">Swapnil</span>
        </p>

        <p>
          Designed & Built by{" "}
          <span className="font-medium text-accent">Swapnil</span>
        </p>

      </div>
    </footer>
  );
};

export default Footer;