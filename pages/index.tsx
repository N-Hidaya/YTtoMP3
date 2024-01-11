import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";
import { useEffect, useState } from "react";
import { fetch } from "./api/APIreq"
import Link from "next/link";

const Home: NextPage = () => {

  const [link, setLink] = useState<string>('');
  const [id, setId] = useState<string[] | string | null>(null);
  const [response, setResponse] = useState<string[] | any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if(id){

      const fetchData = (): void =>  {
        let interval = setInterval(async (): Promise<void> => {
          const res = await fetch(id);
          setLoading(true);

          if (res.status === 200) {
            const data = await res.data;

            if (data.status === 'ok') {
              setResponse(data);
              clearInterval(interval);
            }
          }
        }, 1000);
      }
      fetchData();
     }
  }, [id]);

  useEffect(() => {
    if(response){
      window.location.href = response.link;
      setTimeout(() => setLoading(false), 1000);
      setTimeout(() => window.location.reload(), 1000);


    }
   
  }, [response])
  

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
          Convert{" "}
          <span className="relative whitespace-nowrap text-[#FF0000]">
            <span className="relative">YouTube</span>
          </span>{" "}videos to{" "}
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLines />
            <span className="relative">MP3</span>
          </span>{" "}
        </h1>

        <p className="text-[#F0F8FF]  mx-auto mt-12 max-w-xl text-lg leading-7">
          Simple to use YouTube videos to MP3 converter. Just enter youtube URL in the input field and click on Convert button to start!
        </p>
       
        <div className=" gap-4 flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
        
          
          {/* <input className="rounded outline-pink-300 text-indigo-400 px-2 py-2 mx-4 w-96" 
                    value={link} 
                    onChange={(e) => {setLink(e.target.value);}} 
                    type="text" 
                    placeholder="Enter youtube URL here..." />

          <button disabled={loading} className="disabled:opacity-60 transition text-xl text-pink-50 ease-in-out px-4 py-2 rounded-full bg-indigo-500 hover:bg-indigo-100 hover:text-pink-400 font-mogra"
                    onClick={() => {
                      const text: string = link.split("=")[1];
                      if (text){
                        setId(text);
                      }
                    }}>{!loading ? "Convert" : (<div role="status">
                    <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-white-200 animate-spin dark:text-white-600 fill-white-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span>Loading...</span>
                </div>)}</button> */}
          
        
         
        </div>
        <div className=" gap-4 flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <p className="text-[#F0F8FF]  mx-auto mt-12 max-w-xl text-lg leading-7">Need to download videos instead? Try the different server here:</p>
          <Link href={"/convertall"}>
          <button className="transition text-xl text-pink-50 ease-in-out px-4 py-2 rounded-full bg-indigo-500 hover:bg-indigo-100 hover:text-pink-400 font-mogra">Download YouTube / Facebook / Instagram / Twitter / SoundCloud / Twitch videos</button>
          </Link>
        </div>

        <p className="text-[#F0F8FF]  mx-auto mt-12 max-w-4xl text-lg leading-7">
        Convert YouTube videos to MP3 and MP4 formats with ease. Our website offers a fast and reliable solution to transform your favorite YouTube content into downloadable audio and video files. 
        Whether you want to enjoy music on the go or save captivating videos for offline viewing, we've got you covered.
        </p>
        <p className="text-[#F0F8FF]  mx-auto mt-12 max-w-4xl text-lg leading-7">
        Experience the convenience of converting YouTube videos to MP3 and MP4 formats effortlessly. Start using our YouTube Converter today and enjoy your favorite content anytime, anywhere!
        </p>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
