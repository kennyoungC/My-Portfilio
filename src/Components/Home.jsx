import React from "react"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll/modules"

const Home = () => {
  return (
    <div name="home" className="w-full h-screen   ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#fe764c] ">&lt;Hi, my name is/&gt;</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] ">
          Kenneth Obi
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] ">
          I'm a Full-Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          A Final-year Informatics student with a strong programming background,
          specializing in full-stack development with a focus on front-end
          technologies. Experienced in customer service and proficient in data
          analysis, I am eager to contribute my skills to international
          projects, particularly in crafting intuitive user interfaces and
          enhancing user experiences
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#fe764c] hover:border-[#fe764c]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
