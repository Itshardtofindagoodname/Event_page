import { useParallax } from "react-scroll-parallax";

function Cards() {
  const heading = useParallax({
    speed: -15,
    translateY: [0, 100],
  });
  const team = useParallax({
    speed: -5,
  });
  return (
    <div className="bg-[#151A22] text-white w-full min-h-auto overflow-hidden">
      <div ref={heading.ref} className="text-center lg:mb-20">
        <span className="text-4xl lg:text-8xl font-extrabold font-inter lg:mt-10 ">
          CURRENT{" "}
        </span>
        <span className="text-4xl lg:text-8xl text-purple-500 font-extrabold font-inter lg:mt-10">
          {" "}
          EVENTS
        </span>
      </div>
      <div className="flex justify-center items-center mb-20">
        <div className="px-5 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-20">
          <div className="card bg-contain bg-hackathon text-white rounded-2xl text-xl font-bold font-inter flex justify-start items-end h-60 w-60 pl-10 lg:h-60 lg:w-80 border-2 border-black shadow-[5px_5px_0px_black,inset_20px_-125px_100px_black] hover:border-none hover:translate-x-0 hover:shadow-[inset_20px_-110px_100px_black] hover:ease-in duration-100">
            <span className="text_design">
              Hackathons
              <br />
              <span className="hidden date_style">Date:</span>
            </span>
          </div>
          <div className="card bg-contain bg-workshop text-white rounded-2xl text-xl font-bold font-inter flex justify-start items-end h-60 w-60 pl-10 lg:h-60 lg:w-80 border-2 border-black shadow-[5px_5px_0px_black,inset_20px_-125px_100px_black] hover:border-none hover:translate-x-0 hover:shadow-[inset_20px_-110px_100px_black] hover:ease-in duration-100">
            <span className="text_design">
              Workshops
              <br />
              <span className="hidden date_style">Date:</span>
            </span>
          </div>
          <div className="card bg-contain bg-build text-white rounded-2xl text-xl font-bold font-inter flex justify-start items-end h-60 w-60 pl-10 lg:h-60 lg:w-80 border-2 border-black shadow-[5px_5px_0px_black,inset_20px_-125px_100px_black] hover:border-none hover:translate-x-0 hover:shadow-[inset_20px_-110px_100px_black] hover:ease-in duration-100">
            <span className="text_design">
              Showcase Your Build
              <br />
              <span className="hidden date_style">Date:</span>
            </span>
          </div>
        </div>
      </div>
      <div ref={team.ref} className="text-center flex justify-center items-end">
        <span className="text-2xl lg:text-8xl font-extrabold font-inter lg:mt-10 mb-10">
          OUR TEAM
        </span>
      </div>
    </div>
  );
}
export default Cards;
