import Header from "./components/feres/header";
import Hero from "./components/feres/hero";
import Section2 from "./components/thameur/section2";
import Section3 from "./components/thameur/section3";
import Section4 from "./components/feres/section4";
import Footer from "./components/rayen/footer";
import image1 from './components/img/digital.jpg';
import image2 from './components/img/grow.jpg';
import image3 from './components/img/card.jpg';


function App() {
  return (
    <div className="App">
 <Header />
 <Hero />
 <Section2 />
 <Section3 
        title="100% digital bank" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam debitis ducimus.." 
        imageUrl={image1} 

      />
      <Section3 
        title="Watch your money grow" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam debitis ducimus." 
        imageUrl={image2} 

      />
      <Section3 
        title="Free debit card included " 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam debitis ducimus." 
        imageUrl={image3} 

      />
  <Section4 />
  <Footer />
    </div>
  );
}

export default App;
