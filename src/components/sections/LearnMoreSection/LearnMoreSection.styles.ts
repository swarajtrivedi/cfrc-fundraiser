import styled from "styled-components";

export const WhiteContainer = styled.div`
  background-color: white;
  max-width: 1200px;
  margin: auto;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #55a4e9;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  color: rgb(13, 44, 107);
  font-weight: bold;
`;

export const ExternalLink = styled.a`
  color: #3681d3;
  text-decoration: underline;
  &:hover {
    color: #265b8d;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
`;

export const FlexColumn = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 1rem;
`;

export const ResourceImage = styled.img<{ width?: string }>`
  max-width: ${({ width }) => width || "300px"};
  width: 100%;
  height: auto;
  display: block;
  margin: auto;
`;