import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  educationInfo,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  problemSolving,
  talkSection,
  achievementSection,
  socialMediaConnections
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewEducation = educationInfo.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewProblemSolving = problemSolving.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewSocialMediaConnections = socialMediaConnections.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="https://raihanulislam00.github.io/home" target="_blank">
              Blog
            </a>
          </li>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
         {viewEducation && (
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Experiences</a>
            </li>
          )}
          {/*{viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}*/}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewProblemSolving && (
            <li>
              <a href="#problem_solving">Problem Solving</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#github_projects">Projects</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
          {viewSocialMediaConnections && (
            <li>
              <a href="#social_media">Social</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
