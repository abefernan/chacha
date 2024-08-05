"use client";

import { ChachaCard } from "@/components/ChachaCard";
import ProgressChart from "@/components/ProgressChart";
import { mockChachas } from "@/lib/mocks/mockChachas";
import { mockUsers } from "@/lib/mocks/mockUsers";
import { useUser } from "@/lib/providers/UserProvider";

export default function Home() {
  const { user, setUser } = useUser();

  return (
    <main className="max-w-screen-2xl pb-40 mx-auto">
      <section className="max-w-4xl mx-auto flex flex-col items-center gap-2">
        <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold inter-var">
          Today&rsquo;s chacha
        </h1>
        <p className="text-base md:text-lg mt-4 font-normal inter-var">
          Walk more than thirty minutes and take a picture of a tree.
        </p>
        <div className="w-48">
          <button
            onClick={
              user
                ? () => console.log("will open modal")
                : () =>
                    setUser(
                      mockUsers[
                        Math.floor(Math.random() * (mockUsers.length + 1))
                      ],
                    )
            }
            className="mt-12 w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md relative group transition duration-200 text-white"
          >
            {user ? "Submit chacha" : "Connect wallet"}
          </button>
          {user ? (
            <button
              onClick={() => setUser(null)}
              className="mt-4 w-full shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
            >
              Disconnect
            </button>
          ) : null}
        </div>
      </section>
      {user ? (
        <section className="max-w-4xl mx-auto mt-12">
          <ProgressChart user={user} />
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
