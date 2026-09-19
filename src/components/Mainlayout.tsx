import { useState } from "react";
import type { Datatype } from "./Datatype";
import TechCard from "./TechCard";
import Sidebar from "./sidebar"; 

interface LayoutDataType {
    Data: Datatype[];
}

function MainLayout({ Data }: LayoutDataType) {
    const apiData = Data;
    const [selected, setSelected] = useState<Datatype[]>([]);

    const selectedHandeler = (tech: Datatype) => {
        const isExist = selected.some((item) => item.id === tech.id);

        if (isExist) {
            setSelected(selected.filter((item) => item.id !== tech.id));
        } else {
            setSelected([...selected, tech]);
        }
    };

    const handleRemove = (id: string) => {
        setSelected(selected.filter((item) => item.id !== id));
    };

    const handleClearAll = () => {
        setSelected([]);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                
                
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
                    {apiData.map((Api) => (
                        <div key={Api.id} className="w-full">
                            <TechCard
                                Data={Api}
                                onSelect={() => selectedHandeler(Api)}
                                isSelected={selected.some((item) => item.id === Api.id)}
                            />
                        </div>
                    ))}
                </div>

                
                <div className="lg:col-span-1">
                    <Sidebar
                        selectedTech={selected}
                        onRemove={handleRemove}
                        onClearAll={handleClearAll}
                    />
                </div>

            </div>
        </div>
    );
}

export default MainLayout;