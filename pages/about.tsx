import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";

const About: NextPage = () => {

    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  flex  mx-auto flex-col items-center justify-center py-2 min-h-screen">
          <Head>
            <title>YT to MP3 Converter</title>
          </Head>
          <Header />
          <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
           
            <h1 className=" text-[#F0F8FF] mx-auto max-w-4xl font-mogra text-2xl font-bold tracking-normal sm:text-7xl">
              About{" "}
              <span className="relative whitespace-nowrap text-[#FF0000]">
                <span className="relative">YT</span>
              </span>{" "}to{" "}
              <span className="relative whitespace-nowrap text-[#3290EE]">
                <span className="relative">MP3</span>
              </span>{" "}
            </h1>


            <div className="text-[#F0F8FF]  mx-auto mt-12 max-w-4xl ">
                <h2 className="font-mogra text-2xl">Simple and user-friendly: </h2>
                <p className="text-lg  leading-7">Our conversion process is straightforward, allowing you to convert videos in just a few clicks. No technical expertise is required.</p>
            </div>
            <div className="text-[#F0F8FF]  mx-auto mt-12 max-w-4xl ">
                <h2 className="font-mogra text-2xl">High-quality conversions: </h2>
                <p className="text-lg  leading-7"> We prioritize the quality of your converted files. Experience crisp audio and sharp video resolutions, maintaining the essence of the original YouTube content.</p>
            </div>
            <div className="text-[#F0F8FF]  mx-auto mt-12 max-w-4xl ">
                <h2 className="font-mogra text-2xl">Multiple format options: </h2>
                <p className="text-lg  leading-7">Whether you prefer audio-only MP3 files or full-length MP4 videos, our converter supports a wide range of formats to suit your needs.</p>
            </div>
            <div className="text-[#F0F8FF]  mx-auto mt-12 max-w-4xl ">
                <h2 className="font-mogra text-2xl">No software installation required: </h2>
                <p className="text-lg  leading-7"> Forget about downloading additional software or plugins. Our YouTube Converter operates entirely online, eliminating any hassle and potential security risks.</p>
            </div>
           
           
            
            <div className=" gap-4 flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
              <p className="text-[#F0F8FF]  mx-auto mt-12 max-w-xl text-lg leading-7">Need to download videos instead? Try the different server here:</p>
              <Link href={"/convertall"}>
              <button className="transition text-xl text-pink-50 ease-in-out px-4 py-2 rounded-full bg-indigo-500 hover:bg-indigo-100 hover:text-pink-400 font-mogra">Download YouTube / Facebook / Instagram / Twitter / SoundCloud / Twitch videos</button>
              </Link>
            </div>
    
           
          </main>
          <Footer />
        </div>
      );
    };
    
    export default About;