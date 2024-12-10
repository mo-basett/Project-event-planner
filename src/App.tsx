import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ContactButtons } from "./components/ContactButtons";

function App() {
  return (
    <div className="font-[system-ui] text-right" dir="rtl">
      <Header />
      <Hero />
      <About />
      <Features />
      <Services />
      <Contact />
      {/* <Footer /> */}
      <ContactButtons />
    </div>
  );
}

export default App;
