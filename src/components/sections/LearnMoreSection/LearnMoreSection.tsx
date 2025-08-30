import React from "react";
import {
  WhiteContainer,
  Subtitle,
  Paragraph,
  FlexRow,
  FlexColumn,
  ResourceImage,
  ExternalLink,
} from "./LearnMoreSection.styles";

import irvaImage from "../../../images/image18.png";
import virusImage from "../../../images/image17.png";
import gvnLogo from "../../../images/image16.png";
import pahoLogo from "../../../images/image15.png";
import cellImage from "../../../images/image14.png";
import newsImage from "../../../images/image12.png";

const LearnMore: React.FC = () => {
  return (
    <WhiteContainer>
      <Subtitle>Learn More About HTLV with these trusted resources:</Subtitle>

      <FlexRow>
        <FlexColumn>
          <ResourceImage src={irvaImage} alt="IRVA" />
        </FlexColumn>
        <FlexColumn>
          <Paragraph>
            The International Retrovirology Association (IRVA){" "}
            <ExternalLink
              href="https://www.htlv.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              fosters critical research and global collaborations
            </ExternalLink>{" "}
            on HTLV infections and associated diseases through scientific
            platforms that drive knowledge dissemination and discovery.
          </Paragraph>
        </FlexColumn>
      </FlexRow>

      <FlexRow>
        <FlexColumn>
          <Paragraph>
            The upcoming HTLV2026 Conference in Philadelphia{" "}
            <ExternalLink
              href="https://htlv2026.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              brings together international experts
            </ExternalLink>{" "}
            from June 3-6, 2026, to address critical advances in HTLV research,
            focusing on its cancer-causing potential and neuroinflammatory
            complications.
          </Paragraph>
        </FlexColumn>
        <FlexColumn>
          <ResourceImage src={virusImage} alt="HTLV Virus" />
        </FlexColumn>
      </FlexRow>

      <FlexRow>
        <FlexColumn>
          <ResourceImage src={gvnLogo} alt="Global Virus Network" />
        </FlexColumn>
        <FlexColumn>
          <Paragraph>
            The landmark WHO Open Letter on HTLV-1{" "}
            <ExternalLink
              href="https://gvn.org/who/"
              target="_blank"
              rel="noopener noreferrer"
            >
              called for urgent global action
            </ExternalLink>{" "}
            against one of the most potent human carcinogens, signed by over 50
            experts proposing five strategic interventions to reduce HTLV-1
            transmission worldwide.
          </Paragraph>
        </FlexColumn>
      </FlexRow>

      <FlexRow>
        
        <FlexColumn>
          <Paragraph>
          The Pan American Health Organization{" "}
          <ExternalLink
              href="https://www.paho.org/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              coordinates regional health initiatives
            </ExternalLink>{" "}
            across the Americas, including surveillance and prevention
            strategies for HTLV and other infectious diseases affecting the
            region.
          </Paragraph>
        </FlexColumn>
        <FlexColumn>
        <ResourceImage src={pahoLogo} alt="PAHO" width="180px" />
        </FlexColumn>
      </FlexRow>

      <FlexRow>
        <FlexColumn>
          <ResourceImage src={cellImage} alt="HTLV attack" />
        </FlexColumn>
        <FlexColumn>
          <Paragraph>
            Dr. Jain's Research Laboratory at Drexel University{" "}
            <ExternalLink
              href="https://drexel.edu/medicine/about/departments/microbiology-immunology/research/the-jain-lab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              leads groundbreaking investigations
            </ExternalLink>{" "}
            into HTLV pathogenesis, developing innovative approaches to combat
            HTLV-associated diseases through collaborative science.
          </Paragraph>
        </FlexColumn>
      </FlexRow>

      <FlexRow>
        <FlexColumn>
          <Paragraph>
            The Philadelphia Inquirer’s in-depth article on HTLV{" "}
            <ExternalLink
              href="https://www.inquirer.com/health/human-t-lymphotropic-virus-blood-cancer-diagnosis-symptoms-awareness-20250806.html?id=6WyFpNuW1gcf8&utm_source=social&utm_campaign=gift_link&utm_medium=referral"
              target="_blank"
              rel="noopener noreferrer"
            >
              provides crucial public awareness
            </ExternalLink>{" "}
            about this under-recognized virus, highlighting its impact on global
            health and the need for increased prevention efforts.
          </Paragraph>
        </FlexColumn>
        <FlexColumn>
          <ResourceImage src={newsImage} alt="HTLV News" />
        </FlexColumn>
      </FlexRow>
    </WhiteContainer>
  );
};

export default LearnMore;