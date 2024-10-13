import Navbar from "./Components/Navbar/Navbar";
import HeroSection1 from "./Components/HeroSection1/HeroSection1";
import HeroSection2 from "./Components/HeroSection2/HeroSection2";
import About from "./Components/About/About";
import Title1 from "./Components/Title1/Title1";
import Title2 from "./Components/Title2/Title2";
import Portfolio1 from "./Components/Portfolio1/Portfolio1";
import Porfolio2 from "./Components/Portfolio2/Portfolio2";
import Services from "./Components/Services/Services";
import ContactForm from "./Components/ContactForm/ContactForm";
import NearFooter from './Components/NearFooter/NearFooter'
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection1 />
      <HeroSection2 />
      <About />
      <Title1
        head2="Portfolio"
        head1="My Amazing Works"
        para="Most common methods for designing websites that work well on desktop is responsive and adaptive design"
      />
      <Portfolio1 />
      <Porfolio2 />
      <Title2
        head2="Services"
        head1="What I Do for Clients"
        para="Most common methods for designing websites that work well on desktop is responsive and adaptive design"
      />
      <Services />
      <Title2
        head2="Contact Me"
        head1="I Want To Hear From You"
        para="Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday"
      />
      <ContactForm/>
      <NearFooter/>
      <hr />
      <Footer />
    </>
  );
};

export default App;
