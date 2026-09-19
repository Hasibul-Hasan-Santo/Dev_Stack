
import heroImage from '../assets/banner-stack.png'; 
const HeroSection = () => {
    return (
        <section className="w-full bg-white py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
                        
                       
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
                            Build Your Ideal <br className="hidden sm:inline" />
                            <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>

                        
                        <p className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed">
                            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                        </p>

                        
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
                            <button className="w-full sm:w-auto bg-linear-to-r from-pink-500 to-rose-500 text-white font-medium px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition-all">
                                Explore Technologies
                            </button>
                            <button className="w-full sm:w-auto bg-white border border-gray-200 text-gray-700 hover:text-gray-900 font-medium px-6 py-3 rounded-xl hover:bg-gray-50 transition-all">
                                Learn More
                            </button>
                        </div>

                    </div>

                    
                    <div className="flex justify-center items-center">
                        <img 
                            src={heroImage} 
                            alt="3D Development Stack Graphic" 
                            className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;