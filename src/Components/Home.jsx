import React from "react";
import Img1 from "/img1.png";
import Img2 from "/img2.png";
import Img3 from "/img3.png";
import Img4 from "/img4.png";
import Img5 from "/img5.png";
import Img6 from "/img6.png";
import Img7 from "/img7.png";
import Img8 from "/img8.png";
import Img9 from "/img9.png";

const Home = () => {
  return (
    <div className="flex flex-col gap-28">
      <div>
        <div>
          <img src={Img2} alt="/" className="w-full h-[600px] object-cover" />
        </div>
        <div className="absolute w-full h-full top-0 flex flex-col items-center justify-center gap-20 px-4 text-white">
          <h1 className="text-5xl font-bold text-center w-[800px]">
            PROFESSIONAL RESIDENTIAL AND COMMERCIAL CLEANING
          </h1>
          <button className="border border-orange-400 px-4 rounded-full bg-orange-400 h-[40px]">
            BOOK NOW
          </button>
        </div>
      </div>

      <div className="flex items-center gap-20 px-28">
        <img src={Img8} alt="/" className="h-[500px]" />
        <div className="flex flex-col gap-10">
          <div className="">
            <p className="text-xs text-orange-300">ABOUT OUR GROUP</p>
            <h1 className="text-2xl mt-2">PRESIDENTIAL CLEANING SERVICES</h1>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              In a professional context it often happens that private or
              corporate clients corder a publication to be made and presented
              with the actual content still not being ready.
            </p>
            <p>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment
            </p>
          </div>
          <div>
            <div className="flex gap-16">
              <div className="flex flex-col gap-2">
                <p className="text-3xl">53k</p>
                <p className="text-xs">Layout Done</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-3xl">10k</p>
                <p className="text-xs">Projects Done</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-3xl">150</p>
                <p className="text-xs">Get Awards</p>
              </div>
            </div>
            <button className="mt-8 rounded-full bg-orange-400 px-3 h-[40px]">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-10 px-28">
        <div className="flex flex-col justify-center items-center">
          <p className="text-xs text-orange-300">SERVICES NOW</p>
          <h2 className="text-2xl mt-2">WHAT WE OFFER SERVICES</h2>
        </div>
        <img src={Img6} alt="/" />
        <button className="mt-8 rounded-full bg-orange-400 px-3 h-[40px] ">
          VIEW ALL SERVICES
        </button>
      </div>

      <div className="flex flex-col gap-10 px-28">
        <div className="flex flex-col justify-center items-center">
          <p className="text-xs text-orange-300">
            PLAY THIS VIDEO TO HOW MAKE IT
          </p>
          <h2 className="text-2xl mt-2">
            CLICK ON THIS VIDEO TO CHECK HOW WE WORK WITH OUR CLIENTS
          </h2>
        </div>
        <img src={Img3} alt="/" />
      </div>

      <div className="flex flex-col gap-10 px-28">
        <div>
          <p className="text-xs text-orange-300">OUR PRICING</p>
          <h2 className="text-2xl mt-2">THE RIIGHT PLAN FOR YOUR BUSINESS</h2>
        </div>
        <img src={Img4} alt="/" />
      </div>

      <div className="flex flex-col justify-center items-center gap-10 px-28">
        <div className="flex flex-col justify-center items-center">
          <p className="text-xs text-orange-300">CLIENT FEEDBACK</p>
          <h2 className="text-2xl mt-2">
            WHAT DO THEY SAY ABOUT CLENING SERVICES
          </h2>
        </div>
        <img src={Img5} alt="/" />
      </div>

      <div className="flex gap-20 px-28">
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-xs text-orange-300">CLIENT FEEDBACK</p>
            <h2 className="text-2xl mt-2">
              WHAT DO THEY SAY ABOUT CLENING SERVICES
            </h2>
          </div>
          <img src={Img9} alt="/" />
          <button className="mt-8 rounded-full bg-orange-400 px-3 h-[40px] w-[150px]">
            VIEW ALL FAQ
          </button>
        </div>
        <img src={Img1} alt="/" className="h-[500px]" />
      </div>

      <img src={Img7} alt="/" />
    </div>
  );
};

export default Home;
