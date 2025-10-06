import {
    FinalFooter,
    FooterHeading,
    FooterText,
    FooterBottom,
    FooterLink,
} from "./FooterSection.styles";

interface IFooterSection{
  footerSectionRef: React.RefObject<HTMLDivElement | null>
}
export const FooterSection = (props: IFooterSection) =>{
    const {
      footerSectionRef
    } = props;

    return (
        <>
            <FinalFooter ref={footerSectionRef}>
              <FooterText style={{ fontStyle: "normal", fontWeight: "bold" }}>
                Contact Us: <FooterLink href="mailto:info@donatecfrc.org">info@donatecfrc.org</FooterLink>
              </FooterText>

              <FooterHeading>Privacy and Data Protection Statement</FooterHeading>
              
              <FooterText>
              At CFRC, we are committed to protecting the personal information of our donors, partners, and visitors. 
              We collect only the data necessary to process donations, communicate impact, and improve our services. 
              We do not sell, trade, or share your personal information with any third parties.
              </FooterText>
              <FooterHeading>About HTLV & ATLL</FooterHeading>

              <FooterText>
                Human T-cell Leukemia Virus (HTLV) is a retrovirus that can cause serious conditions including adult T-cell leukemia/lymphoma (ATLL) and HTLV-1-associated myelopathy/tropical spastic paraparesis (HAM/TSP), a debilitating neurological disease.
                ATLL is one of the most aggressive forms of non hodgkin lymphoma that can be found in the blood as leukemia, lymph nodes as lymphoma, bone, skin, and other areas of the body. It can be presented as Acute Lymphomatous, Chronic and Smoldering with a median survival of 6 months to 2 years. Treatment remains elusive and there is no vaccine or cure for this disease.
                <strong> Donate CFRC</strong> is a fundraising initiative supported by <a href="https://www.researchncollab.org/">Center for Research & Collaboration</a>, a 501(c)(3) tax-exempt nonprofit organization.
              </FooterText>

              <FooterBottom>
                <p>©2025 Copyright. DonateCFRC. All Rights Reserved.</p>
                <p>
                  Website By:{" "}
                  <FooterLink href="https://myimaginity.com" target="_blank" rel="noopener noreferrer">
                    MyImaginity  
                  </FooterLink>
                  {" "}PA, USA
                </p>
              </FooterBottom>
            </FinalFooter>
        </>
    )
}