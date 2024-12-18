import React,{useState} from 'react';
import {Plus } from 'lucide-react';
const FAQItem = ({question , answer}) =>{
const[isOpen , setIsOpen] = useState(false);
return(
  <div className="border border-b-purple-100">
   <button className="w-full px-4 py-6 flex items-center justify-between text-left hover:bg-purple-200"
   onClick={() => setIsOpen(!isOpen)}
   >
    <span className="text-gray-500 font-bold">
      {question}
    </span>
    <span
     className={`transform transition-transform ${isOpen ? "rotate-45": ""}`}
    >
      <Plus className="h-5 w-5" strokeWidth={2}/>

    </span>
   </button>
   <div className={`overflow-hidden transition transform-all duration-300 ${isOpen? "max-h-45" : "max-h-0"}`}
   style={{maxHeight: isOpen? "9rem":"0" }}
   >
    <p className="bg-purple-50 text-gray-300 p-4">{answer}</p>
   </div>
  </div>
);
}
export default FAQItem;