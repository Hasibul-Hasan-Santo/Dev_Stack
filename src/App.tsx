import { useState, useEffect } from "react";
import HeroSection from "./components/Hero";
import Mainlayout from "./components/Mainlayout";
import Navbar from "./components/Navbar";
import ExploreHeader from "./components/Explore";
import "./index.css";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/Hasibul-Hasan-Santo/json-api/main/technologies.json"
        );

        if (!res.ok) {
          throw new Error("Data not found 404");
        }

        const result = await res.json();
        setLoading(result);
      } catch (error) {
        console.error("Error fetching data:", error);
     
        setLoading(false);
      } finally {
  
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <HeroSection />
      <ExploreHeader />

       <div>
        {loading === true ? (
          <div className="flex flex-col items-center justify-center py-20">
            <span className="loading loading-spinner loading-lg text-pink-600"></span>
            <p className="mt-3 text-gray-500 font-medium text-sm">
              Loading technologies...
            </p>
          </div>
        ) : loading === false ? (
          <div className="text-center py-10 text-red-500 font-semibold">
           404 Failed to load data!
          </div>
        ) : (
          <Mainlayout Data={loading} />
        )}
      </div>
      
    </div>
  );
}

export default App;