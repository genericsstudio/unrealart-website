import Image from "next/image";
import DitherBackground from "../components/DitherBackground";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Dither background */}
      <div className="absolute inset-0 animate-appear-fade" style={{ animationDelay: "300ms" }}>
        <DitherBackground
          waveColor={[0.5, 0.5, 0.5]}
          waveSpeed={0.02}
          waveFrequency={3}
          waveAmplitude={0.3}
          colorNum={4}
          pixelSize={3}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.75) 100%)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-10 px-6 text-center">
        <Image
          src="/unreallogo.svg"
          alt="Unreal Art"
          width={320}
          height={84}
          priority
          className="animate-appear"
          style={{ height: "auto", animationDelay: "660ms" }}
        />

        <div className="flex flex-col items-center animate-appear" style={{ animationDelay: "1090ms" }}>
          <h1
            className="text-4xl italic text-white"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Where creativity
          </h1>
          <p
            className="text-2xl tracking-wide text-white"
            style={{ fontFamily: "var(--font-geist-pixel-square)" }}
          >
            defies reality
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
        <div className="flex items-center rounded-full border border-white/20 bg-white/5 p-1 backdrop-blur-sm animate-appear" style={{ animationDelay: "2200ms" }}>
          <input
            type="email"
            placeholder="your@email.com"
            disabled
            className="w-52 bg-transparent px-4 py-1.5 text-sm text-white/50 placeholder:text-white/25 outline-none cursor-not-allowed"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          />
          <Button
            disabled
            className="rounded-full bg-white px-5 py-1.5 text-sm font-medium text-black cursor-not-allowed opacity-60 hover:bg-white"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            Get on the waitlist
          </Button>
        </div>

        <a
          href="mailto:contact@unreal.art"
          className="animate-appear rounded-full border border-white/20 bg-white/5 px-5 py-2 backdrop-blur-sm text-xs text-white/50 tracking-widest uppercase transition-colors duration-500 hover:text-white/80 hover:bg-white/10"
          style={{ animationDelay: "2900ms", fontFamily: "var(--font-geist-sans)", letterSpacing: "0.2em" }}
        >
          contact@unreal.art
        </a>
        </div>
      </div>
    </div>
  );
}
