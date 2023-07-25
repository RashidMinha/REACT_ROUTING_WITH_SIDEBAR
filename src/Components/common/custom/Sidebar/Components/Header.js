import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import close from "../../../../../Assets/Icons/close.svg"
import { useNavigate } from "react-router-dom";
import DataContext from "../../../../../Helpers/Api";

const Header = () => {
    const navigate = useNavigate()

    const {setShowSidebar} = useContext(DataContext)
   
    const handleClose = ()=>{
        navigate("/")
        setShowSidebar(false)
    }
    return (
        <>
            <Row noGutter className="border-bottom border-1 align-items-center py-2">
                <Col xs={6}>
                    <img onClick={handleClose} alt="close" style={{ height: "30px" }} src={close} />
                </Col>
                <Col xs={6}>
                   <Row>
                     <Col xs={3} className="m-1" style={{backgroundColor : "#EEF2FF", boxShadow : "1px 1px 1px 1px "}}>
                       <span onClick={()=> navigate('/sidebar/Details')}>Loyal</span>
                     </Col>
                     <Col xs={3} className="m-1" style={{backgroundColor : "#EEF2FF", boxShadow : "1px 1px 1px 1px "}}>
                        <span onClick={()=> navigate('/sidebar/History')}>Gift</span>
                     </Col>
                   </Row>
                   <Row>
                    <Col xs={3} className="m-1" style={{backgroundColor : "#EEF2FF", boxShadow : "1px 1px 1px 1px "}}>
                      <span onClick={()=> navigate('/sidebar/Profile')}>Store</span>
                    </Col>
                   </Row>
                </Col>
            </Row>
        </>
    )
}

export default Header;