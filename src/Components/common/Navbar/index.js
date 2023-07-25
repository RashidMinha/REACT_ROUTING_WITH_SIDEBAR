import React, { useContext } from "react";
import { NAV_LINKS } from "./component/Navlink";
import DataContext from "../../../Helpers/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Row, Col} from "react-bootstrap";

const Navbar = () => {
  const { showSidebar, setShowSidebar } = useContext(DataContext)
  console.log(showSidebar,"showSidebar")
  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <>
      <div className="pt-4">
        <Row>
          <Col xs={8} className="d-flex align-items-center">
            {NAV_LINKS.map((item, index) => {
              return (
                <div key={index}>
                  <ul className="text-center">
                    <li className="list-unstyled">
                      <a
                        className="text-decoration-none text-dark"
                        href={item.path}
                      >
                        <div>
                          <p>{item.title}</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </Col>
          <Col xs={4} >
            <div onClick={handleSidebarToggle} className='py-3 text-dark'>
              <FontAwesomeIcon style={{marginLeft : "18px"}} icon={['fa-solid', 'fa-bars']} />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Navbar;
