import styled from "styled-components";


interface NavLinkProps {
    active?: boolean;
  }
  
const Container = styled.div`
  background-color: #0B1A3F;
  color: #FFFFFF;
  padding: 2rem;
  text-align: center;
  position: relative;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    font-size: 1.75rem;
  }
`;

const SubHeader = styled.h2`
  font-size: 1.5rem;
  color: #2EA8F2;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  max-width: 800px;
  margin: 0 auto 2rem auto;
  padding: 0 1rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  background-color: #52bbed;
  padding: 0.75rem;
  gap: 2rem;
  flex-wrap: wrap;
`;

const NavLink = styled.a<NavLinkProps>`
  color: ${(props) => (props.active ? "#142457" : "#FFFFFF")};
  font-weight: 600;
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
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const DonateButton = styled.button`
  background-color: orange;
  color: white;
  font-size: 1.25rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #e69500;
  }
`;



const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 1rem;
`;


export {Container
    ,Header
    ,SubHeader
    ,Description
    ,NavBar
    ,NavLink
    ,HeaderBar
    ,DonateButton
    ,Logo}