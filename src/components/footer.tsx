const Footer = () => {
 return (
   <footer className="bg-white border-t border-gray-100 pt-16 pb-8 text-gray-500 text-sm">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      
       <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 border-b border-gray-100">
        
        
         <div className="md:col-span-2 pr-4">
           <div className="flex items-center gap-2 mb-4">
           
             <div className="w-8 h-8 rounded-lg bg-pink-500 flex items-center justify-center text-white font-bold text-xs">
               DS
             </div>
             <span className="text-xl font-bold text-gray-900">Dev Stack</span>
           </div>
          
           <p className="text-gray-400 text-xs max-w-sm mb-6 leading-relaxed">
             Curated tools, technologies, and resources for developers building modern software.
           </p>

          
           <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
             <a href="#github" className="hover:text-gray-900 transition-colors">GitHub</a>
             <a href="#twitter" className="hover:text-gray-900 transition-colors">Twitter</a>
             <a href="#linkedin" className="hover:text-gray-900 transition-colors">LinkedIn</a>
           </div>
         </div>

       
         <div>
           <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
             PRODUCT
           </h4>
           <ul className="space-y-2.5 text-xs">
             <li><a href="#home" className="hover:text-gray-900 transition-colors">Home</a></li>
             <li><a href="#technologies" className="hover:text-gray-900 transition-colors">Technologies</a></li>
             <li><a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a></li>
           </ul>
         </div>

        
         <div>
           <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
             COMPANY
           </h4>
           <ul className="space-y-2.5 text-xs">
             <li><a href="#about" className="hover:text-gray-900 transition-colors">About</a></li>
             <li><a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a></li>
             <li><a href="#careers" className="hover:text-gray-900 transition-colors">Careers</a></li>
           </ul>
         </div>

        
         <div>
           <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
             LEGAL
           </h4>
           <ul className="space-y-2.5 text-xs">
             <li><a href="#privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
             <li><a href="#terms" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
           </ul>
         </div>

       </div>

      
       <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-400">
         <p>© 2026 DevStack. All rights reserved.</p>
         <div className="flex gap-4 mt-2 sm:mt-0">
           <a href="#privacy" className="hover:text-gray-600 transition-colors">Privacy</a>
           <a href="#terms" className="hover:text-gray-600 transition-colors">Terms</a>
         </div>
       </div>

     </div>
   </footer>
 );
};

export default Footer;
