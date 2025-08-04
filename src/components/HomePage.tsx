import React, { useState } from "react";
import {Container
    ,Header
    ,SubHeader
    ,Description
    ,NavBar
    ,NavLink
    ,HeaderBar
    ,DonateButton
    ,Logo} from "../styles/HomePage.styles";
    
const HomePage = () => {
  const handleDonateClick = () => {
    window.location.href = "https://buy.stripe.com/test_bJedR938u5PK6KU0e8cIE00";
  };

  const [activePage, setActivePage] = useState("Home");

  return (
    <>
      <Container>
        <HeaderBar>
          <Logo>
            CFRC <br /> Cure for Rare Cancer
          </Logo>
          <DonateButton onClick={handleDonateClick}>Donate</DonateButton>
        </HeaderBar>

        <Header>Your help can change lives</Header>
        <SubHeader>CFRC – Cure For A Rare Cancer</SubHeader>

        <Description>
          CFRC is a campaign for the rare form of blood cancer linked with a tumor virus, 
          human T lymphotropic virus I (HTLV-1), which is a close cousin of HIV. <br />
          Major themes are to disseminate knowledge, spread awareness, engage patients, 
          communities, and support research for an aggressive form of Non-Hodgkin’s lymphoma, 
          ATLL (Adult T-cell Leukemia/Lymphoma).
        </Description>

      </Container>

      <NavBar>
        <NavLink active={activePage === "Home"} onClick={() => setActivePage("Home")} href="#">
          Home
        </NavLink>
        <NavLink active={activePage === "Learn More"} onClick={() => setActivePage("Learn More")} href="#">
          Learn More
        </NavLink>
        <NavLink active={activePage === "Contact Us"} onClick={() => setActivePage("Contact Us")} href="#">
          Contact Us
        </NavLink>
      </NavBar>
    </>
  );
};

export default HomePage;
