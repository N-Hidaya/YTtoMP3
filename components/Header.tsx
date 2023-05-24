import Image from "next/image";
import Link from "next/link";

export default function Header({ photo }: { photo?: string | undefined }) {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-2">
        <h1 className="text-[#F0F8FF] sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          YTtoMP3
        </h1>
      </Link>
      
        <a
          href="https://vercel.com/templates/next.js/ai-photo-restorer"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            alt="Vercel Icon"
            src="/vercelLogo.png"
            className="sm:w-10 sm:h-[34px] w-8 h-[28px]"
            width={32}
            height={28}
          />
        </a>
      
    </header>
  );
}