import styled from "styled-components";

const DonateSection = styled.section`
  padding: 20px 5vw 30px;
  background: #f7fbff;
`;

const DonateHeader = styled.h2`
  margin: 0 0 8px;
  font-size: 2rem;
  color: #0d2c6b;
`;

const DonateSub = styled.p`
  margin: 0 0 24px;
  color: #6b7280;
  font-weight: 600;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  gap: 16px;
  align-items: stretch;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 14px;
  box-shadow: 0 6px 20px rgba(13, 44, 107, 0.08);
  padding: 16px;
  text-align: left;
`;

const CardTitle = styled.h3`
  margin: 0 0 12px;
  color: #0d2c6b;
`;

const AmountGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 12px;

  @media (min-width: 520px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const AmountButton = styled.button<{ active?: boolean }>`
  border: 2px solid ${({ active }) => (active ? "#52c1f0" : "#e5e7eb")};
  background: ${({ active }) => (active ? "#eef7ff" : "white")};
  color: #0d2c6b;
  border-radius: 12px;
  padding: 10px 0;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-color: #52c1f0;
  }
`;

const CurrencyInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const CurrencySymbol = styled.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
  color: #4b5563;
  pointer-events: none;
`;

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  box-sizing: border-box;
  border: 1.5px solid ${({ hasError }) => (hasError ? "#dc2626" : "#e5e7eb")};
  border-radius: 12px;
  padding: 12px 14px;
  font-size: 1rem;
  outline: none;
  transition: 0.2s;

  &:focus {
    border-color: ${({ hasError }) => (hasError ? "#dc2626" : "#52c1f0")};
    box-shadow: 0 0 0 3px
      ${({ hasError }) =>
        hasError ? "rgba(220,38,38,0.2)" : "rgba(82,193,240,0.25)"};
  }
`;

const CurrencyInput = styled(Input)`
  padding-left: 28px;
`;

const ImpactBox = styled.div`
  border-radius: 12px;
  border: 2px solid #e5e7eb;
  background: #f3f8ff;
  padding: 28px 18px;
  text-align: center;
  font-weight: 800;
  color: #0d2c6b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 160px;
  box-sizing: border-box;
`;

const ErrorText = styled.p`
  margin: 6px 0 0;
  font-size: 0.9rem;
  color: #dc2626;
  font-weight: 700;
`;

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 520px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const DonateNow = styled.button`
  margin-top: 16px;
  width: 100%;
  background-color: #f8981d;
  color: white;
  font-weight: 800;
  padding: 14px 18px;
  font-size: 1.05rem;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background-color: #ffa733;
  }
`;

const DiffList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 18px;
`;

const DiffItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  &:first-child {
    margin-top: 10px;
  }
  &:last-child {
    margin-bottom: 0;
  }
  gap: 14px;
`;

const DiffIcon = styled.div<{ bg: string }>`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${({ bg }) => bg};
  display: grid;
  place-items: center;
`;

const DiffAmount = styled.div`
  font-weight: 600;
  color: #0d2c6b;
  font-size: 1.1rem;
  line-height: 0.5;
`;

const DiffText = styled.div`
  color: #374151;
  margin-top: 2px;
  font-weight: 600;
`;


const Select = styled.select<{ hasError?: boolean }>`
  width: 100%;
  box-sizing: border-box;
  border: 1.5px solid ${({ hasError }) => (hasError ? "#dc2626" : "#e5e7eb")};
  border-radius: 12px;
  padding: 12px 14px;
  font-size: 1rem;
  outline: none;
  transition: 0.2s;
  background: white;

  &:focus {
    border-color: ${({ hasError }) => (hasError ? "#dc2626" : "#52c1f0")};
    box-shadow: 0 0 0 3px
      ${({ hasError }) =>
        hasError ? "rgba(220,38,38,0.2)" : "rgba(82,193,240,0.25)"};
  }
`;

const Helper = styled.p`
  margin: 6px 0 0;
  font-size: 0.9rem;
  color: #6b7280;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QRImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  margin-top: 15px;
  padding: 8px 16px;
  background-color: #0d2c6b;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export {
    DonateSection,
    DonateHeader,
    DonateSub,
    FormGrid,
    Card,
    CardTitle,
    AmountGrid,
    AmountButton,
    CurrencyInputWrapper,
    CurrencySymbol,
    CurrencyInput,
    ImpactBox,
    Input,
    TwoCol,
    ErrorText,
    DonateNow,
    DiffList,
    DiffItem,
    DiffIcon,
    DiffAmount,
    DiffText,
    Select,
    Helper,
    ModalOverlay,
    ModalContent,
    QRImage,
    CloseButton,

}