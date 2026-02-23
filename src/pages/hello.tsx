import Image from "next/image";
export default function Hello() {
  return (
  <div
    id="hello"
    className="container flex flex-col md:flex-row items-center justify-between gap-12 px-4 py-16"
  >
    <div className="text-left">
      <span className="block text-6xl tracking-tighter 2xl:text-8xl text-white">
        Hello, I&apos;m
      </span>
      <span className="block text-6xl tracking-tighter 2xl:text-8xl text-white">
        <span className="text-green-300">Funky</span>Clonk.
      </span>
    </div>

    <div className="w-48 h-48 md:w-64 md:h-64">
      <Image
        src="/assets/funkyclonk.jpg"
        width={256}
        height={256}
        alt="Profile"
        className="w-full h-full object-cover rounded-full border-4 border-green-300"
      />
    </div>
  </div>
  );
}