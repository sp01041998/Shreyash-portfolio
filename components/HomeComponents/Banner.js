import Typewriter from "typewriter-effect";
import BannerLayout from "../Common/BannerLayout";
import Image from "next/image";

const Banner = () => {
  return (
    <BannerLayout>
      <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
        <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block">
          <div className="flex items-center md:items-center md:justify-around">
            <div className="">
              <div className="">
                <h1 className="text-xl sm:text-2xl xl:text-3xl text-Snow font-bold">
                    LETS BUILD SOMETHING TOGETHER
                </h1>
                <h2 className="text-xl sm:text-2xl xl:text-2xl text-Snow font-bold mt-2">Hi, Im <span className="text-orange-600">Shreyash</span></h2>
              </div>
              <div className="">
                <div className=" py-4 font-cascadia-normal text-Snow pb-4 text-xs h-20 lg:h-auto">
                  <span>
                    <span className="text-Snow sm:text-xl xl:text-2xl font-bold">
                      {" "}
                      I am a{" "}
                      <span className="inline-block">
                        <Typewriter
                          options={{
                            strings: [
                              "Full Stack Developer.",
                              "Next.js Developer.",
                              "Node.js Developer",
                            ],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-48 h-52 relative hidden md:block">
              <Image
                src="/images/emoji.png"
                alt="emoji"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </BannerLayout>
  );
};

export default Banner;
