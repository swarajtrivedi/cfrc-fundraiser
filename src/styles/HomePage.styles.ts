import styled from "styled-components";

interface NavLinkProps {
    active?: boolean;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  max-height: 200px;
  flex-wrap: wrap;
  background-color: #0B1A3F;
  color: #FFFFFF;
  // padding: 1.5rem;
  padding-left:1.5rem;
  padding-right:1.5rem;
  text-align: center;
  // position: relative;
`;

const Footer = styled.div`
  font-size: 32px;
  
`;

const Header = styled.div`
  
  font-size: 50px !important;
  margin-right: 100px;
  font-family: Raleway;
  font-weight: 600;
  // margin-bottom: 0.5rem;

`;

const SubHeader = styled.div`
  font-size: 35px !important;
  font-family: Raleway;
  font-weight: 600;
  color: #2EA8F2;
  

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.div`
  font-size: 1.5em;
  color: #1800AD;
  font-weight: 700;
  line-height: 1.2;
  // max-width: 800px;
  // margin: 0 auto 2rem auto;
  padding: 0 1rem;

  @media (max-width: 600px) {
    font-size: 21px;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #52bbed;
  // padding: 0.75rem;
  gap: 2rem;
  flex-wrap: wrap;
`;

const NavLink = styled.a<NavLinkProps>`
  color: ${(props) => (props.active ? "#142457" : "#FFFFFF")};
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;

  &:hover {
    color: #142457;
  }
`;

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  flex-wrap: wrap;
`;

const DonateButton = styled.button`
  background-color: orange;
  color: white;
  font-size: 2vw;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #e69500;
  }
`;

const ConferenceCard = styled.div`
  background-color: #52bbed;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  font-weight:700;
  font-size:20px;
  padding: 0.5em;
  border-radius: 8px;


`

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0B1A3F;
  margin: 2rem 0 1rem 0;
  text-align: center;
`;

const SubTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #52bbed;
  margin: 1rem 0;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #0B1A3F;
  line-height: 1.6;
  padding: 0 1rem;
  margin-bottom: 1rem;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

const List = styled.ul`
  list-style-type: disc;
  margin: 1rem auto;
  padding: 0 2rem;
  max-width: 800px;
  color: #0B1A3F;
  text-align: left;
`;

const ListItem = styled.li`
  margin-bottom: 0.75rem;
  font-size: 1rem;
`;

const Highlight = styled.span`
  color: #2EA8F2;
  font-weight: 600;
`;

const RegisterButton = styled.button`
  background-color: #52bbed;
  color: #0B1A3F;
  font-size: 1rem;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 1rem;
  font-weight: 600;

  &:hover {
    background-color: #2EA8F2;
  }
`;

const ImageRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
`;

const Image = styled.img`
  width: 20vw;
  height:18vh;
  // max-width: 90%;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border: black solid;
`;

const BlueBox = styled.div`
  background-color: #142457;
  color: white !important;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 1rem;
  text-align: center;
`;

const WhiteContainer = styled.div`
  background-color: #FFFFFF;
  color: #0B1A3F;
  // padding: 2rem;
  text-align: center;
  position: relative;
`;


const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  height: fit-content;
  // margin: 2rem auto;
  margin-left: 2rem;
  // margin-top: 1rem;
  max-width: 90vw;
  // padding: 0 1rem;
`;

const FlexColumnText = styled.div`
  flex: 1 1 60%;
  text-align: left;
`;

const FlexColumnImages = styled.div`
  display: flex;
  gap: 1rem;
  align-items: top;
  
`;

const TitleLeft = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #142457;
  margin-bottom: 1rem;
  text-align: left;
`;

const ParagraphLeft = styled.p`
  font-size: 1rem;
  color: #000000;
  line-height: 1.6;
  margin-bottom: 1rem;
  text-align: left;
`;

const ListLeft = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  color: #000000;
  margin-bottom: 1rem;
  text-align: left;
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
  align-items: flex-start;
`;

const LeftColumn = styled.div`
  flex: 1;
  min-width: 280px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
`;


const CenteredText = styled.p`
  text-align: center;
  color: #2200a5;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 1rem auto;
  max-width: 80%;
`;

const ImageGridRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
`;

const ImageWithCaption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;

  img {
    width: 100%;
    height: auto;
    border: 1px solid #ccc;
  }

  span {
    font-size: 0.9rem;
    font-weight: bold;
    color: #1784d4;
    margin-top: 0.5rem;
    text-align: center;
  }
`;

const PurpleParagraph = styled.p`
  color: #5e1584;
  text-align: center;
  max-width: 90%;
  margin: 1rem auto;
  font-weight: 600;
  font-size: 1rem;
`;

const BlueHighlightBar = styled.div`
  background-color: #339cf7;
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
  margin: 2rem auto 1rem auto;
  max-width: 800px;
  border-radius: 6px;
`;

export {
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
    SubTitle,
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
    ContentRow,
    LeftColumn,
    RightColumn,
    Footer,
    CenteredText,
    ImageGridRow,
    ImageWithCaption,
    PurpleParagraph,
    BlueHighlightBar,
    ConferenceCard


};