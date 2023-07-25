"use client";

import { GradientBackGroundCon } from "@/components/quoteGenerator/quoteGeneraateorElement";
import Image from "next/image";

export default function Home() {
  return (
    <GradientBackGroundCon>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold text-center">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
      </main>
    </GradientBackGroundCon>
  );
}
