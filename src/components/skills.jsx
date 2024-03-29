import MarqueeCards from "../cards/MarqueeCards";
import SectionTitle from "../cards/SectionTitle";
import SkillsCards from "../cards/SkillCards";

const Skills = () => {
  return (
    <div id="skills" className=" overflow-hidden-web flex ">
      <div className="w-full min-h-[800px] flex flex-col ">
        <div className="w-full">
          <SectionTitle title="SKILLS" subtitle="MY" />
        </div>
        <div className="xl:border-l-2 xl:border-r-2 xl:border-primary-400 h-full w-full">
          <div className="relative">
            <div className="absolute top-[45px] w-full h-[1px] bg-primary-400 "></div>
            <MarqueeCards direction="left">
              <SkillsCards />
            </MarqueeCards>
          </div>
          <div className="relative">
            <div className="absolute top-[45px] w-full h-[1px] bg-primary-400"></div>
            <MarqueeCards direction="right">
              <SkillsCards />
            </MarqueeCards>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;