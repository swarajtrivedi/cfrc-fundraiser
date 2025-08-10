import { useRef } from "react";
import { Page } from "./HomePage.styles";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { DonationSection } from "./sections/DonationSection/DonationSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { BodySection } from "./sections/BodySection/BodySection";

const App = () => {

  const donateSectionRef = useRef<HTMLDivElement>(null);
  const scrollToDonateSection = () => {
    donateSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Page>

      <HeaderSection scrollToDonateSection={scrollToDonateSection}/>

      <BodySection scrollToDonateSection={scrollToDonateSection} />
      
      <DonationSection donateSectionRef={donateSectionRef}/>

      <FooterSection />
      
    </Page>
  );
};

export default App;