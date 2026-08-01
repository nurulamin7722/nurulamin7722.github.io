import React from 'react';
import './Skills.css';

export const Skills: React.FC = () => {
  const categories = [
    {
      title: 'Project Delivery & Methodologies',
      desc: 'Agile execution, Scrum implementation, roadmap planning, risk mitigation, resource scheduling, sprint planning & backlog grooming.',
    },
    {
      title: 'Product Strategy & Coordination',
      desc: 'Business analysis, requirements gathering, roadmap prioritizations, UX wireframing alignment, analytics-driven decisions.',
    },
    {
      title: 'Quality & Security Credentials',
      desc: 'Software Quality Assurance & Cyber Security certification (from IT Training BD).',
    },
  ];

  const tools = [
    'Jira', 'Confluence', 'Notion', 'Bordio', 'Slack', 'Trello', 'ClickUp', 
    'Asana', 'MS Office', 'Git / GitHub', 'Figma (basics)', 'Postman', 'SQL (basic queries)', 'HTML/CSS'
  ];

  return (
    <section id="skills" className="skills-section container reveal-in">
      <div className="skills-grid-layout">
        {/* Left Side: Competencies */}
        <div className="skills-info-col">
          <div className="section-header">
            <span className="section-subtitle">CAPABILITIES</span>
            <h2 className="section-title">Technical Arsenal</h2>
          </div>
          
          <div className="skills-categories-stack">
            {categories.map((cat, idx) => (
              <div key={idx} className="skills-category-box">
                <h3 className="skills-cat-title">{cat.title}</h3>
                <p className="skills-cat-desc">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Tools tags */}
        <div className="skills-tools-col">
          <span className="tools-section-title">Tools & Systems</span>
          <div className="tools-grid-chips">
            {tools.map((tool, idx) => (
              <span key={idx} className="tool-chip-spotlight">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
