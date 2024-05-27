import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Custom Software Development"
            des="Custom Solutions: Creating software to the specific needs of a business,
            including web, mobile, and desktop"
            icon={null}
          />
          <Card
            title="Mobile App Development"
            des="iOS and Android Apps: Developing native applications for iOS and Android platforms."
            icon={<AiFillAppstore />}
          />
          <Card
            title="Web Development"
            des="Front-End Development User-friendly.Back-End Development Robust server-side,databases, & APIs.
            Full-Stack Development end-to-end services."
            icon={<SiProgress />}
          />
          <Card
            title="Quality Assurance and Testing"
            des="Manual Testing: & Automated Testing: using tools and frameworks & performance Testing:"
            icon={<FaMobile />}
          />
          <Card
            title="Software System Design"
            des="Software system design is a crucial phase in the software development."
            icon={<SiAntdesign />}
          />
          <Card
            title="Database Development"
            des="Database development is a critical aspect of software system design, 
            focusing on the structured storage, retrieval, and management of data."
            icon={<FaGlobe />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
