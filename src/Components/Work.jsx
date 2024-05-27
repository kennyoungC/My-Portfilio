/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react"
import WorkImg from "../assets/food-delivery.png"
import countryApi from "../assets/countryapi.png"
import spotifyImg from "../assets/spotify.png"
import travelImg from "../assets/travels.png"
import rentalls from "../assets/rentalls.png"
import apartmentholdings from "../assets/apartmentHolding.png"
import gecommerce from "../assets/gecommerce.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 ">
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
            data-aos="flip-left"
            style={{ backgroundImage: `url(${apartmentholdings})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold  text-white tracking-wider">
                REACT/GATSBY JS
              </span>
              <br />
              <span className="text-xs font-light text-center text-white tracking-wider">
                APARTMENTHOLDINGS
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://apartmentholdings.sk/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="hover:bg-[#fe764c] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                {/* <a href="#">
                  <button className="hover:bg-[#fe764c] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    &lt;Code/&gt;
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            data-aos="flip-right"
            style={{ backgroundImage: `url(${rentalls})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                REACT/GATSBY JS
              </span>
              <br />
              <span className="text-xs font-light text-center text-white tracking-wider">
                RENTALLS
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://rentalls.com/en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="hover:bg-[#fe764c] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                {/* <a href="https://github.com/kennyoungC/team-spotify-project">
                  <button className="hover:bg-[#fe764c] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    &lt;Code/&gt;
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            data-aos="flip-left"
            style={{ backgroundImage: `url(${gecommerce})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                REACT/NEXTJS
              </span>
              <br />
              <span className="text-xs font-light text-center text-white tracking-wider">
                GECOMMERCE
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://gecommerce.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#fe764c]">
                    Demo
                  </button>
                </a>
                {/* <a href="#">
                  <button className="hover:bg-[#fe764c] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    &lt;Code/&gt;
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            data-aos="flip-down"
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS
              </span>
              <br />
              <span className="text-xs font-light text-center text-white tracking-wider">
                FOOD APP
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://precious-food-delivery.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="hover:bg-[#fe764c] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kennyoungC/Oge-Food-Delivery">
                  <button className="hover:bg-[#fe764c] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    &lt;Code/&gt;
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
                Vanilla JS
              </span>
              <br />
              <span className="text-xs font-light text-center text-white tracking-wider">
                SPOTIFY CLONE
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://kennyoungc.github.io/team-spotify-project/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="hover:bg-[#fe764c] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/kennyoungC/team-spotify-project">
                  <button className="hover:bg-[#fe764c] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    &lt;Code/&gt;
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            data-aos="flip-up"
            style={{ backgroundImage: `url(${travelImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                HTML/CSS
              </span>
              <br />
              <span className="text-xs font-light text-center text-white tracking-wider">
                TRAVEL LANDING PAGE
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
                    &lt;Code/&gt;
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
