import { useParallax } from "react-scroll-parallax";
function HeroPage() {
  const base = useParallax({
    speed: 20,
  });
  const base_mode = useParallax({
    speed: 25,
  });
  return (
    <div className="flex flex-col justify-center mt-40 min-h-fill lg:min-h-screen">
      <div
        ref={base.ref}
        className="text-center bg-[#151A22] text-white h-auto w-full"
      >
        <div className="text-4xl lg:text-8xl font-inter">
          THE JOURNEY TO <br /> BEING AN{" "}
          <span className="text-purple-500 font-semibold">ARCHITECT</span>
        </div>
        <div
          ref={base_mode.ref}
          className="text-xl lg:text-2xl font-poppins text-white mt-10 lg:mt-20 "
        >
          Want to <span className="text-purple-500 font-semibold">learn</span>{" "}
          something new everyday ,{" "}
          <span className="text-purple-500 font-semibold">compete</span> for
          awesome rewards
          <br /> and{" "}
          <span className="text-purple-500 font-semibold">showcase</span> your
          knowledge? If so, you've come to the correct place. <br /> Participate
          in the numerous incredible events hosted by the{" "}
          <span className="text-purple-500 font-semibold">
            DevSoc community.
          </span>
          <br /> Check out the following events and participate.
        </div>
      </div>
    </div>
  );
}
export default HeroPage;
