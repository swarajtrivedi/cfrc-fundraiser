import React, { useRef, useState } from "react";
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

/* ===== Donation Form Section ===== */
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

/* Inputs & validation styles */
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

/* $ inside the custom amount field */
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

const CurrencyInput = styled(Input)`
  padding-left: 28px;
`;

/* ===== Updated ImpactBox: fills space better ===== */
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

/* ===== New: pretty “See the Difference” list ===== */
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
  margin-bottom: 24px;
  &:first-child {
    margin-top: 20px;
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
  font-weight: 800;
  color: #0d2c6b;
  font-size: 1.35rem;
  line-height: 1.2;
`;

const DiffText = styled.div`
  color: #374151;
  margin-top: 2px;
  font-weight: 600;
`;

/* ===== Footer ===== */
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
  const presetAmounts = [25, 50, 100, 250, 500];
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>("");

  // Form state
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [hear, setHear] = useState("");
  const [payment, setPayment] = useState("");

  // Error state
  const [errors, setErrors] = useState<Record<string, string>>({});

  const displayAmount = customAmount ? Number(customAmount) || 0 : amount;

  const validate = () => {
    const e: Record<string, string> = {};
    const amt = displayAmount;

    if (!amt || amt <= 0) {
      e.amount = "Please choose or enter a valid amount.";
    } else if (customAmount && amt < 25) {
      e.amount = "Minimum donation is $25.";
    }

    if (!first.trim()) e.first = "First name is required.";
    if (!last.trim()) e.last = "Last name is required.";

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!email.trim()) e.email = "Email is required.";
    else if (!emailOk) e.email = "Please enter a valid email address.";

    const phoneOk = /^\+\d{1,3}[-\s]?\d{6,14}([-\s]?\d{2,6})*$/.test(phone);
    if (!phone.trim()) e.phone = "Phone number is required.";
    else if (!phoneOk)
      e.phone = "Include country code, e.g. +1 555-123-4567.";

    if (!country) e.country = "Country is required.";
    if (!hear) e.hear = "This field is required.";
    if (!payment) e.payment = "Please select a payment method.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleDonate = () => {
    if (!validate()) return;
    console.log("Donation form valid:", {
      amount: displayAmount,
      first,
      last,
      email,
      phone,
      country,
      hear,
      payment,
    });
    alert("Thanks! Your form looks good. (Payment hookup coming next.)");
  };

  const donateSectionRef = useRef<HTMLDivElement>(null);

  const scrollToDonateSection = () => {
    donateSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Page>
      <Header>
        <Logo src={logo} alt="CFRC Logo" />
        <HeaderTextContainer>
          <Title>Your help can change lives</Title>
          <SubTitle>CFRC - Cure For A Rare Cancer</SubTitle>
        </HeaderTextContainer>
        <DonateButton onClick={scrollToDonateSection}>
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
              window.open(
                "https://medivents.eventsair.com/htlv-conference-2026/htlv26/Site/Register",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Register
          </CTAButton>
          <CTAButton onClick={scrollToDonateSection}>
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

      <DonateSection ref={donateSectionRef} aria-labelledby="donate-title">
        <DonateHeader id="donate-title">Make a Difference Today</DonateHeader>
        <DonateSub>
          Your generosity creates lasting change. Every donation, no matter the size, helps us build a better tomorrow.
        </DonateSub>

        <FormGrid>
          <Card>
            <CardTitle>Choose Your Impact</CardTitle>
            <AmountGrid>
              {presetAmounts.map((v) => (
                <AmountButton
                  key={v}
                  active={!customAmount && amount === v}
                  onClick={() => {
                    setAmount(v);
                    setCustomAmount("");
                    setErrors((prev) => {
                      const { amount, ...rest } = prev;
                      return rest;
                    });
                  }}
                  aria-pressed={!customAmount && amount === v}
                >
                  ${v}
                </AmountButton>
              ))}
              <AmountButton
                active={!!customAmount}
                onClick={() => {
                  if (!customAmount) setCustomAmount(String(amount));
                }}
              >
                Custom
              </AmountButton>
            </AmountGrid>

            <CurrencyInputWrapper>
              <CurrencySymbol>$</CurrencySymbol>
              <CurrencyInput
                type="number"
                min="25"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                aria-label="Custom donation amount"
                hasError={!!errors.amount}
              />
            </CurrencyInputWrapper>
            <Helper>Minimum donation is $25 USD</Helper>
            {errors.amount && <ErrorText>{errors.amount}</ErrorText>}
          </Card>

          <Card>
            <CardTitle>Your Impact</CardTitle>
            <ImpactBox>
              <div style={{ fontSize: "1.8rem" }}>${displayAmount || 0}</div>
              <div style={{ marginTop: 6 }}>
                {displayAmount >= 25 && displayAmount < 50
                  ? "Provides school supplies for one student for a month"
                  : displayAmount >= 50 && displayAmount < 100
                  ? "Feeds a family of four for one week"
                  : displayAmount >= 100 && displayAmount < 250
                  ? "Provides emergency shelter for a family for one night"
                  : displayAmount >= 250
                  ? "Covers medical care for one person for a month"
                  : ""}
              </div>
            </ImpactBox>
          </Card>

          <Card>
            <CardTitle>Your Information</CardTitle>
            <TwoCol>
              <Input
                placeholder="First Name"
                aria-label="First Name"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                hasError={!!errors.first}
                required
              />
              <Input
                placeholder="Last Name"
                aria-label="Last Name"
                value={last}
                onChange={(e) => setLast(e.target.value)}
                hasError={!!errors.last}
                required
              />
            </TwoCol>
            {errors.first && <ErrorText>{errors.first}</ErrorText>}
            {errors.last && <ErrorText>{errors.last}</ErrorText>}

            <Input
              placeholder="Email Address"
              type="email"
              aria-label="Email Address"
              style={{ marginTop: 12 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              hasError={!!errors.email}
              required
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}

            <div style={{ marginTop: 12 }}>
              <Input
                placeholder="Phone Number"
                type="tel"
                aria-label="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                hasError={!!errors.phone}
                required
              />
              <Helper>
                Include country code, e.g. <em>+1 1234567890</em>.
              </Helper>
              {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
            </div>

            <TwoCol style={{ marginTop: 12 }}>
              <div>
                <Select
                  aria-label="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  hasError={!!errors.country}
                  required
                >
                  <option value="" disabled>
                    Country
                  </option>
                  <option>United States</option>
                  <option>Brazil</option>
                  <option>Japan</option>
                  <option>Australia</option>
                  <option>United Kingdom</option>
                  <option>Other</option>
                </Select>
                {errors.country && <ErrorText>{errors.country}</ErrorText>}
              </div>

              <div>
                <Select
                  aria-label="How did you hear about us?"
                  value={hear}
                  onChange={(e) => setHear(e.target.value)}
                  hasError={!!errors.hear}
                  required
                >
                  <option value="" disabled>
                    How did you hear about us?
                  </option>
                  <option>Search</option>
                  <option>Social Media</option>
                  <option>Friend/Colleague</option>
                  <option>Conference</option>
                  <option>Other</option>
                </Select>
                {errors.hear && <ErrorText>{errors.hear}</ErrorText>}
              </div>
            </TwoCol>

            <div style={{ marginTop: 12 }}>
              <Select
                aria-label="Payment Method"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                hasError={!!errors.payment}
                required
              >
                <option value="" disabled>
                  Select Payment Method
                </option>
                <option>Credit Card</option>
                <option>Venmo</option>
              </Select>
              {errors.payment && <ErrorText>{errors.payment}</ErrorText>}
            </div>

            <DonateNow aria-label="Donate Now" onClick={handleDonate}>
              Donate Now
            </DonateNow>
          </Card>

          {/* Row 2, Col 2 — See the Difference (pretty) */}
          <Card>
            <CardTitle>See the Difference</CardTitle>
            <DiffList>
              <DiffItem>
                <DiffIcon bg="#eaf2ff">
                  {/* book icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M4 19a3 3 0 0 1 3-3h13" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M7 4h10a3 3 0 0 1 3 3v12" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M7 4a3 3 0 0 0-3 3v12" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </DiffIcon>
                <div>
                  <DiffAmount>$25</DiffAmount>
                  <DiffText>Provides school supplies for one student for a month</DiffText>
                </div>
              </DiffItem>

              <DiffItem>
                <DiffIcon bg="#eafaf1">
                  {/* users icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="9" cy="7" r="3" stroke="#10b981" strokeWidth="2"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 3.13a3 3 0 0 1 0 5.75" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </DiffIcon>
                <div>
                  <DiffAmount>$50</DiffAmount>
                  <DiffText>Feeds a family of four for one week</DiffText>
                </div>
              </DiffItem>

              <DiffItem>
                <DiffIcon bg="#f5efff">
                  {/* home icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M3 10.5 12 3l9 7.5" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 10v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </DiffIcon>
                <div>
                  <DiffAmount>$100</DiffAmount>
                  <DiffText>Provides emergency shelter for a family for one night</DiffText>
                </div>
              </DiffItem>

              <DiffItem>
                <DiffIcon bg="#ffeef0">
                  {/* heart icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </DiffIcon>
                <div>
                  <DiffAmount>$250</DiffAmount>
                  <DiffText>Covers medical care for one person for a month</DiffText>
                </div>
              </DiffItem>
            </DiffList>
          </Card>
        </FormGrid>
      </DonateSection>

      <FinalFooter>
        <FooterHeading>About HTLV & ATLL</FooterHeading>
        <FooterText>
          Human T-cell Leukemia Virus (HTLV) is a retrovirus that can cause
          serious conditions including adult T-cell leukemia/lymphoma (ATLL) and
          HTLV-1-associated myelopathy/tropical spastic paraparesis (HAM/TSP), a
          debilitating neurological disease. ATLL is one of the most aggressive
          forms of non hodgkin lymphoma that can be found in the blood as
          leukemia, lymph nodes as lymphoma, bone, skin, and other areas of the
          body. It can be presented as Acute Lymphomatous, Chronic and
          Smoldering with a median survival of 6 months to 2 years. Treatment
          remains elusive and there is no vaccine or cure for this disease.
        </FooterText>
      </FinalFooter>
    </Page>
  );
};

export default App;