"use client";

import { ChachaCard } from "@/components/ChachaCard";
import MyChart from "@/components/MyChart";
import { mockChachas } from "@/lib/mockChachas";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState<string>();

  return (
    <main className="max-w-screen-2xl pb-40 mx-auto">
      <section className="max-w-4xl mx-auto flex flex-col items-center gap-2">
        <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold inter-var">
          Today&rsquo;s chacha
        </h1>
        <p className="text-base md:text-lg mt-4 font-normal inter-var">
          Walk more than thirty minutes and take a picture of a tree.
        </p>
        <button
          onClick={() => setUser("0x2123kh123")}
          className="mt-12 px-8 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md relative group transition duration-200 text-white"
        >
          Submit chacha
        </button>
      </section>
      {user ? (
        <section className="max-w-4xl mx-auto mt-12">
          <MyChart />
        </section>
      ) : null}
      <section className="mt-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold inter-var">
          Last submitted chachas
        </h2>
        <div className="mx-auto mt-8">
          <div className="flex flex-wrap gap-4 md:gap-5 lg:gap-6">
            {mockChachas
              .toSorted((a, b) => b.date - a.date)
              .map((chacha, i) => (
                <ChachaCard key={i} chacha={chacha} />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
