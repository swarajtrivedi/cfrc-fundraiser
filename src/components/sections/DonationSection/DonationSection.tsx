import { RefObject } from "react";
import {
  DonateSection,
  DonateHeader,
  DonateSub,
  DonationTable,
} from "./DonationSection.styles";
import { DonateButton } from "../HeaderSection/HeaderSection.styles";

interface IDonationSection {
  donateSectionRef?: RefObject<HTMLDivElement | null>;
}

export const DonationSection = (props: IDonationSection) => {
  const { donateSectionRef } = props;

  const donationTiers = [
    {
      level: "$25",
      title: "-",
      recognition: "Thank-you email with campaign impact update",
      impact:
        "Supports distribution of scientific findings in consumable formats for patients and caregivers in LMICs.",
    },
    {
      level: "$50",
      title: "-",
      recognition:
        "All of the above\nName listed on campaign page",
      impact:
        "Sponsors educational materials to raise awareness about HTLV-associated diseases, especially underserved regions.",
    },
    {
      level: "$100",
      title: "Awareness Ally",
      recognition:
        "All of the above\nPersonalized certificate of appreciation",
      impact:
        "Covers portion of monthly spend on outreach to engage healthcare professionals, researchers, patients, communities and new donors.",
    },
    {
      level: "$250",
      title: "Community Catalyst",
      recognition:
        "All of the above\nRecognition in CRC newsletter",
      impact:
        "Sponsors portion of registration or virtual access of an attendee from LMIC to HTLV2026.",
    },
    {
      level: "$500",
      title: "Research Advocate",
      recognition:
        "All of the above\nDonor spotlight in Social media",
      impact:
        "Funds registration of a researcher, scientist for the International Conference HTLV2026.",
    },
    {
      level: "$1,000",
      title: "Global Access Enabler",
      recognition:
        "All of the above\nRecognition in HTLV2026 conference materials",
      impact:
        "Sponsors travel for one LMIC-based researcher to participate in HTLV2026 and share their work globally.",
    },
    {
      level: "$3,500",
      title: "Equity Champion",
      recognition:
        "All of the above\nDedicated spotlight in CRC’s donor impact report",
      impact:
        "Sponsors registration, travel, accommodation and all expenses for one LMIC-based researcher to participate in HTLV2026.",
    },
    {
      level: "$5,000 and Above",
      title: "Discovery Trailblazer",
      recognition:
        "All of the above\nFeatured donor profile + VIP acknowledgment at HTLV2026",
      impact:
        "Helps advance critical research and innovation to combat lesser-known retroviruses that affect millions worldwide and can lead to devastating diseases.",
    },
  ];

  return (
    <DonateSection ref={donateSectionRef} aria-labelledby="donate-title">
      <DonateHeader id="donate-title">Make a Difference Today</DonateHeader>
      <DonateSub>
        Your generosity fuels progress. Discover how your donation creates real-world change.
      </DonateSub>

      <DonationTable>
        <thead>
          <tr>
            <th>Donation Level</th>
            <th>Certificate Title</th>
            <th>Donor Recognition</th>
            <th>Impact</th>
          </tr>
        </thead>
        <tbody>
          {donationTiers.map((row, i) => (
            <tr key={i}>
              <td>{row.level}</td>
              <td>{row.title}</td>
              <td>
                {row.recognition.split("\n").map((line, idx) => (
                  <div key={idx}>- {line}</div>
                ))}
              </td>
              <td>{row.impact}</td>
            </tr>
          ))}
        </tbody>
      </DonationTable>

      <DonateButton onClick={() => window.open("https://givebutter.com/CFRC")}>
        Donate Now
      </DonateButton>
    </DonateSection>
  );
};

export default DonationSection;