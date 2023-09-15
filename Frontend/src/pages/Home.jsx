import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../index.css";
import gif from "../assets/images/gif1.gif";
import Typewriter from "typewriter-effect";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiMiniCodeBracket } from "react-icons/hi2";

const Home = () => {
  const navigate = useNavigate();
  const cookie = localStorage.getItem("userID");

  React.useEffect(() => {
    if (!cookie) {
      navigate("/");
    }
  }, []);
  return (
    <div className="bg-gray-100  flex  w-screen lg:h-screen sm:h-auto ">
      <Navbar />

      <div className="lg:w-6/12 sm:w-full gap-3  h-screen  flex flex-col justify-center items-center   ">
        <p className="text-7xl text-gray-800 poop h-auto ml-10">
          <span className="text-red-500">G</span>oogle{" "}
          <span className="text-green-500">D</span>eveloper{" "}
          <span className="text-blue-500">S</span>tudents{" "}
          <span className="text-yellow-400">C</span>lub
          <p className="font-light text-gray-800 font-sans mt-6 ml-3  text-4xl">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Atmiya University")
                  .pauseFor(2000)
                  .deleteAll()

                  .typeString("Where developers come to Learn")
                  .pauseFor(500)
                  .deleteChars(5)
                  .typeString("Grow")
                  .pauseFor(500)
                  .deleteChars(4)
                  .typeString("and Connect!")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("Connect with Members!")
                  .pauseFor(500)
                  .deleteChars(8)
                  .typeString("Core Members!")
                  .start();
              }}
            />
          </p>
        </p>

        {/* <div className="flex flex-col">
          <p className="">You are not a GDSC member yet?</p>
          <button className="bg-blue-500 w-9/12 text-sm px-5 py-2 poop text-white rounded-lg ">
            JOIN HERE
          </button>
        </div> */}
      </div>

      <div className="lg:w-6/12 sm:w-screen  lg:flex  flex-col justify-center items-center ">
        <img
          src={gif}
          alt="fdsf"
          className="h-5/6 w-5/6 lg:flex sm:hidden  object-contain"
        />
        {/* <div className=" text-2xl flex items-start justify-start  border-2 border-black">
        
        </div> */}

        <div className="flex gap-8 w-full   justify-center items-center">
          <Link
            to="https://github.com/GDSCAtmiya01"
            className="hover:text-blue-500 cursor-pointer"
          >
            <BsGithub size={33} />
          </Link>
          <Link
            to="https://www.linkedin.com/company/gdsc-atmiya-university/"
            className="hover:text-blue-500 cursor-pointer"
          >
            <BsLinkedin size={33} />
          </Link>
          <Link
            to="https://gdsc.community.dev/atmiya-university-rajkot/"
            className="hover:text-blue-500 cursor-pointer"
          >
            <HiMiniCodeBracket size={33} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
