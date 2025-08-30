
import {
    Section,
    Paragraph,
    WhiteParagraph,
    ImageGallery,
    ImageBox,
    Image,
    FooterBox,
    CTAButton,
    ButtonRow,
    InfoSection,
    InfoParagraph,
    ImageRow,
    InfoImage,
    FeaturedRow,
    CenterCol,
    SideImage,
} from "./BodySection.styles";

import smear from "../../../images/image1.png";
import lab from "../../../images/image2.png";
import htlv from "../../../images/image5.png";
import skin from "../../../images/image9.png";
import presentationPicture from "../../../images/image3 (1).png"
import conference from "../../../images/image4 (1).png";
import groupPicture from "../../../images/image6 (1).png";
import meetingPicture from "../../../images/image7 (1).png";
import htlvArticle from "../../../images/image12.png";
import htlvQuote from "../../../images/image13.png";

interface IBodySection {
    scrollToDonateSection : ()=>void
}

export const BodySection = (props: IBodySection) =>{

    const {
        scrollToDonateSection
    } = props;
    return (
        <>
        
            <Section>
                <Paragraph style={{ color: "#0d2c6b", textAlign: "left" }}>
                CFRC is a campaign to raise awareness about a rare form of blood cancer caused by the tumor virus namely human T-cell leukemia virus 1 (HTLV-1). Major themes are to disseminate knowledge, spread awareness, engage patients, communities, and support research for an aggressive form of Non-Hodgkin’s lymphoma, ATLL (Adult T-cell Leukemia/Lymphoma).
                </Paragraph>

                <ImageGallery>
                  <ImageBox>
                    <Image src={htlv} alt="HTLV vs HIV" />
                  </ImageBox>
                  <ImageBox>
                    <Image src={skin} alt="Skin involvement" />
                    Skin involvement is common<br />and often painful
                  </ImageBox>
                  <ImageBox>
                    <Image src={lab} alt="Lab" />
                  </ImageBox>
                  <ImageBox>
                    <Image src={smear} alt="ATLL Blood Smear" />
                    Getty image of ATLL Blood Smear
                  </ImageBox>
                </ImageGallery>

                <Paragraph style={{ color: "#0d2c6b", textAlign: "left" }}>
                  About 20 million people infected worldwide with a recent epidemic in Australian aboriginals' communities. There is a dire need of help since there is no vaccine, or cure. More research is needed for better treatments. Your support will help fund innovative therapeutic research & participation of attendees in the international conference who otherwise can not attend, including participants from underserved regions.
                </Paragraph>

                <br/>
              
                <FeaturedRow>
                  {/* Left image (desktop) */}
                  <a style={{height:""}} href="https://www.inquirer.com/health/human-t-lymphotropic-virus-blood-cancer-diagnosis-symptoms-awareness-20250806.html?id=6WyFpNuW1gcf8&utm_source=social&utm_campaign=gift_link&utm_medium=referral">
                  <SideImage src={htlvArticle} alt="Left visual" />
                  </a>

                  {/* Center content */}
                  <CenterCol>
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
                        )<br /><br/>
                        The 22nd International Conference on<br/> Human Retrovirology: <br/> HTLV and related viruses<br /><br/>
                        June 3rd – 6th, 2026 <br /> Philadelphia, PA, USA
                      </WhiteParagraph>
                    </FooterBox>
                      
                    <ButtonRow>
                      <CTAButton
                        onClick={() =>
                          window.open(
                            "https://medivents.eventsair.com/htlv-conference-2026/htlv26/Site/Register",
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                      >
                        Register
                      </CTAButton>
                      <CTAButton onClick={(e)=> {
                        window.location.href = "/donate";
                      }}>
                        Donate
                      </CTAButton>
                    </ButtonRow>
                  </CenterCol>
                      
                  {/* Right image (desktop) */}
                  <a style={{height:""}} href="https://www.inquirer.com/health/human-t-lymphotropic-virus-blood-cancer-diagnosis-symptoms-awareness-20250806.html?id=6WyFpNuW1gcf8&utm_source=social&utm_campaign=gift_link&utm_medium=referral">
                    <SideImage src={htlvQuote} alt="Right visual" />
                  </a>
                  
                </FeaturedRow>

                <br/>

                  

            </Section>

            <InfoSection>
                <InfoParagraph>
                  <strong>The last conference (HTLV 2024)</strong> held in Imperial College London was a great success and paved way for another productive meeting in USA 23 years after HTLV2003 was held in San Francisco, USA
                </InfoParagraph>
                <br/>
                <InfoParagraph>
                  <strong>HTLV2026</strong> will cover some of the most important advances in discovery research, molecular and immunological pathogenesis, pre-clinical models, epidemiology, diagnostics, prevention, vaccinology, and therapeutics.
                   The USA was strategically chosen to draw worldwide attention to this underrecognized virus.
                </InfoParagraph>
                <br/>
                <ImageRow>
                  <InfoImage src={conference} alt="Conference picture" />
                  <InfoImage src={presentationPicture} alt="Meeting room" />
                  <InfoImage src={groupPicture} alt="Group photo" />
                  <InfoImage src={meetingPicture} alt="Meeting room" />
                </ImageRow>
                <br/>
                <InfoParagraph>
                  International interest in HTLVs has increased significantly in the last 6 years starting with the open letter to the WHO, the WHO Tokyo workshop (2019) and reports (2021), the call for action to prevent HTLV-1 mother-to-child transmission (PAHO) and the initiation of universal HTLV-1 antenatal screening in Brazil (2024)
                </InfoParagraph>
                <br/>
                <InfoParagraph purple>
                  <strong>World HTLV Day</strong> is recognized annually on November 10th, providing an opportunity to spotlight the ongoing challenges faced by those affected by the virus.
                </InfoParagraph>
                <br/>
            </InfoSection>
        </>
    )
}