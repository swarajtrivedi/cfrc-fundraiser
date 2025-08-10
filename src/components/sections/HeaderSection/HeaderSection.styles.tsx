import styled from "styled-components";
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


const DonateButton = styled.button`
  background-color: #ffa733;
  color: white;
  padding: 12px 28px;
  border-radius: 25px;
  font-size: 1.4rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;

export {
    Header,
    Logo,
    HeaderTextContainer,
    Title,
    SubTitle,
    Nav,
    NavItem,
    DonateButton
}