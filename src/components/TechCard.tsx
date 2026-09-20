import type { Datatype } from "./Datatype";

interface TechCardProps {
  Data: Datatype;
  onSelect: () => void;
  isSelected: boolean;
}

const TechCard = ({ Data, onSelect, isSelected }: TechCardProps) => {
  const { name, category, description, icon, rating, difficulty, badge } = Data;

  return (
    <div 
      className={`bg-white rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between h-full ${
        isSelected 
          ? "border-red-500 ring-1 ring-red-500 shadow-md" 
          : "border-gray-100 shadow-sm"  
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center p-2">
          <img src={icon} alt={name} className="w-8 h-8 object-contain" />
        </div>

        <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-500 border border-blue-100 whitespace-nowrap">
          {badge}
        </span>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          {description}
        </p>
      </div>

      <div>
        <div className="flex justify-between items-center text-xs font-medium text-white mb-4 gap-1">
          <span className="bg-blue-600 px-2.5 py-1 rounded-md whitespace-nowrap">{category}</span>
          <span className="bg-green-500 px-2.5 py-1 rounded-md whitespace-nowrap">{difficulty}</span>
          <span className="font-semibold text-gray-700 flex items-center gap-0.5 whitespace-nowrap">
            <span className="text-amber-400">★</span> {rating}
          </span>
        </div>

        <button
          onClick={onSelect}
          className={`w-full py-2 px-4 rounded-xl font-medium transition-colors ${
            isSelected
              ? "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100"
              : "bg-gray-900 text-white hover:bg-black"
          }`}
        >
          {isSelected ? "Remove from Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechCard;