import { useState } from "react";
import type { Datatype } from "./Datatype";
import TechCard from "./TechCard";
import Sidebar from "./sidebar"; 
import { toast } from "react-toastify";

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
            toast.error(`${tech.name} removed from stack!`, { autoClose: 2000 });
        } else {
            setSelected([...selected, tech]);
            toast.success(`${tech.name} added to stack!`, { autoClose: 2000 });
        }
    };

    const handleRemove = (id: string) => {
        const removedItem = selected.find((item) => item.id === id);
        setSelected(selected.filter((item) => item.id !== id));
        
        if (removedItem) {
            toast.error(`${removedItem.name} removed from stack!`, { autoClose: 2000 });
        }
    };

    const handleClearAll = () => {
        setSelected([]);
        toast.warn("All technologies removed from stack!", { autoClose: 2000 });
    };

    return (
        <div className="w-full bg-white py-8">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    
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
                    
                    <div className="lg:col-span-1 sticky top-35.5">
                        <Sidebar
                            selectedTech={selected}
                            onRemove={handleRemove}
                            onClearAll={handleClearAll}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MainLayout;