import {
    FinalFooter,
    FooterHeading,
    FooterText,
    FooterBottom,
    FooterLink,
} from "./FooterSection.styles"

export const FooterSection = () =>{
    return (
        <>
            <FinalFooter>
      <FooterText style={{ fontStyle: "normal", fontWeight: "bold" }}>
        Contact Us: <FooterLink href="mailto:info@donatecfrc.org">admin@donatecfrc.org</FooterLink>
      </FooterText>

      <FooterHeading>About HTLV & ATLL</FooterHeading>

      <FooterText>
        Human T-cell Leukemia Virus (HTLV) is a retrovirus that can cause serious conditions including adult T-cell leukemia/lymphoma (ATLL) and HTLV-1-associated myelopathy/tropical spastic paraparesis (HAM/TSP), a debilitating neurological disease.
        ATLL is one of the most aggressive forms of non hodgkin lymphoma that can be found in the blood as leukemia, lymph nodes as lymphoma, bone, skin, and other areas of the body. It can be presented as Acute Lymphomatous, Chronic and Smoldering with a median survival of 6 months to 2 years. Treatment remains elusive and there is no vaccine or cure for this disease.
        <strong> Donate CFRC</strong> is a fundraising initiative supported by CFRC (Center for Research & Collaboration), a nonprofit organization currently pursuing 501(c)(3) status.
      </FooterText>

      <FooterBottom>
        <p>©2025 Copyright. MyImaginity. All Rights Reserved.</p>
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