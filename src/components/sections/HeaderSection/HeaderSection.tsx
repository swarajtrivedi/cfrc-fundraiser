import { useState } from "react";
import styled from "styled-components";
import logo from "../../../images/image10.png";
import {
  Header,
  Logo,
  HeaderTextContainer,
  Title,
  SubTitle,
  Nav,
  NavItem,
  DonateButton
} from "./HeaderSection.styles"
import { useLocation } from "react-router-dom";

interface IHeaderSection {
  scrollToDonateSection: ()=>void,
  scrollToFooterSection: ()=>void
}

export const HeaderSection = (props: IHeaderSection) =>{
  const {
    scrollToDonateSection,
    scrollToFooterSection
  } = props;

  const location = useLocation();

  const getActiveTab = () => {
    if (location.pathname === "/learn-more") return "Learn More";
    if (location.pathname === "/") return "Home";
    if (location.pathname === "/donate") return "Donate";
    return "Home"; // fallback for scrollToFooterSection
  };

  const activeTab = getActiveTab();
  
  return (
      <> 
          <Header>
              <Logo src={logo} alt="CFRC Logo" />
              <HeaderTextContainer>
                <Title>Your help can change lives</Title>
                <SubTitle>CFRC - Cure For A Rare Cancer</SubTitle>
              </HeaderTextContainer>
              <DonateButton onClick={(e) =>{
                window.location.href = "/donate";
              }}>
                Donate
              </DonateButton>
          </Header>
          <Nav>
            {["Home", "Donate", "Learn More", "Contact Us"].map((tab) => (
              <NavItem
                key={tab}
                active={tab === activeTab}
                onClick={(e) => {
                  if(tab == "Contact Us") scrollToFooterSection();
                  else if (tab === "Learn More") window.location.href = "/learn-more";
                  else if (tab === "Home") window.location.href = "/";
                  else if (tab === "Donate") window.location.href = "/donate";
                }}
              >
                {tab}
              </NavItem>
            ))}
          </Nav>
      </>
    )
}