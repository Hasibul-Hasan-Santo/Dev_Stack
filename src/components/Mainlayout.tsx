import { use } from "react";
import type { Datatype } from "./Datatype";
import TechCard from "./TechCard";

interface LayoutDataType {
    Data: Promise<Datatype[]>
}

function MainLayout({ Data }: LayoutDataType) {
    const apiData = use(Data);
    
    return (
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
            <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
                {apiData.map((Api) => (
                    <div key={Api.id} className="min-w-70 w-[80vw] sm:w-auto shrink-0 md:shrink">
                        <TechCard Data={Api} />
                    </div>
                ))}
            </div>

        </div>
    );
}

export default MainLayout;