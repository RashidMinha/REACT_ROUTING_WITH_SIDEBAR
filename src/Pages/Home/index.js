import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Style/HomePage.css" // Create this file for custom styles
import Navbar from '../../Components/common/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../Components/common/custom/Sidebar';
import { useLocation, useNavigate } from 'react-router-dom';
import DataContext from '../../Helpers/Api';


library.add(faBars); // Add the faBars icon to the library


const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const show = location.pathname === "/sidebar" || "/sidebar/";
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(()=>{
    if(showSidebar === true){
      navigate('/sidebar')
    }else{
      navigate('/')
    }
  },[showSidebar])

  return (
  <DataContext.Provider value={{ setShowSidebar, showSidebar }}>
    <div className='home_container'>
      <Row noGutter style={{ width: "100%" }} className='border-bottom border-2'>
        <Col xs={12}>
          <Navbar />
        </Col>
      </Row>
      <Row noGutter>
        <Col xs={show ? 8 : 12}>
          <div className='d-flex justify-content-center align-items-center h-100 '>
            <span className='text-dark text-center'>
              <h1 className='py-2'>RM Codering Creation!</h1>
              <p className='py-2'>A web developer crafts digital experiences, <br /> blending creativity and coding expertise to bring dynamic websites and applications to life.</p>
            </span>
          </div>
        </Col>
        {showSidebar && (
          <Col xs={4}>
            <Sidebar />
          </Col>
        )}
      </Row>
    </div>
   </DataContext.Provider>
  );
};

export default HomePage;
