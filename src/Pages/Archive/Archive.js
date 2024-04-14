import React from "react";
import "./Archive.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";
import { BiLogoNetlify } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Archive = () => {
  return (
    <section
      className=" archive-section relative mt-[5rem] mr-[8%] mb-0 ml-[8%]"
      id="archive"
    >
      <NavLink className="nav-link absolute " smooth to="/">
        <div className="icons-name text-primary flex items-center text-[24px] transition ease-in-out duration-300 relative">
          <BsArrowLeft
            id="left-arrow"
            class="left-0 absolute text-[14px]   transition ease-in-out duration-300 text-primary"
          />
          <h4 className="text-[16px] text-primary font-semibold  ml-[18px]">
            Rayel Ahmed
          </h4>
        </div>
      </NavLink>

      <div className=" pt-4">
        <h2 className=" text-[48px] text-third font-bold ">All Projects</h2>
      </div>

      <div className=" mt-[4rem] mb-[4rem]">
        <div className="  flex items-center pb-5">
          <div className=" w-[100px]">
            <h4 className=" text-[14px] text-third font-normal ">Year</h4>
          </div>
          <div className="  w-[300px]">
            <h4 className=" text-[14px] text-third font-normal ">Project</h4>
          </div>
          <div className=" md:flex sm:flex xsm:hidden xl:flex  w-[143px] ">
            <h4 className="text-[14px] text-third font-normal">Made at</h4>
          </div>
          <div className="   md:hidden sm:hidden xsm:hidden xl:flex  w-[450px] flex gap-3">
            <h4 className="   text-[14px] text-third font-normal ">
              Built with
            </h4>
          </div>
          <div className="  w-[250px]  relative">
            <h4 className=" text-[14px] text-third font-normal ">Link</h4>
          </div>
        </div>
        <div className=" bg-seven h-[0.3px] w-full"></div>
        <div className="  flex items-center pt-5 pb-5">
          <div className=" w-[100px]">
            <p className=" text-[14px] text-fourth">2021</p>
          </div>
          <div className=" w-[300px]">
            <h4 className="text-[14px] text-third font-semibold">
              YouTube Clone
            </h4>
          </div>
          <div className="md:flex sm:flex xsm:hidden xl:flex w-[143px] ">
            <BsDashLg className="text-third" />
          </div>
          <div className="md:hidden sm:hidden xsm:hidden xl:flex  w-[450px] flex gap-3">
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              React
            </button>
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              Bootstrap
            </button>
          </div>
          <div className="w-[250px]  relative">
            <a
              className="flex absolute bottom-0 top-0 items-center gap-[5px]  text-fourth transition duration-300 ease-in-out hover:text-primary"
              href="https://utubee.netlify.app/"
            >
              Netlify <BiLogoNetlify className="text-[24px]" />
            </a>
          </div>
        </div>
        <div className=" bg-seven h-[0.3px] w-full"></div>
        <div className="  flex items-center pt-5 pb-5">
          <div className=" w-[100px]">
            <p className=" text-[14px] text-fourth">2021</p>
          </div>
          <div className=" w-[300px]">
            <h4 className="text-[14px] text-third font-semibold">
              Chat GPT Clone
            </h4>
          </div>
          <div className="md:flex sm:flex xsm:hidden xl:flex w-[143px] ">
            <BsDashLg className="text-third" />
          </div>
          <div className="md:hidden sm:hidden xsm:hidden xl:flex  w-[450px] flex gap-3">
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              HTML
            </button>
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              CSS
            </button>
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              JavaScript
            </button>
          </div>
          <div className="w-[250px]  relative ">
            <a
              className="flex absolute bottom-0 top-0    items-center gap-[5px]  text-fourth transition duration-300 ease-in-out hover:text-primary"
              href="https://660ec790185bf01158dea7a0--amazing-gaufre-0dc139.netlify.app/"
            >
              Netlify <BiLogoNetlify className="text-[24px]" />
            </a>
          </div>
        </div>
        <div className=" bg-seven h-[0.3px] w-full"></div>
        <div className="  flex items-center pt-5 pb-5">
          <div className=" w-[100px]">
            <p className=" text-[14px] text-fourth">2021</p>
          </div>
          <div className=" w-[300px]">
            <h4 className="text-[14px] text-third font-semibold">
              Digital Agency Landing Page
            </h4>
          </div>
          <div className="md:flex sm:flex xsm:hidden xl:flex w-[143px] ">
            <BsDashLg className="text-third" />
          </div>
          <div className="md:hidden sm:hidden xsm:hidden xl:flex  w-[450px] flex gap-3">
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              React
            </button>
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              Tailwind CSS
            </button>
          </div>
          <div className="w-[250px]  relative">
            <a
              className="flex absolute bottom-0 top-0 items-center gap-[5px]  text-fourth transition duration-300 ease-in-out hover:text-primary"
              href="https://661112454a79d1ba8648785f--adorable-quokka-7e9422.netlify.app/"
            >
              Netlify <BiLogoNetlify className="text-[24px]" />
            </a>
          </div>
        </div>
        <div className=" bg-seven h-[0.3px] w-full"></div>
        <div className="  flex items-center pt-5 pb-5">
          <div className=" w-[100px]">
            <p className=" text-[14px] text-fourth">2021</p>
          </div>
          <div className=" w-[300px]">
            <h4 className="text-[14px] text-third font-semibold">
              Cafe Street Landing Page
            </h4>
          </div>
          <div className="md:flex sm:flex xsm:hidden xl:flex w-[143px] ">
            <BsDashLg className="text-third" />
          </div>
          <div className="md:hidden sm:hidden xsm:hidden xl:flex  w-[450px] flex gap-3">
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              HTML
            </button>
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              CSS
            </button>
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              JavaScript
            </button>
          </div>
          <div className="w-[250px]  relative">
            <a
              className="flex absolute bottom-0 top-0 items-center gap-[5px]  text-fourth transition duration-300 ease-in-out hover:text-primary"
              href="https://moonlit-babka-42d20f.netlify.app/"
            >
              Netlify <BiLogoNetlify className="text-[24px]" />
            </a>
          </div>
        </div>

        <div className=" bg-seven h-[0.3px] w-full"></div>
        <div className="  flex items-center pt-5 pb-5">
          <div className=" w-[100px]">
            <p className=" text-[14px] text-fourth">2021</p>
          </div>
          <div className=" w-[300px]">
            <h4 className="text-[14px] text-third font-semibold">
              Personal Portfolio old. V1.
            </h4>
          </div>
          <div className="md:flex sm:flex xsm:hidden xl:flex w-[143px] ">
            <BsDashLg className="text-third" />
          </div>
          <div className="md:hidden sm:hidden xsm:hidden xl:flex  w-[450px] flex gap-3">
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              React
            </button>
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              Tailwind CSS
            </button>
          </div>
          <div className="w-[250px]  relative">
            <a
              className="flex absolute bottom-0 top-0 items-center gap-[5px]  text-fourth transition duration-300 ease-in-out hover:text-primary"
              href="https://warm-beignet-ed6aa5.netlify.app/"
            >
              Netlify <BiLogoNetlify className="text-[24px]" />
            </a>
          </div>
        </div>
        <div className=" bg-seven h-[0.3px] w-full"></div>
        <div className="  flex items-center pt-5 pb-5">
          <div className=" w-[100px]">
            <p className=" text-[14px] text-fourth">2021</p>
          </div>
          <div className=" w-[300px]">
            <h4 className="text-[14px] text-third font-semibold">
              Intro Compo. With Firebase Auth
            </h4>
          </div>
          <div className="md:flex sm:flex xsm:hidden xl:flex w-[143px] ">
            <BsDashLg className="text-third" />
          </div>
          <div className="md:hidden sm:hidden xsm:hidden xl:flex  w-[450px] flex gap-3">
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              HTML
            </button>
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              CSS
            </button>
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              JavaScript
            </button>
          </div>
          <div className="w-[250px]  relative">
            <a
              className="flex absolute bottom-0 top-0 items-center gap-[5px]  text-fourth transition duration-300 ease-in-out hover:text-primary"
              href="https://661115cf0b5961c0c32e3d90--darling-pony-aaecd4.netlify.app/"
            >
              Netlify <BiLogoNetlify className="text-[24px]" />
            </a>
          </div>
        </div>
        <div className=" bg-seven h-[0.3px] w-full"></div>
        <div className="  flex items-center pt-5 pb-5">
          <div className=" w-[100px]">
            <p className=" text-[14px] text-fourth">2021</p>
          </div>
          <div className=" w-[300px]">
            <h4 className="text-[14px] text-third font-semibold">
              Weather App
            </h4>
          </div>
          <div className="md:flex sm:flex xsm:hidden xl:flex w-[143px] ">
            <BsDashLg className="text-third" />
          </div>
          <div className="md:hidden sm:hidden xsm:hidden xl:flex  w-[450px] flex gap-3">
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              HTML
            </button>
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              CSS
            </button>
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              JavaScript
            </button>
          </div>
          <div className="w-[250px]  relative">
            <a
              className="flex absolute bottom-0 top-0 items-center gap-[5px]  text-fourth transition duration-300 ease-in-out hover:text-primary"
              href="https://classy-frangollo-96537c.netlify.app/"
            >
              Netlify <BiLogoNetlify className="text-[24px]" />
            </a>
          </div>
        </div>
        <div className=" bg-seven h-[0.3px] w-full"></div>
        <div className="  flex items-center pt-5 pb-5">
          <div className=" w-[100px]">
            <p className=" text-[14px] text-fourth">2021</p>
          </div>
          <div className=" w-[300px]">
            <h4 className="text-[14px] text-third font-semibold">
              CodePen Clone
            </h4>
          </div>
          <div className="md:flex sm:flex xsm:hidden xl:flex w-[143px] ">
            <BsDashLg className="text-third" />
          </div>
          <div className="md:hidden sm:hidden xsm:hidden xl:flex  w-[450px] flex gap-3">
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              React
            </button>
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              Bootstrap
            </button>
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              Material Ui
            </button>
          </div>
          <div className="w-[250px]  relative">
            <a
              className="flex absolute bottom-0 top-0 items-center gap-[5px]  text-fourth transition duration-300 ease-in-out hover:text-primary"
              href="https://6611043b46501db5a539b707--subtle-hotteok-739684.netlify.app/"
            >
              Netlify <BiLogoNetlify className="text-[24px]" />
            </a>
          </div>
        </div>
        <div className=" bg-seven h-[0.3px] w-full"></div>
        <div className="  flex items-center pt-5 pb-5">
          <div className=" w-[100px]">
            <p className=" text-[14px] text-fourth">2021</p>
          </div>
          <div className=" w-[300px]">
            <h4 className="text-[14px] text-third font-semibold">Quiz App</h4>
          </div>
          <div className="md:flex sm:flex xsm:hidden xl:flex w-[143px] ">
            <BsDashLg className="text-third" />
          </div>
          <div className="md:hidden sm:hidden xsm:hidden xl:flex  w-[450px] flex gap-3">
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              HTML
            </button>
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              CSS
            </button>
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              JavaScript
            </button>
          </div>
          <div className="w-[250px]  relative">
            <a
              className="flex absolute bottom-0 top-0 items-center gap-[5px]  text-fourth transition duration-300 ease-in-out hover:text-primary"
              href="https://astonishing-druid-dd80c2.netlify.app/"
            >
              Netlify <BiLogoNetlify className="text-[24px]" />
            </a>
          </div>
        </div>
        <div className=" bg-seven h-[0.3px] w-full"></div>
        <div className="  flex items-center pt-5 pb-5">
          <div className=" w-[100px]">
            <p className=" text-[14px] text-fourth">2021</p>
          </div>
          <div className=" w-[300px]">
            <h4 className="text-[14px] text-third font-semibold">Calculator</h4>
          </div>
          <div className="md:flex sm:flex xsm:hidden xl:flex w-[143px] ">
            <BsDashLg className="text-third" />
          </div>
          <div className="md:hidden sm:hidden xsm:hidden xl:flex  w-[450px] flex gap-3">
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              HTML
            </button>
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              CSS
            </button>
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              JavaScript
            </button>
          </div>
          <div className="w-[250px]  relative">
            <a
              className="flex absolute bottom-0 top-0 items-center gap-[5px]  text-fourth transition duration-300 ease-in-out hover:text-primary"
              href="https://dapper-zuccutto-3237a6.netlify.app/"
            >
              Netlify <BiLogoNetlify className="text-[24px]" />
            </a>
          </div>
        </div>
        <div className=" bg-seven h-[0.3px] w-full"></div>
        <div className="  flex items-center pt-5 pb-5">
          <div className=" w-[100px]">
            <p className=" text-[14px] text-fourth">2021</p>
          </div>
          <div className=" w-[300px]">
            <h4 className="text-[14px] text-third font-semibold">
              Advance Filtering
            </h4>
          </div>
          <div className="md:flex sm:flex xsm:hidden xl:flex w-[143px] ">
            <BsDashLg className="text-third" />
          </div>
          <div className="md:hidden sm:hidden xsm:hidden xl:flex  w-[450px] flex gap-3">
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              React
            </button>
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              Material Ui
            </button>
          </div>
          <div className="w-[250px]  relative">
            <a
              className="flex absolute bottom-0 top-0 items-center gap-[5px]  text-fourth transition duration-300 ease-in-out hover:text-primary"
              href="https://statuesque-mooncake-202984.netlify.app/"
            >
              Netlify <BiLogoNetlify className="text-[24px]" />
            </a>
          </div>
        </div>
        <div className=" bg-seven h-[0.3px] w-full"></div>
        <div className="  flex items-center pt-5 pb-5">
          <div className=" w-[100px]">
            <p className=" text-[14px] text-fourth">2021</p>
          </div>
          <div className=" w-[300px]">
            <h4 className="text-[14px] text-third font-semibold">
              Pricing Components with Toggle
            </h4>
          </div>
          <div className="md:flex sm:flex xsm:hidden xl:flex w-[143px] ">
            <BsDashLg className="text-third" />
          </div>
          <div className="md:hidden sm:hidden xsm:hidden xl:flex  w-[450px] flex gap-3">
            <button class="rounded-full border-none text-[12px]  px-3 py-1 text-primary bg-gray">
              React
            </button>
          </div>
          <div className="w-[250px]  relative">
            <a
              className="flex absolute bottom-0 top-0 items-center gap-[5px]  text-fourth transition duration-300 ease-in-out hover:text-primary"
              href="https://brilliant-otter-69ba46.netlify.app/"
            >
              Netlify <BiLogoNetlify className="text-[24px]" />
            </a>
          </div>
        </div>
        <div className=" bg-seven h-[0.3px] w-full"></div>
      </div>
    </section>
  );
};

export default Archive;
