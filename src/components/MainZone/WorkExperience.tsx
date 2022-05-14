import { Title } from "../Title";
import { Row } from "./Row";

type TechnologiesProps = {
  technologies: string;
};

function Technologies({ technologies }: TechnologiesProps) {
  return <p className="italic">Technologies: {technologies}</p>;
}

export function WorkExperience() {
  return (
    <div>
      <Title title="Work Experience" />
      <ul className="list-disc ml-4">
        <Row
          title={{
            date: "Jul. 2018 - Ongoing",
            job: "Software Engineer (Frontend), Klaxoon",
          }}
        >
          <p className="text-justify">
            Development of the web application Klaxoon.
          </p>
          <p className="text-justify">
            Focusing on the frontend architecture and the development of the
            frontend features of the main product (Klaxoon).
          </p>
          <Technologies technologies="React, Mobx, Mobx State Tree, Formik, Tachyons, Jest, Cypress, Backbone, Marionette, Webpack, Babel, NodeJs" />
        </Row>
        <Row
          title={{
            date: "Mar. 2015 - Jul. 2018",
            job: "Software Engineer, Hoppen",
          }}
          className="mt-6"
        >
          <p className="text-justify">
            Development of frontend and backend applications used in the
            healthcare area.
          </p>
          <p>Microservice architecture powered by docker.</p>
          <Technologies technologies="NodeJs, Redux, Polymer, Electron, Mongodb, Docker" />
        </Row>
        <Row
          title={{
            date: "Mar. 2014 - Aug. 2014",
            job: "Software Engineer Internship, Capptain",
          }}
          className="mt-6"
        >
          <p className="text-justify">
            My internship was to design and to create a real time computation
            application which was scalable and resilient to crashes.
          </p>
          <Technologies technologies="Storm/Trident, Apache HBase, Kafka, GWT, Scrum, Gradle" />
        </Row>
        <Row
          title={{
            date: "Jun. 2013 - Aug. 2013",
            job: "Software Engineer Internship, Tocea",
          }}
          className="mt-6"
        >
          <p className="text-justify">
            The project was a part of the Scertify™ SaaS software. It is a web
            portal and allows users to realize audits on projects and
            applications in order to detect violations of programming rules.
          </p>
          <p className="text-justify">
            My role was to specify, to develop and to design an application
            displaying the administration data of Scertify™ SaaS.
          </p>
          <Technologies technologies="GWT, Hibernate, Maven, Spring, Tomcat, Liferay, Jenkins" />
        </Row>
      </ul>
    </div>
  );
}
