import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo, projectFour, projectFive, projectSix } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="JAVA Apps"
            des=" Java applications are versatile, secure, and scalable, 
            widely used for web, mobile, and enterprise solutions."
            src={projectOne}
          />
          <ProjectsCard
            title="E-commerce Shopping App"
            des=" E-commerce enables online buying and selling of goods and services, 
            transforming traditional retail industries globally."
            src={projectTwo}
          />
          <ProjectsCard
            title=".NET APIs"
            des=" .NET Framework Class Library (FCL) or .NET Core APIs, provide developers with a 
            vast set of tools and functionalities to build robust and scalable applications."
            src={projectThree}
          />
          <ProjectsCard
            title="HMS Hospital Management System "
            des=" Hospital Management System: Software streamlining hospital operations, 
            including patient records, scheduling, billing, and administrative tasks."
            src={projectFour}
          />
          <ProjectsCard
            title="Sonware Website"
            des="Commercial websites sell products or services online, offering 
            convenience, accessibility, and a wide range of choices."
            src={projectFive}
          />
          <ProjectsCard
            title="Portfolio Project"
            des=" Portfolio projects showcase skills, experience, and 
            accomplishments, demonstrating expertise and suitability for future opportunities."
            src={projectSix}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
