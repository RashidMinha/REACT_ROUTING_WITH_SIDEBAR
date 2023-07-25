import React from "react";
import { Button,Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
const Bottem = ()=> {

    return(
        <>
         <div>
            <Row noGutter>
              <Col xs={6}>
                <span>
                    <Button variant="current"  className="border">
                        <FormattedMessage id="discard" />
                    </Button>
                </span>
              </Col>
              <Col xs={6}>
              <span className="w-100 d-flex justify-content-end mr-4">
                    <Button variant="primary">
                        <FormattedMessage id="apply" />
                    </Button>
                </span>
              </Col>
            </Row>
         </div>
        </>
    )
}

export default Bottem;