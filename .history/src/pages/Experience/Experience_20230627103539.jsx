import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
  return (
    <div className="experience">
    <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="1986 - 1991"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
        Kyiv National University of Technologies and Design
        </h3>
        <p> Master of Science in Chemistry, Technology, and Engineering.                                                   </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2013 - 2014"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
        Technion, Israel                             
        </h3>

        <h4 className="vertical-timeline-element-subtitle">
        Technion Certified Quality Assurance
        </h4>

        <p>Software Tester </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2021 - 2023"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
        Codecademy / PRO, USA                            
        </h3>
{/* 
        <h4 className="vertical-timeline-element-subtitle">
        Full-Stack Engineer
        </h4> */}

        <p>Full-Stack Engineer </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018 - 2020"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Back End Engineer - Google
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>Developed the backend infrastructure for 3 projects.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2020 - present"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Full Stack Engineer - Twitch
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Helped the team launch 2 major features by working both in the front
          end and back end.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
  )
}

export default Experience