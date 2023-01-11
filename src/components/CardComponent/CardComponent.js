import * as React from "react";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import jobimage from "../../icons/job-image-default.png";
import "./cardcomponent.css";
import JobPage from "../JobPage/JobPage";

export default function CardComponent(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <React.Fragment>
      <Card css={{ w: "80%", h: "300px" }} className="card-element">
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              color="#938c8caa"
            >
              InterJobs
            </Text>
            <Text h3 color="black">
              {props.name}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={jobimage}
            width="100%"
            height="100%"
            objectFit="cover"
            alt="Card example background"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#ffffff66",
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Text color="#000" size={12}>
                {props.descr}
              </Text>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button
                  flat
                  auto
                  rounded
                  color="primary"
                  onClick={() => setModalShow(true)}
                >
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Learn More
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
      {modalShow && (
        <JobPage
          userid={props.userid}
          id={props.id}
          name={props.name}
          type={props.type}
          loc={props.loc}
          op={props.op}
          rs={props.rs}
          descr={props.descr}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      )}
    </React.Fragment>
  );
}
