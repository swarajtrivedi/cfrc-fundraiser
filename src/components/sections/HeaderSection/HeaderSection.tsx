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

interface IHeaderSection {
  scrollToDonateSection: ()=>void
}

export const HeaderSection = (props: IHeaderSection) =>{
  const {
    scrollToDonateSection
  } = props;
  const [activeTab, setActiveTab] = useState("Home");
  return (
      <>
          <Header>
              <Logo src={logo} alt="CFRC Logo" />
              <HeaderTextContainer>
                <Title>Your help can change lives</Title>
                <SubTitle>CFRC - Cure For A Rare Cancer</SubTitle>
              </HeaderTextContainer>
              <DonateButton onClick={scrollToDonateSection}>
                Donate
              </DonateButton>
          </Header>
          <Nav>
            {["Home", "Learn More", "Contact Us"].map((tab) => (
              <NavItem
                key={tab}
                active={tab === activeTab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </NavItem>
            ))}
          </Nav>
      </>
    )
}