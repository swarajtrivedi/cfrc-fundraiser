import React, { useState } from "react";
import {
    WhiteContainer,
    Container,
    Header,
    SubHeader,
    Description,
    NavBar,
    NavLink,
    HeaderBar,
    DonateButton,
    Logo,
    Title,
    Paragraph,
    List,
    ListItem,
    Highlight,
    RegisterButton,
    ImageRow,
    Image,
    BlueBox,
    FlexRow,
    FlexColumnText,
    FlexColumnImages,
    TitleLeft,
    ParagraphLeft,
    ListLeft,
    Footer,
    ContentRow,
    LeftColumn,
    RightColumn,
    ConferenceCard
} from "../styles/HomePage.styles";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png"
import image3 from "../images/image3.png"
import image4 from "../images/image4.png"
import image5 from "../images/image5.png"
import image6 from "../images/image6.png"
import image7 from "../images/image7.png"
import image8 from "../images/image8.png"
import image9 from "../images/image9.png"

const HomePage = () => {
  const [activePage, setActivePage] = useState("Home");

  const handleDonateClick = () => {
    window.location.href = "https://buy.stripe.com/4gM9AT2NI3LK0Nq5PQgMw00";
  };

  const handleRegisterClick = () => {
    window.location.href = "https://medivents.eventsair.com/htlv-conference-2026/htlv26/Site/Register";
  };

  return (
    <>
      <Container> 
          <Logo>
            CFRC <br /> Cure for Rare Cancer
          </Logo>
          <Header>
            Your help can change lives
            <SubHeader>
              CFRC - Cure For A Rare Cancer
            </SubHeader>
            
          </Header>
          <DonateButton onClick={handleDonateClick}>Donate</DonateButton>
        
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

      <WhiteContainer>
        <FlexRow style={{height:"150px"}}>
            <Description>
              CFRC is a campaign for the rare form of blood cancer linked with a tumor virus,
              human T lymphotropic virus I <br/>(HTLV-1), which is a close cousin of HIV. <br />
              Major themes are to disseminate knowledge, spread awareness, engage patients,
              communities, and support research for an aggressive form of Non-Hodgkin’s lymphoma,
              ATLL (Adult T-cell Leukemia/Lymphoma).
            </Description>
        </FlexRow>
        <FlexRow>
          <FlexColumnImages>
            <div>
              <Image src={image1} alt="HTLV conference" />
              <p style={{fontSize:"20px",color:"#52bbed", fontWeight:700, margin:"unset"}}>ATLL Blood Smear</p>
            </div>
            <Image src={image2} alt="HTLV presentation" />
            <Image src={image5} alt="HTLV presentation" />
            <div>
              <Image src={image9} alt="HTLV conference" />
              <p style={{fontSize:"20px", color:"#52bbed", fontWeight:700, margin:"unset"}}>Skin involvement is common <br/>and often painful</p>
            </div>
          </FlexColumnImages>
        </FlexRow>

        <FlexRow>
          <Description style={{fontSize: "21px", color: "#7D3382"}}>
          About 20 million people infected worldwide with a recent epidemic in Australian aboriginals' communities. 
          There is a dire need of help since there in no vaccine, or cure. More research is needed for better treatments. 
          Your support will help fund innovative therapeutic research & participation of attendees in the international conference who otherwise can not attend, including from underserved people.
          </Description>
          <ConferenceCard>
          HTLV2026 ( htlv2026.org) <br/>

          The 22nd International Conference on Human Retrovirology: HTLV and related viruses <br/>

          June 3rd – 6th, 2026 in Philadelphia, PA, USA 
            
          </ConferenceCard>
        </FlexRow>
        <DonateButton onClick={handleDonateClick}>Start Giving Today</DonateButton>
        
      </WhiteContainer>

        {/* <ImageRow>
          <Image src={image3} alt="HTLV conference" />
          <Image src={image4} alt="HTLV presentation" />
          <Image src={image8} alt="HTLV presentation" />
        </ImageRow>



        <FlexRow>
          <FlexColumnText>
            <Paragraph style={{ fontStyle: "italic", textAlign: "left" }}>
              “HTLV affects millions of people globally, yet remains largely unknown to the public and underrepresented in medical and research arenas. By bringing together patients, caregivers, and researchers from around the world, particularly those from regions where HTLV is endemic, we can foster collaboration, share critical knowledge, and accelerate progress toward prevention and treatment options.”
            </Paragraph>

            <Paragraph style={{ textAlign: "left", fontSize: "16px !important" }}>
              <p style={{ color: "#2EA8F2", fontWeight: "bold", textAlign: "left" }}>- Professor Pooja Jain, Ph.D</p>
              Professor, Departments of Microbiology and Immunology, Drexel University College of Medicine <br />
              Chair of the 22nd International Conference on Human Retrovirology (HTLV2026.org) <br />
              Secretary of the International Retrovirology Association (IRVA)<br/>
              Dr. Jain, who is also a member of the Sydney Kimmel Comprehensive Cancer Center and serves on the Advisory Board of the Childhood Leukemia and Lymphoma Foundation (CLLF), has dedicated her career to studying retroviruses and their impact on human health.
            </Paragraph>
          </FlexColumnText>

          <FlexColumnImages>
            <Image src={image5} alt="HTLV vs HIV image" />
            <DonateButton onClick={handleDonateClick} style={{ marginTop: "1rem" }}>
              Donate
            </DonateButton>
          </FlexColumnImages>
        </FlexRow>

        <ImageRow>
          <Image src={image6} alt="HTLV conference" />
          <Image src={image7} alt="HTLV presentation" />
        </ImageRow>
        <Paragraph>The last conference (HTLV 2024) held in Imperial College London was a great success and paved way for another productive meeting in USA 23 years after HTLV2003 was held in San Francisco, USA </Paragraph>
        
        <Title>HTLV2026</Title>
        <SubHeader>The 22nd Biennial International Conference on Human Retrovirology: HTLV and related viruses</SubHeader>
        <Paragraph>June 3rd - 6th, 2026 | Philadelphia, Pennsylvania, USA</Paragraph>

        <RegisterButton onClick={handleRegisterClick}>Register</RegisterButton>

        <SubHeader>
          HTLV2026 will cover some of the most important advances in discovery research, molecular and immunological pathogenesis, pre-clinical models, epidemiology, diagnostics, prevention, vaccinology, and therapeutics.
        </SubHeader>
        <Paragraph>
          The USA was strategically chosen to draw worldwide attention to this underrecognized virus.
        </Paragraph>

        <Paragraph>
          Enable participation in HTLV2026 International Conference from Underserved Regions as well as advance Critical Research for a Rare Form of Cancer
        </Paragraph>

        <DonateButton onClick={handleDonateClick}>Donate Now</DonateButton>
        
        <Paragraph>
          <SubHeader>
            World HTLV Day is recognized annually on November 10th, providing an opportunity to spotlight the ongoing challenges faced by those affected by the virus.
          </SubHeader>
        </Paragraph>

      </WhiteContainer>
        <Container>
          <Footer>About HTLV & ATLL:</Footer>
          
          <Description>
            Human T-cell Leukemia Virus (HTLV) is a retrovirus that can cause serious conditions including adult T-cell leukemia/lymphoma (ATLL) and HTLV-1-associated myelopathy/tropical spastic paraparesis (HAM/TSP), a debilitating neurological disease. ATLL is one of the most aggressive forms of non-Hodgkin lymphoma that can be found in the blood as leukemia, lymph nodes as lymphoma, bone, skin, and other areas of the body. It can be presented as Acute Lymphomatous, Chronic and Smoldering with a median survival of 6 months to 2 years. Treatment remains elusive and there is no vaccine or cure for this disease.
          </Description>
        </Container> */}
    </>
  );
};

export default HomePage;