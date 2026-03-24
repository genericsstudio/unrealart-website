import Image from "next/image";
import DitherBackground from "../components/DitherBackground";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Dither background */}
      <div className="absolute inset-0">
        <DitherBackground
          waveColor={[0.5, 0.5, 0.5]}
          waveSpeed={0.05}
          waveFrequency={3}
          waveAmplitude={0.3}
          colorNum={4}
          pixelSize={2}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-10 px-6 text-center">
        <Image
          src="/unreallogo.svg"
          alt="Unreal Art"
          width={320}
          height={84}
          priority
        />

        <div className="flex flex-col items-center gap-2">
          <p
            className="text-xl font-light tracking-[0.25em] text-white/60 uppercase"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            Where creativity
          </p>
          <h1
            className="text-5xl font-semibold italic text-white"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            defies reality.
          </h1>
        </div>
      </div>
    </div>
  );
}
