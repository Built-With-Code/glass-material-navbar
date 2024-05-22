import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen flex flex-col justify-center items-center gap-6 dark:bg-neutral-800 -mt-24">
        <h1>Global royalties made simple</h1>
        <h2>
          The only platform built for global, direct music licensing and
          administration
        </h2>
        <div className="relative w-[80vw] aspect-video rounded-md overflow-hidden">
          <Image
            src="/music.jpg"
            alt="music"
            sizes="80vw"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-6 bg-neutral-50 dark:bg-neutral-600 min-h-[70vh]">
        <h1>Transforming global royalty collections</h1>
        <h2>
          Remove intermediaries, collect royalties directly from the source, and
          ensure faster payments
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-16 mt-10">
          <div>
            <h3>Fast</h3>
            <p>
              With our expansive global coverage, we rapidly locate your songs,
              wherever they've played, ensuring prompt and direct payment. No
              intermediaries, no delays—just results.
            </p>
          </div>
          <div>
            <h3>Direct</h3>
            <p>
              Our no-middleman approach means no leakage - maximizing your
              income through our complete global licensing and administration
              platform.
            </p>
          </div>
          <div>
            <h3>Transparent</h3>
            <p>
              We stand alone in offering 100% audit rights to all clients,
              reinforcing our commitment to transparency and trust in every
              transaction.
            </p>
          </div>
        </div>
      </section>
      <section className="h-screen bg-violet-300 dark:bg-violet-600 flex flex-col gap-6 justify-center">
        <h1>Join the movement.</h1>
        <h2>Sign up for early access.</h2>
      </section>
    </main>
  );
}
