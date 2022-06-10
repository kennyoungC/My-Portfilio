import React from "react"
import WorkImg from "../assets/food-delivery.png"
import countryApi from "../assets/countryapi.png"
import spotifyImg from "../assets/spotify.png"
import travelImg from "../assets/travels.png"
import tipApp from "../assets/tipapp.png"
import timetrackingImg from "../assets/timetracking.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#fe764c]">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            data-aos="flip-down"
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://precious-food-delivery.netlify.app/">
                  <button className="hover:bg-[#fe764c] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kennyoungC/Oge-Food-Delivery">
                  <button className="hover:bg-[#fe764c] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            style={{ backgroundImage: `url(${countryApi})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Vanilla JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://kennyoungc.github.io/rest-countries-api-with-color-theme-switcher-master/index.html">
                  <button className="hover:bg-[#fe764c] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kennyoungC/rest-countries-api-with-color-theme-switcher-master">
                  <button className="hover:bg-[#fe764c] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            data-aos="flip-right"
            style={{ backgroundImage: `url(${spotifyImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Vanilla JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://kennyoungc.github.io/team-spotify-project/">
                  <button className="hover:bg-[#fe764c] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kennyoungC/team-spotify-project">
                  <button className="hover:bg-[#fe764c] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-up"
            style={{ backgroundImage: `url(${travelImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                HTML/CSS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://kenneth-travels-and-tour.netlify.app/
"
                >
                  <button className="hover:bg-[#fe764c] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kennyoungC/M2-D3">
                  <button className="hover:bg-[#fe764c] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            data-aos="flip-right"
            style={{ backgroundImage: `url(${timetrackingImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Vanilla JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://time-tracking-dashboard-kenneth.netlify.app">
                  <button className="hover:bg-[#fe764c] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kennyoungC/time-tracking-dashboard-main">
                  <button className="hover:bg-[#fe764c] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            style={{ backgroundImage: `url(${tipApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Vanilla JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://tip-app-calculator-kenneth.netlify.app">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#fe764c]">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kennyoungC/tip-calculator-app-main">
                  <button className="hover:bg-[#fe764c] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
