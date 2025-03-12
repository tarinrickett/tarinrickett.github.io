'use client';

export function Divider() {
  return (
    <div className="divide flex flex-row justify-center items-center gap-4 px-4 sm:px-8 w-7xl mx-auto">
        <div className="divider__line w-[50%] h-2 bg-accent" />
        <img src="/logo--green.png" alt="Tarin Logo" className="divider__logo w-14 h-14 flex-shrink-0" />
        <div className="divider__line w-[50%] h-2 bg-accent" />
    </div>
  );
}
