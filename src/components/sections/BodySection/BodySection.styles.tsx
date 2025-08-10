import styled from "styled-components";




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

export {
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
}
