import { DonationSection } from "./sections/DonationSection/DonationSection";
import { BodySection } from "./sections/BodySection/BodySection";

interface IHomePage {
  donateSectionRef:  React.RefObject<HTMLDivElement | null>,
  footerSectionRef: React.RefObject<HTMLDivElement | null>,
  scrollToDonateSection: () =>void,
}
const HomePage = (props: IHomePage) => 
  {
    const {
      scrollToDonateSection,
      donateSectionRef
    } = props;
    return (
      <>
        <BodySection scrollToDonateSection={scrollToDonateSection} />
        <DonationSection donateSectionRef={donateSectionRef}/>
      </>
    );

  }


  
;

export default HomePage;