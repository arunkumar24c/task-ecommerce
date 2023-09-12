import React from "react";

// link
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="bg-[url('https://res.cloudinary.com/daxmjqsy2/image/upload/v1679394299/bg_nf4aoz.jpg')] bg-cover bg-center bg-no-repeat hero-bg">
        <section className="bg-black shadow-md h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 px-16 -mt-3">
          <div className="container mx-auto flex justify-center items-center h-full">
            {/* text */}
            <div className="flex flex-col">
              <div className="font-seminbold flex items-center uppercase text-white">
                <div className="w-10 h-[3px] "></div>CRICKET TEAM PICTURE
              </div>
              <h1 className="text-[70px] leading-[1.1] font-light mb-4 text-white">
                GOOD PLAYER'S <span className="text-green-600">PICTURE</span>{" "}
                MAKE <br />
                <span className="font-semibold text-orange-900">
                  FANS HAPPY
                </span>
              </h1>
              <Link
                to={"/home"}
                className="self-start uppercase font-semibold border-b-2 border-red-800 text-orange-400"
              >
                Buy more
              </Link>
            </div>
            {/* image */}
            <div className="hidden lg:block">
              <img
                src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1661180744.jpg"
                alt="main-bg"
                className="w-[900px] h-[580px] mt-16"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
