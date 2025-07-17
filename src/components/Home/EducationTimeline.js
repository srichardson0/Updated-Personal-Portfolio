import React from 'react';
import './EducationTimeline.css'; // We'll create this CSS file next

function EducationTimeline() {
  const educationEvents = [
    {
      year: "2025 - Present",
      title: "MA in Digital Humanities",
      institution: "The CUNY Graduate Center, New York, NY",
      description: "Focus on computational methods, digital archives, and cultural data analysis."
    },
    {
      year: "2022 - 2024",
      title: "Master of Science in Business Analytics",
      institution: "Baruch College (CUNY), Zicklin School of Business, New York, NY",
      description: "Focused on Data Analytics."
    },
    {
      year: "2017 - 2021",
      title: "Bachelor of Science in Computer Science",
      institution: "Fayetteville State University, Fayetteville, NC",
      description: "Graduated Summa Cum Laude."
    }
    // Add more education entries as needed
  ];

  return (
    <div className="education-timeline-container">
      <h2 className="timeline-heading">My Education Journey</h2>
      <div className="timeline">
        {educationEvents.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{event.year}</h3>
              <h4>{event.title}</h4>
              <p className="institution">{event.institution}</p>
              <p>{event.description}</p>
              <span className="circle"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



export default EducationTimeline;