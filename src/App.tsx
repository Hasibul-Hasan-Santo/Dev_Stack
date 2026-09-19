import { Suspense } from "react";
import HeroSection from "./components/Hero";
import Mainlayout from "./components/Mainlayout";
import Navbar from "./components/Navbar";
import ExploreHeader from "./components/Explore";


const Api = async () => {
  const d = await fetch('https://raw.githubusercontent.com/Hasibul-Hasan-Santo/json-api/main/technologies.json');
  const data = await d.json();
  return data;
  
}



function App() {
  

  return (
    
    <div className="bg-white ">
   <Navbar></Navbar>
   <HeroSection></HeroSection>
   <ExploreHeader></ExploreHeader>
   <Suspense fallback={<span>loading</span>}>
   <Mainlayout Data = {Api()}></Mainlayout>
    </Suspense>
    </div>
  )
}

export default App
