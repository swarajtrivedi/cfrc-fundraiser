import { useState } from "react";

import {
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

} from "./DonationSection.styles"

import { HomeIcon } from "../../../icons/HomeIcon";
import { HeartIcon } from "../../../icons/HeartIcon";
import { UsersIcon } from "../../../icons/UsersIcon";
import { BookIcon } from "../../../icons/BookIcon";
import qr from "../../../images/image11.png"
import { TravelIcon } from "../../../icons/TravelIcon";
import { DollarIcon } from "../../../icons/DollarIcon";


interface IDonationSection {
    donateSectionRef: React.RefObject<HTMLDivElement | null>
}

export const DonationSection = (props: IDonationSection) =>{
    const {
        donateSectionRef
    } =  props;

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
  const [showVenmoQR, setShowVenmoQR] = useState(false);

  // Error state
  const [errors, setErrors] = useState<Record<string, string>>({});

  const displayAmount = customAmount ? Number(customAmount) || 0 : amount;

  const validate = () => {
    const e: Record<string, string> = {};
    const amt = displayAmount;

    if (!amt || amt <= 0) {
      e.amount = "Please choose or enter a valid amount.";
    } 
    // else if (customAmount && amt < 25) {
    //   e.amount = "Minimum donation is $25.";
    // }

    if (!first.trim()) e.first = "First name is required.";
    if (!last.trim()) e.last = "Last name is required.";

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!email.trim()) e.email = "Email is required.";
    else if (!emailOk) e.email = "Please enter a valid email address.";

    // const phoneOk = /^\+\d{1,3}[-\s]?\d{6,14}([-\s]?\d{2,6})*$/.test(phone);
    // if (!phone.trim()) e.phone = "Phone number is required.";
    // else if (!phoneOk)
    //   e.phone = "Include country code, e.g. +1 1234567890.";

    if (!country) e.country = "Country is required.";
    if (!hear) e.hear = "This field is required.";
    if (!payment) e.payment = "Please select a payment method.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };


  const handleDonate = async () => {
    // run your existing validation first
    if(payment == "Venmo"){
      setShowVenmoQR(true);
      return;
    }

    if (!validate()) return;
  
    const amt = displayAmount;
    if (!amt) {
      setErrors((prev) => ({ ...prev, amount: "Please enter an amount." }));
      return;
    }
  
    try {
      const amountInCents = Math.round(Number(amt) * 100);
      const BACKEND_URL = "https://cfrc-fundraiser-backend.onrender.com";
      // For local testing:
      // const BACKEND_URL = "http://localhost:8080";
      const res = await fetch(`${BACKEND_URL}/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amountInCents,
          currency: "usd",
          metadata: {
            first,
            last,
            email,
            phone,
            country,
            hear,
            source: "cfrc-fundraiser"
          }
        }),
      });
  
      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Failed to create checkout session");
      }
  
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Checkout URL not returned from server.");
      }
    } catch (err) {
      console.error(err);
      alert("Sorry, we couldn't start the checkout. Please try again.");
    }
  };

    return (
        <>

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
                        &gt;500/Custom
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
                    <Helper>Minimum recommended donation is $25 USD</Helper>
                    {errors.amount && <ErrorText>{errors.amount}</ErrorText>}
                  </Card>
                    
                  <Card>
                    <CardTitle>Your Impact</CardTitle>
                    <ImpactBox>
                      <div style={{ fontSize: "1.8rem" }}>${displayAmount || 0}</div>
                      <div style={{ marginTop: 6 }}>
                        {displayAmount >= 25 && displayAmount < 50
                          ? "Supports distribution of scientific findings in consumable formats for patients and caregivers in LMICs."
                          : displayAmount >= 50 && displayAmount < 100
                          ? "Sponsors educational materials to raise awareness about HTLV-associated diseases, especially underserved regions."
                          : displayAmount >= 100 && displayAmount < 250
                          ? "Covers portion of monthly spend on outreach to engage healthcare professionals, researchers, patients, communities and new donors."
                          : displayAmount >= 250 && displayAmount < 500
                          ? "Sponsors partial travel or virtual access for one LMIC-based researcher to participate in HTLV2026 and share their work globally."
                          : displayAmount == 500 
                          ? "Funds registration of an attendee for the International Conference HTLV2026."
                          :  displayAmount > 500 
                          ? "Help advance critical research and innovation to combat lesser-known retroviruses that affect millions worldwide and can lead to devastating diseases."
                          : ""
                          }
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
                          <option>Australia</option>
                          <option>Brazil</option>
                          <option>Japan</option>
                          <option>Jamaica</option>
                          <option>Peru</option>
                          <option>South Africa</option>
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
                        <DiffIcon bg="#ffeef0">
                          <DollarIcon />
                        </DiffIcon>
                        <div>
                          <DiffAmount>&gt;$500</DiffAmount>
                          <DiffText>Funds registration of an attendee for the International Conference HTLV2026.</DiffText>
                        </div>
                      </DiffItem>

                      <DiffItem>
                        <DiffIcon bg="#ffeef0">
                          <HeartIcon />
                        </DiffIcon>
                        <div>
                          <DiffAmount>$500</DiffAmount>
                          <DiffText>Funds registration of an attendee for the International Conference HTLV2026.</DiffText>
                        </div>
                      </DiffItem>

                      <DiffItem>
                        <DiffIcon bg="#ffeef0">
                          <TravelIcon />
                        </DiffIcon>
                        <div>
                          <DiffAmount>$250</DiffAmount>
                          <DiffText>Sponsors partial travel or virtual access for one LMIC-based researcher to participate in HTLV2026 and share their work globally.</DiffText>
                        </div>
                      </DiffItem>
                        
                      <DiffItem>
                        <DiffIcon bg="#f5efff">
                          <HomeIcon />
                        </DiffIcon>
                        <div>
                          <DiffAmount>$100</DiffAmount>
                          <DiffText>Covers portion of monthly spend on outreach to engage healthcare professionals, researchers, patients, communities and new donors.</DiffText>
                        </div>
                      </DiffItem>
                        
                      <DiffItem>
                        <DiffIcon bg="#eafaf1">
                          <UsersIcon />
                        </DiffIcon>
                        <div>
                          <DiffAmount>$50</DiffAmount>
                          <DiffText>Sponsors educational materials to raise awareness about HTLV-associated diseases, especially underserved regions.</DiffText>
                        </div>
                      </DiffItem>

                      <DiffItem>
                        <DiffIcon bg="#eaf2ff">
                          <BookIcon />
                        </DiffIcon>
                        <div>
                          <DiffAmount>$25</DiffAmount>
                          <DiffText>Supports distribution of scientific findings in consumable formats for patients and caregivers in LMICs.</DiffText>
                        </div>
                      </DiffItem>

                      
                    </DiffList>
                  </Card>
                </FormGrid>

                {showVenmoQR && (
                  <ModalOverlay>
                    <ModalContent>
                      <h2>Scan to Pay with Venmo</h2>
                      <QRImage src={qr} alt="Venmo QR Code" />
                      <CloseButton onClick={() => setShowVenmoQR(false)}>Close</CloseButton>
                    </ModalContent>
                  </ModalOverlay>
                )}
            </DonateSection>
        </>
    )
}