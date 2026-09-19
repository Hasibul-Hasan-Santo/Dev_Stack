interface Datatype{
    Data:{
  id: string,
  name: string,
  category: string,
  description: string,
  icon: string,
  rating: number,
  difficulty: string,
  badge: string,
    }
}


const TechCard=({Data}:Datatype)=>{
    const { name, category, description, icon, rating, difficulty, badge } = Data;
    return(
        
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
     
      <div className="flex justify-between items-center mb-4">
        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center p-2">
          <img src={icon} alt={name} className="w-8 h-8 object-contain" />
        </div>
        
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-500 border border-blue-100">
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
        <div className="flex justify-between items-center text-xs font-medium text-white mb-4">
          <span className="bg-blue-600 px-2.5 py-1 rounded-md">{category}</span>
          <span className="bg-green-400 px-2.5 py-1 rounded-md">{difficulty}</span>
          <span className="font-semibold text-gray-700 flex items-center gap-1">
            <span className="text-amber-400">★</span> {rating}
          </span>
        </div>

        <button >
          Select
        </button>
        
      </div>
      
    </div>
)
}

export default TechCard;