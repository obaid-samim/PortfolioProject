import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Developer.", "Full Stack .NET Developer.", "Front-End Developer.","Database Developer"],
    loop: true,
    typeSpeed: 15,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY REALITY</h4>
        <h2 className="text-6xl font-bold text-white">
          Hey, I'm <span className="text-designColor capitalize">Obaid'Samim</span>
        </h2>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
          With a background in software development, I bring expertise in crafting innovative solutions to complex problems. Years of hands-on experience have honed my skills in coding, problem-solving, and collaboration. From designing scalable applications to optimizing performance, my background equips me to excel in dynamic tech environments.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Follow me in
          </h2>
          <div className="flex gap-4">
            <a href="https://www.youtube.com/obaidsamim" target="_blank">
              <span className="bannerIcon">
                <FaYoutube />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/obaid-samim-65555b171"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://www.facebook.com/obaidsamim/" target="_blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://github.com/obaid-samim/" target="_blank">
            <span className="bannerIcon">
              <BsGithub />
            </span>
            </a>
          </div>
        </div>
        </div>
    </FadeIn>
  );
};

export default LeftBanner;
