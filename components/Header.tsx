import Image from "next/image";
import Link from "next/link";
import icon from '../public/headphone.png'

export default function Header({ photo }: { photo?: string | undefined }) {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-2">
        <h1 className="text-[#F0F8FF] sm:text-7xl text-4xl font-mogra ml-2">
          YTtoMP3
        </h1>
      </Link>
      
      <Link href="/">
        <h3 className="text-[#F0F8FF] sm:text-xl text-xl font-mogra ml-2">Home</h3>
      </Link>
      <Link href="/howto">
        <h3 className="text-[#F0F8FF] sm:text-xl text-xl font-mogra ml-2">How to Use?</h3>
      </Link>
      <Link href="/about">
        <h3 className="text-[#F0F8FF] sm:text-xl text-xl font-mogra ml-2">About</h3>
      </Link>
    
          <Image
            alt="Icon"
            src={icon}
            className="max-w-xs max-h-xs"
            width={100}
            height={100}
    
          />
      
      
    </header>
  );
}
