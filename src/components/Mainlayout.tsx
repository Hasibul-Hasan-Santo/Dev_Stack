import { use } from "react";
import type { Datatype } from "./Datatype";

interface LayoutDataType{
    Data : Promise<Datatype[]>

}


function MainLayout({Data}:LayoutDataType) {
    const apiData= use(Data);
    console.log(apiData);
    
    return (
        <div>
           
        </div>


    )
}

export default MainLayout;