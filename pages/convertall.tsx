import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";
import { useEffect, useState } from "react";


const ConvertAll: NextPage = () => {

    const [link, setLink] = useState<string>('');


  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  flex  mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>YT to MP3 Converter</title>
      </Head>
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
        <p
          className="text-[#F0F8FF] border rounded-2xl py-1 px-4 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
        >
          Used by over <span className="font-semibold">300,000</span> happy
          users
        </p>
        <h1 className=" text-[#F0F8FF] mx-auto max-w-4xl font-mogra text-2xl font-bold tracking-normal sm:text-7xl">
          Convert from{" "}
          <span className="relative whitespace-nowrap text-[#FF0000]">
            <span className="relative">ANY</span>
          </span>{" "}videos to{" "}
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLines />
            <span className="relative">MP3/MP4/WebM</span>
          </span>{" "}
        </h1>

        <p className="text-[#F0F8FF]  mx-auto mt-12 max-w-xl text-lg leading-7">
          Simple to use and free YouTube videos to MP3/MP4/WebM converter. Just enter youtube URL in the input field and wait for results to load!
          Pop up ads might appear after clicking the buttons. You may ignore those ads and come back to click the buttons again.
        </p>
       
        <div className=" gap-4 flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
            <input className="rounded outline-pink-300 text-indigo-400 px-2 py-2 mx-4 w-96" 
                    value={link} 
                    onChange={(e) => {setLink(e.target.value);}} 
                    type="text" 
                    placeholder="Enter youtube URL here..." />

    
            <iframe id="widgetv2Api" src={`https://convert2mp3s.com/api/widgetv2?url=${link}`} className="w-full aspect-video" ></iframe>
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default ConvertAll;
