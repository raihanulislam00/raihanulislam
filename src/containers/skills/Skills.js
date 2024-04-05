import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  const skillView = skillMap => {
    return skillMap.map((skills, i) => {
      return (
        <span>
          {i === 0 ? (
            <span key={i}>{skills}</span>
          ) : (
            <span key={i}>{" | " + skills}</span>
          )}
        </span>
      );
    });
  };
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <div
              className={
                isDark
                  ? "dark-mode subTitle skills-text"
                  : "subTitle skills-text"
              }
            >
              <div>
                <span style={{fontWeight: 500, color: "blue"}}>
                  Languages:{" "}
                </span>
                {skillView(skillsSection.languages)}
              </div>
              <div>
                <span style={{fontWeight: 500, color: "blue"}}>Frontend: </span>
                {skillView(skillsSection.frontEnd)}
              </div>
              <div>
                <span style={{fontWeight: 500, color: "blue"}}>Backend: </span>
                {skillView(skillsSection.backEnd)}
              </div>
              <div>
                <span style={{fontWeight: 500, color: "blue"}}>
                  Blockchain/Smart Contracts:{" "}
                </span>
                {skillView(skillsSection.blockChain)}
              </div>
              <div>
                <span style={{fontWeight: 500, color: "blue"}}>DevOps: </span>
                {skillView(skillsSection.devOps)}
              </div>
              <div>
                <span style={{fontWeight: 500, color: "blue"}}>QA: </span>
                {skillView(skillsSection.qa)}
              </div>
              <div>
                <span style={{fontWeight: 500, color: "blue"}}>
                  Data Science:{" "}
                </span>
                {skillView(skillsSection.dataScience)}
              </div>
              <div>
                <span style={{fontWeight: 500, color: "blue"}}>Others: </span>
                {skillView(skillsSection.Others)}
              </div>
            </div>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
