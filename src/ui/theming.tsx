'use client';

import Image from "next/image";
import { palette } from '../constants/theming';

export function Bubble() {
  return (
    <>
        <Image src="/theming/bubble--pink.png" alt="Tarin" width={240} height={240} className="hidden pink:block" />
        <Image src="/theming/bubble--red.png" alt="Tarin" width={240} height={240} className="hidden red:block" />
        <Image src="/theming/bubble--yellow.png" alt="Tarin" width={240} height={240} className="hidden yellow:block" />
        <Image src="/theming/bubble--green.png" alt="Tarin" width={240} height={240} className="hidden green:block" />
        <Image src="/theming/bubble--blue.png" alt="Tarin" width={240} height={240} className="hidden blue:block" />
        <Image src="/theming/bubble--purple.png" alt="Tarin" width={240} height={240} className="hidden purple:block" />
    </>
  );
}

export function Logo() {
    const randomize = () => {
      palette.forEach(color => document?.documentElement?.classList.remove(color));
      document?.documentElement?.classList.add(palette[Math.floor(Math.random() * palette.length)]);
    };

    return (
      <button className="hover:cursor-pointer" onClick={randomize} aria-label="Change website accent color">
        <Image src="/theming/logo--light.png" alt="Tarin Logo" width={56} height={56} className="block dark:hidden" />
        <Image src="/theming/logo--dark.png" alt="Tarin Logo" width={56} height={56} className="hidden dark:block" />
      </button>
    );
  }
