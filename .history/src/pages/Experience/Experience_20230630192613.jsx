import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

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
          <h1 className="vertical-timeline-element-title">
            Kyiv National University of Technologies and Design
          </h1>
          <h2 className="vertical-timeline-element-title"> Master of Science in Chemistry, Technology, and Engineering.</h2>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Technion, Israel</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Technion Certified Quality Assurance
          </h4>
          <h5>Software Tester </h5>
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

          <h4 className="vertical-timeline-element-subtitle">Career Path</h4>
          <h5>Full-Stack Engineer </h5>
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

          <h4 className="vertical-timeline-element-subtitle">Skill Path</h4>
          <h5> Design Databases With PostgreSQL </h5>
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

          <h4 className="vertical-timeline-element-subtitle">Skill Path</h4>
          <h5> Learn Express Course</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Franchise (manager and owner), S.L New
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hod-Hasharon, Israel
          </h4>
          <h5>
            Managed suppliers, accounting, and finances. Led product sales
            analysis and optimization projects. In charge of nine permanent
            employees. Made optimization of product sales based on sales
            analyses. Organized hiring, training for employees, and purchasing
            of staff uniforms and buffets.{" "}
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2005 - 2011"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            QA and Regulation Supervisor in PRC Department, Bateman Litwin
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Atyrau, Kazakhstan
          </h4>
          <h5>
            Kazakhstan’s largest energy project (Kashagan) was valued at 50B$.
            Oversaw Quality Assurance, Planning & Control, and Engineering
            certification matrices. Performed data analysis and ensured
            instrumentation & equipment compliance matrices.
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2002 - 2005"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Head Officer of Customer Care Department, Orbita Plus
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Almaty, Kazakhstan
          </h4>
          <h5>
            International satellite telecommunication company & web hosting. Led
            a group of 14 Account Managers responsible for over 1M customers.
            Organized cheat lists for employees.
          </h5>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
