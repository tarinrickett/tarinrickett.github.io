'use client';

import Image from "next/image";

export function Nav() {
  return (
    <nav className="nav bg-color-canvas w-full max-w-7xl mx-auto px-4 sm:px-8 pt-4 mb-8">
      <div className="nav-logo flex items-center justify-between h-14">
        <a href="#">
          <Image src="/logo--green.png" alt="Tarin" width={56} height={56} />
        </a>

        <div className="nav-links flex gap-6 ml-4 pb-4 border-b-4 border-[var(--color-accent)] w-full justify-end">
          <a
            href="https://www.linkedin.com/in/tarinrickett/"
            target="_blank"
            className="font-bold"
          >
            contact
          </a>
        </div>
      </div>
    </nav>
  );
}
