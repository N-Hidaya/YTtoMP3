import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";

const HowTo: NextPage = () => {

    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  flex  mx-auto flex-col items-center justify-center py-2 min-h-screen">
          <Head>
            <title>YT to MP3 Converter</title>
          </Head>
          <Header />
          <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
           
            <h1 className=" text-[#F0F8FF] mx-auto max-w-4xl font-mogra text-2xl font-bold tracking-normal sm:text-7xl">
              How{" "}
              <span className="relative whitespace-nowrap text-[#FF0000]">
                <span className="relative">to</span>
              </span>{" "}Use {" "}
              <span className="relative whitespace-nowrap text-[#3290EE]">
                <span className="relative">?</span>
              </span>{" "}
            </h1>


            <div className="text-[#F0F8FF]  mx-auto mt-12 max-w-4xl ">
                <h2 className="font-mogra text-2xl">Step 1:</h2>
                <p className="text-lg  leading-7">Copy the YouTube video URL: Visit YouTube and find the video you want to convert. Copy the URL from the address bar of your browser.</p>
            </div>
            <div className="text-[#F0F8FF]  mx-auto mt-12 max-w-4xl ">
                <h2 className="font-mogra text-2xl">Step 2:</h2>
                <p className="text-lg  leading-7">Paste the URL: Return to our website and paste the YouTube video URL into the provided input field.</p>
            </div>
            <div className="text-[#F0F8FF]  mx-auto mt-12 max-w-4xl ">
                <h2 className="font-mogra text-2xl">Step 3:</h2>
                <p className="text-lg  leading-7">Click "Convert" button. Else if you've clicked on the other server, Choose your desired format: Select the format you wish to convert the video to, whether it's MP3 or MP4.</p>
            </div>
            <div className="text-[#F0F8FF]  mx-auto mt-12 max-w-4xl ">
                <h2 className="font-mogra text-2xl">Step 4:</h2>
                <p className="text-lg  leading-7">Start the conversion: Click the "Convert" button to initiate the conversion process. The button will change to "Loading..." state where our system will start processing the video and generate the downloadable file for you.</p>
            </div>
            <div className="text-[#F0F8FF]  mx-auto mt-12 max-w-4xl ">
                <h2 className="font-mogra text-2xl">Step 5:</h2>
                <p className="text-lg  leading-7">Download your file: Once the conversion is complete, the file should be automatically downloaded. Simply click on it to save the file to your device.</p>
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
    
    export default HowTo;