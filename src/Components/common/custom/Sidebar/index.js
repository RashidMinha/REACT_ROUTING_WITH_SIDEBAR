import React, { useCallback } from "react";
import Header from "./Components/Header";
import { Row, Col } from "react-bootstrap";
import Detail from "./Components/Detail";
import Bottem from "./Components/Bottem";
import {Route, Routes, useLocation } from "react-router-dom";
import Appoiments from "./View/SidebarComponents/Appoiments";
import Profile from "./View/SidebarComponents/Profile";
import History from "./View/SidebarComponents/History";

const Sidebar = () => {
    const location = useLocation()
    console.log(location.pathname,"location")

    const showComponent = useCallback((tab)=> location.pathname === tab,[location])


    return (
        <>
            <div className="bg-light sidebar px-2">
                <Row noGutter>
                    <Col>
                        <Header />
                    </Col>
                </Row>
                <Row noGutter >
                    <Col xs={3}>
                        <Detail />
                    </Col>
                    <Col xs={9}>
                    <Appoiments show={showComponent("/sidebar/Details")} />
                    <History show={showComponent("/sidebar/History")} />
                    <Profile show={showComponent("/sidebar/Profile")} />
                    </Col>
                </Row>
                <Row noGutter className="border-top border-1">
                    <Col className="py-4">
                        <Bottem />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Sidebar

export const componentTab = ()=> {
    return<>
     <Routes>
        <Route path="/sidebar/Details" element={<Appoiments />} />
     </Routes>
    </>
}