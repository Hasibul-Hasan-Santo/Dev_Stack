import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";


const Api = async () => {
  const d = await fetch('https://raw.githubusercontent.com/Hasibul-Hasan-Santo/json-api/main/technologies.json');
  const data = await d.json();
  return data;
  
}



function App() {
  

  return (
    <>
   <Navbar></Navbar>
   <HeroSection></HeroSection>
    
    </>
  )
}

export default App
