import { use } from "react";
import type { Datatype } from "./Datatype";
import TechCard from "./TechCard";

interface LayoutDataType{
    Data : Promise<Datatype[]>

}


function MainLayout({Data}:LayoutDataType) {
    const apiData= use(Data);
    console.log(apiData);
    
    return (
        <div>
            {apiData.map((Api) => (
          <TechCard key={Api.id} Data={Api} />
        ))}
            
           
        </div>


    )
}

export default MainLayout;