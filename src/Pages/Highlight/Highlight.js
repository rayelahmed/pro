import React from "react";
import game from "../../projects-banner/fighting__game_mockup.b30776b71c7458dac1e9.png";
import movies from "../../projects-banner/Movibes Website (Community).png";
import { MdArrowOutward } from "react-icons/md";
import "./Highligh.css";

const Highlight = () => {
  return (
    <div className="mt-[12rem] highlight ">
      <div className="h-project gap-x-4 mt-12">
        <div className="hip-img">
          <img className=" h-[70px] w-[140px]" src={movies} alt="" />
        </div>
        <div className="hip-title">
          <h6 className="text-fourth text-[15.5px]">Working...</h6>
          <div className="gap-0">
            <h5 className="text-third text-[15.5px] font-normal">
              Movie Streaming Website
            </h5>
            <h5 className="text-third text-[15.5px] flex gap-[4px] items-center font-normal">
              React.
              <span className="arrow">
                <MdArrowOutward className="ico" />
              </span>
            </h5>
          </div>
        </div>
      </div>
      <a href="https://inspiring-custard-2a5229.netlify.app/">
        <div className="h-project flex items-center gap-x-4">
          <div className="hip-img">
            <img className=" h-[70px] w-[140px]" src={game} alt="" />
          </div>
          <div className="hip-title">
            <h6 className="text-fourth text-[15.5px]">2023</h6>
            <div className="gap-0">
              <h5 className="text-third text-[15.5px] font-normal">
                Fighting game with HTML CSS and
              </h5>
              <h5 className="text-third text-[15.5px] flex gap-[4px] items-center font-normal">
                Javascript.
                <span className="arrow">
                  <MdArrowOutward className="ico" />
                </span>
              </h5>
            </div>
          </div>
        </div>
      </a>

      <div className="mt-[7rem] mb-[6rem] font-normal ">
        <p
          style={{ wordSpacing: "3px" }}
          className="text-[15px] font-normal text-fourth "
        >
          Coded in
          <a href="/" className="text-six text-[15.5px] font-normal pr-1">
            Visual Studio Code
          </a>
          by yours truly. Built with
          <a href="/" className="text-six text-[15.5px] font-normal pr-1">
            React.js
          </a>
          and
          <a href="/" className="text-six text-[15.5px] font-normal pr-1 pl-1">
            Tailwind CSS
          </a>
          , deployed with
          <a href="/" className="text-six text-[15.5px] font-normal pr-1 pl-1">
            Vercel
          </a>
          .
          <br />
          All text is set in the Inter typeface.
        </p>
      </div>
    </div>
  );
};

export default Highlight;
