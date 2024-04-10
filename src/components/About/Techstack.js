import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiMysql,
} from "react-icons/di";
import { SiRedux, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandTypescript, TbBrandCss3 } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";

function Techstack() {
  const iconTooltips = {
    CgCPlusPlus: "C++",
    DiJavascript1: "JavaScript",
    DiReact: "React",
    DiNodejs: "Node.js",
    DiMongodb: "MongoDB",
    DiPython: "Python",
    DiGit: "Git",
    DiMysql: "MySQL",
    SiRedux: "Redux",
    SiNextdotjs: "Next.js",
    SiPostgresql: "PostgreSQL",
    FaBootstrap: "Bootstrap",
    TbBrandTypescript: "TypeScript",
    AiOutlineHtml5: "HTML5",
    TbBrandCss3: "Css3",
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{iconTooltips.AiOutlineHtml5}</Tooltip>}
        >
          <div>
            <AiOutlineHtml5 />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{iconTooltips.TbBrandCss3}</Tooltip>}
        >
          <div>
            <TbBrandCss3 />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{iconTooltips.DiJavascript1}</Tooltip>}
        >
          <div>
            <DiJavascript1 />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{iconTooltips.TbBrandTypescript}</Tooltip>}
        >
          <div>
            <TbBrandTypescript />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{iconTooltips.DiReact}</Tooltip>}
        >
          <div>
            <DiReact />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{iconTooltips.SiNextdotjs}</Tooltip>}
        >
          <div>
            <SiNextdotjs />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{iconTooltips.SiRedux}</Tooltip>}
        >
          <div>
            <SiRedux />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{iconTooltips.DiNodejs}</Tooltip>}
        >
          <div>
            <DiNodejs />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{iconTooltips.FaBootstrap}</Tooltip>}
        >
          <div>
            <FaBootstrap />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{iconTooltips.DiMongodb}</Tooltip>}
        >
          <div>
            <DiMongodb />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{iconTooltips.SiPostgresql}</Tooltip>}
        >
          <div>
            <SiPostgresql />
          </div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{iconTooltips.DiMysql}</Tooltip>}
        >
          <div>
            <DiMysql />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{iconTooltips.DiPython}</Tooltip>}
        >
          <div>
            <DiPython />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{iconTooltips.CgCPlusPlus}</Tooltip>}
        >
          <div>
            <CgCPlusPlus />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{iconTooltips.DiGit}</Tooltip>}
        >
          <div>
            <DiGit />
          </div>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Techstack;
