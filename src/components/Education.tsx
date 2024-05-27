import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2011 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science IT"
            subTitle="University of GHU (2011 - 2014)"
            result="3.90/4"
            des="A BSc in Computer Science focuses on software development, algorithms, data structures, and IT systems (Networking)."
          />
          <ResumeCard
            title="Full-Stack .NET Cloud Developer"
            subTitle="Humber College (2022 - 2022)"
            result="4.75/5"
            des=" .NET Developer bridging program have secured jobs such as Software Developers, Full Stack, Front End and Back End Developers, Program Analysts, Systems Programmers, and Business Analysts, QA Analysts, among others."
          />
          <ResumeCard
            title="FastTrack Software Engineering Diploma"
            subTitle="Centennial College (2023 - Present)"
            result="4.00/4"
            des="Software engineering methodologies
            Programming languages,
            Design and algorithm concepts,
            Data management tools"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer"
            subTitle="Freelance - (2022 - Present)"
            result="Canada"
            des="A software developer designs, codes, tests, and maintains applications, solving problems with innovative and efficient solutions project-based work."
          />
          <ResumeCard
            title="IT TECHNICIAN"
            subTitle="IAC, Concord, ON Canada - (2022 - 2023)"
            result="Canada"
            des="
            An IT technician troubleshoots, maintains, and repairs computer systems, networks, and hardware, ensuring efficient and reliable technology operations."
          />
          <ResumeCard
            title="Front-end and Database Developer"
            subTitle="Freelance - (2022 - Present)"
            result="Canada"
            des="
            A front-end and database developer designs user interfaces and manages data storage, ensuring seamless interaction and efficient data handling."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
