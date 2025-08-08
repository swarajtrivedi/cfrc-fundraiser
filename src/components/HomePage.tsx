import React, { useState } from "react";
import styled from "styled-components";
import smear from "../images/image1.png";
import lab from "../images/image2.png";
import htlv from "../images/image5.png";
import skin from "../images/image9.png";
import logo from "../images/image10.png";
import conference from "../images/image3.png";
import presentation from "../images/image4.png";
import groupPicture from "../images/image6.png";
import meetingPicture from "../images/image7.png";

const STRIPE_LINK = "https://buy.stripe.com/4gM9AT2NI3LK0Nq5PQgMw00";

const Page = styled.div`
  font-family: Raleway;
  background: white;
  text-align: center;
  overflow: hidden;
`;

const Header = styled.div`
  background-color: #0d2c6b;
  color: white;
  padding: 10px 20px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  position: relative;
`;

const Logo = styled.img`
  width: 90px;
  height: auto;
`;

const HeaderTextContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
`;

const SubTitle = styled.h2`
  color: #55a4e9;
  font-size: 2rem;
  margin: 0;
`;

const Nav = styled.nav`
  background-color: #52c1f0;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 10px;
  font-weight: bold;
`;

const NavItem = styled.span<{ active?: boolean }>`
  color: ${({ active }) => (active ? "#142457" : "white")};
  cursor: pointer;
  font-size: 1.2rem;
`;

const Section = styled.div`
  padding: 15px 5vw;
`;

const Paragraph = styled.p`
  color: #5c1a73;
  font-weight: bold;
  margin: 6px 0;
  font-size: 1.5rem;
`;

const WhiteParagraph = styled(Paragraph)`
  color: white;
`;

const Emphasis = styled.span`
  color: #b30059;
  font-weight: bold;
`;

const ImageGallery = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 15px 0;
`;

const ImageBox = styled.div`
  width: 280px;
  font-size: 0.8rem;
  font-weight: bold;
  color: #2f95d8;
`;

const Image = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
`;

const FooterBox = styled.div`
  background-color: #52c1f0;
  padding: 10px;
  margin: 10px auto;
  max-width: 700px;
  border-radius: 10px;
`;

const CTAButton = styled.button`
  background-color: #f8981d;
  color: white;
  font-weight: bold;
  padding: 12px 25px;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #ffa733;
  }
`;

const DonateButton = styled.a`
  background-color: #ffa733;
  color: white;
  padding: 12px 28px;
  border-radius: 25px;
  font-size: 1.4rem;
  font-weight: bold;
  text-decoration: none;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const InfoSection = styled.div`
  padding: 0px 5vw;
`;

const InfoParagraph = styled.p<{ purple?: boolean }>`
  font-size: 1.5rem;
  color: ${({ purple }) => (purple ? "#80267e" : "#0d2c6b")};
  font-weight: bold;
  margin: 12px 0;
`;

const ImageRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
`;

const InfoImage = styled.img`
  width: 240px;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
`;

const FinalFooter = styled.div`
  background-color: #0d2c6b;
  color: white;
  padding: 20px 5vw;
  font-style: italic;
`;

const FooterHeading = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
`;

const FooterText = styled.p`
  font-size: 1.4rem;
  margin-top: 10px;
`;

const App = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <Page>
      <Header>
        <Logo src={logo} alt="CFRC Logo" />
        <HeaderTextContainer>
          <Title>Your help can change lives</Title>
          <SubTitle>CFRC - Cure For A Rare Cancer</SubTitle>
        </HeaderTextContainer>
        <DonateButton href={STRIPE_LINK} target="_blank" rel="noopener noreferrer">
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

      <Section>
        <Paragraph style={{ color: "#000080" }}>
          CFRC is a campaign for the rare form of blood cancer linked with a tumor virus, human T lymphotropic virus I (HTLV-1), which is a close cousin of HIV. Major themes are to disseminate knowledge, spread awareness, engage patients, communities, and support research for an aggressive form of Non-Hodgkin’s lymphoma, ATLL (Adult T-cell Leukemia/Lymphoma).
        </Paragraph>

        <ImageGallery>
          <ImageBox>
            <Image src={smear} alt="ATLL Blood Smear" />
            ATLL Blood Smear
          </ImageBox>
          <ImageBox>
            <Image src={lab} alt="Lab" />
          </ImageBox>
          <ImageBox>
            <Image src={htlv} alt="HTLV vs HIV" />
          </ImageBox>
          <ImageBox>
            <Image src={skin} alt="Skin involvement" />
            Skin involvement is common<br />and often painful
          </ImageBox>
        </ImageGallery>

        <Paragraph>
          About 20 million people infected worldwide with a recent epidemic in Australian aboriginals' communities. There is a dire need of help since there is no vaccine, or cure. More research is needed for better treatments. Your support will help fund innovative therapeutic research & participation of attendees in the international conference who otherwise can not attend, including from underserved people.
        </Paragraph>

        <FooterBox>
        <WhiteParagraph>
          <strong>HTLV2026</strong> (
          <a
            href="https://htlv2026.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration: "underline" }}
          >
            htlv2026.org
          </a>
          )<br />
          The 22nd International Conference on Human Retrovirology: HTLV and related viruses<br />
          June 3rd – 6th, 2026 in Philadelphia, PA, USA
        </WhiteParagraph>
        </FooterBox>

        <ButtonRow>
          <CTAButton
            onClick={() =>
              window.open("https://medivents.eventsair.com/htlv-conference-2026/htlv26/Site/Register", "_blank", "noopener,noreferrer")
            }
          >
            Register
          </CTAButton>
          <CTAButton
            onClick={() => window.open(STRIPE_LINK, "_blank", "noopener,noreferrer")}
          >
            Donate
          </CTAButton>
        </ButtonRow>
      </Section>

      <InfoSection>
        <InfoParagraph>
          <strong>The last conference (HTLV 2024)</strong> held in Imperial College London was a great success and paved way for another productive meeting in USA 23 years after HTLV2003 was held in San Francisco, USA
        </InfoParagraph>

        <InfoParagraph purple>
          <strong>HTLV2026</strong> will cover some of the most important advances in discovery research, molecular and immunological pathogenesis, pre-clinical models, epidemiology, diagnostics, prevention, vaccinology, and therapeutics.<br />
          The USA was strategically chosen to draw worldwide attention to this underrecognized virus.
        </InfoParagraph>

        <ImageRow>
          <InfoImage src={presentation} alt="HTLV2026 venue" />
          <InfoImage src={groupPicture} alt="Group photo" />
          <InfoImage src={conference} alt="Conference picture" />
          <InfoImage src={meetingPicture} alt="Meeting room" />
        </ImageRow>

        <InfoParagraph>
          International interest in HTLVs has increased significantly in the last 6 years starting with the open letter to the WHO, the WHO Tokyo workshop (2019) and reports (2021), the call for action to prevent HTLV-1 mother-to-child transmission (PAHO) and the initiation of universal HTLV-1 antenatal screening in Brazil (2024)
        </InfoParagraph>

        <InfoParagraph purple>
          <strong>World HTLV Day</strong> is recognized annually on November 10th, providing an opportunity to spotlight the ongoing challenges faced by those affected by the virus.
        </InfoParagraph>
      </InfoSection>

      <FinalFooter>
        <FooterHeading>About HTLV & ATLL</FooterHeading>
        <FooterText>
          Human T-cell Leukemia Virus (HTLV) is a retrovirus that can cause serious conditions including adult T-cell leukemia/lymphoma (ATLL) and HTLV-1-associated myelopathy/tropical spastic paraparesis (HAM/TSP), a debilitating neurological disease.
          ATLL is one of the most aggressive forms of non hodgkin lymphoma that can be found in the blood as leukemia, lymph nodes as lymphoma, bone, skin, and other areas of the body. It can be presented as Acute Lymphomatous, Chronic and Smoldering with a median survival of 6 months to 2 years. Treatment remains elusive and there is no vaccine or cure for this disease.
        </FooterText>
      </FinalFooter>
    </Page>
  );
};

export default App;
