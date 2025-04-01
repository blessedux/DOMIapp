"use client";

import React from "react";
import { LogoCarousel } from "@/components/ui/logo-carousel";

// Import the Logo interface to match the expected type
interface Logo {
  name: string;
  id: number;
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// Create logos array with proper typing
const logos: Logo[] = [
  {
    name: "Empresa 1",
    id: 1,
    img: function InstagramLogo(props: React.SVGProps<SVGSVGElement>) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
          {...props}
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <path d="M17.5 6.5h.01" />
        </svg>
      );
    }
  },
  {
    name: "Empresa 2",
    id: 2,
    img: function YoutubeLogo(props: React.SVGProps<SVGSVGElement>) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
          {...props}
        >
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <path d="m9.75 15.02 5.75-3.27-5.75-3.27v6.54z" />
        </svg>
      );
    }
  },
  {
    name: "Empresa 3",
    id: 3,
    img: function LinkedinLogo(props: React.SVGProps<SVGSVGElement>) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
          {...props}
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <path d="M2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    }
  },
  {
    name: "Empresa 4",
    id: 4,
    img: function FacebookLogo(props: React.SVGProps<SVGSVGElement>) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
          {...props}
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    }
  },
  {
    name: "Empresa 5",
    id: 5,
    img: function TwitterLogo(props: React.SVGProps<SVGSVGElement>) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
          {...props}
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      );
    }
  }
];

export default function LogoCarouselSection() {
  return (
    <section className="py-10 bg-white dark:bg-gray-950 border-t border-b border-gray-200 dark:border-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-xl font-medium tracking-tight text-gray-500 dark:text-gray-400">
            Confiado por firmas líderes en arquitectura
          </h2>
          <div className="w-full overflow-hidden py-6">
            <LogoCarousel logos={logos} columnCount={5} />
          </div>
        </div>
      </div>
    </section>
  );
}
