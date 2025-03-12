import React from "react";
import { FaReact, FaJsSquare, FaHtml5, FaDatabase } from "react-icons/fa";
import "../styles/Skills.css";

function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="skill-icon react" /> },
    { name: "JavaScript", icon: <FaJsSquare className="skill-icon js" /> },
    { name: "HTML/CSS", icon: <FaHtml5 className="skill-icon html" /> },
    { name: "MongoDB", icon: <FaDatabase className="skill-icon mongo" /> },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Habilidades</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill.icon}
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
