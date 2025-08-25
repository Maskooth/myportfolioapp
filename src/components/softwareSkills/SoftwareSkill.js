import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  const brandColors = {
    "html-5": "#E34F26",
    css3: "#1572B6",
    sass: "#CC6699",
    JavaScript: "#F7DF1E",
    Angular: "#DD0031",
    reactjs: "#61DAFB",
    nodejs: "#339933",
    npm: "#CB3837",
    Bootstrap: "#563D7C",
    GitHub: "#fff"
  };
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
                onMouseEnter={e =>
                  (e.currentTarget.querySelector("i").style.color =
                    brandColors[skills.skillName])
                }
                onMouseLeave={e =>
                  (e.currentTarget.querySelector("i").style.color = "")
                }
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
