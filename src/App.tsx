import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import {createGlobalStyle} from "styled-components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page } from "./components/HomePage.styles";
import { HeaderSection } from "./components/sections/HeaderSection/HeaderSection";
import { FooterSection } from "./components/sections/FooterSection/FooterSection";
import HomePage from "./components/HomePage";
import LearnMoreSection from "./components/sections/LearnMoreSection/LearnMoreSection";
import { useRef } from "react";
import { DonationSection } from "./components/sections/DonationSection/DonationSection";


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Raleway';
  }
`;





const App = () => {
  const donateSectionRef = useRef<HTMLDivElement>(null);
  const footerSectionRef = useRef<HTMLDivElement>(null);
  
  const scrollToDonateSection = () => {
    donateSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFooterSection = () => {
    footerSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <GlobalStyle />

    <ToastContainer />
    
    <Router>
      <Page>
        <HeaderSection
          scrollToDonateSection={scrollToDonateSection}
          scrollToFooterSection={scrollToFooterSection}
        />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                donateSectionRef={donateSectionRef}
                footerSectionRef={footerSectionRef}
                scrollToDonateSection={scrollToDonateSection}
              />
            }
          />
          <Route path="/learn-more" element={<LearnMoreSection />} />
          <Route path="/donate" element={<DonationSection />} />
        </Routes>
        <FooterSection footerSectionRef={footerSectionRef} />
      </Page>
    </Router>
    </>
  );
};

export default App;
