import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div className="bg-[#FEFCFB]">
      <div className="relative w-full min-h-screen hero  max-w-[1400px] mx-auto">
        <div className="z-10 flex-col hero-content lg:flex-row-reverse">
          <motion.img
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{
              duration: "2",
              delay: "1",
            }}
            src="/traveller1.png"
            className="w-[300px]"
          />
          <div className="">
            <motion.h1
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{
                duration: "2",
                delay: "1",
              }}
              className="text-[64px] font-volkhov font-bold"
            >
              Get started your exciting{" "}
              <span className="text-[#FA7436]">journey</span> with us.
            </motion.h1>
            <motion.p
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{
                duration: "2",
                delay: "1.2",
              }}
              className="py-6 max-w-[400px]"
            >
              A Team of experienced tourism professionals will provide you with
              the best advice and tips for your desire place.
            </motion.p>
            <motion.button
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{
                duration: "2",
                delay: "1.4",
              }}
              className="btn border-2 border-[#FA7436] text-[18px] font-medium bg-transparent text-[#FA7436] hover:text-white hover:bg-[#FA7436] shadow-lg"
            >
              Discover Now
            </motion.button>
          </div>
        </div>
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{
            duration: "2",
            delay: "1",
          }}
          className="absolute top-0 right-0"
        >
          <svg
            width="942"
            height="963"
            viewBox="0 0 942 963"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[400px] w-[400px]"
          >
            <path
              d="M30.6404 295.282C-23.0965 203.769 8.25003 17.7297 30.6404 -63.8511L934.458 -198.193L1020.25 162.935L969.041 962.338C864.405 963.668 631.057 953.692 534.756 903.147C414.38 839.967 468.915 738.212 369.156 685.008C269.397 631.803 326.592 491.475 292.009 438.27C257.426 385.065 97.8116 409.672 30.6404 295.282Z"
              fill="#FFF1DA"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
