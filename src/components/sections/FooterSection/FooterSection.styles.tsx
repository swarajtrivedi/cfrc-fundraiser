import styled from "styled-components";

const FinalFooter = styled.div`
  background-color: #0d2c6b;
  color: white;
  padding: 20px 5vw;
  font-style: italic;
  text-align: center;
`;

const FooterHeading = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
`;

const FooterText = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
  line-height: 1.6;
`;

const FooterBottom = styled.div`
  font-style: normal;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: underline;
`;

export {
    FinalFooter,
    FooterHeading,
    FooterText,
    FooterBottom,
    FooterLink,

}