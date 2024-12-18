import React from 'react';
import FAQItem from './components/FAQItem';
import {Star} from 'lucide-react';
const App = () =>{
  const faqs = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
      question: "Is Frontend Mentor free?",
      answer: "Yes, Frontend Mentor offers both free and premium coding challenges. The free tier includes access to numerous projects suitable for all skill levels."
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer: "Absolutely! The projects are designed to be portfolio-worthy and can be used to showcase your skills to potential employers."
    },
    {
      question: "How can I get help if I'm stuck on a challenge?",
      answer: "Frontend Mentor has a supportive community where you can ask questions, get feedback, and collaborate with other developers. You can also access solution guides and documentation."
    }
  ];
return(

  <div className="min-h-screen bg-gradient-to-br from-purple-900 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
   <div className="mx-auto max-w-3xl">
    <h1 className='flex items-center justify-center font-bold text-2xl text-white mb-6'>
    <Star className="h-5 w-5 mr-2 hover:filled-in"/>
    FAQS
    </h1>
  
   </div>
   <div className="bg-white shadow-lg rounded-lg overflow-hidden">
     {faqs.map((faq , index)=>(
       <FAQItem 
        key={index}
        question={faq.question}
        answer ={faq.answer}
       />
     ))};
   </div>
  </div>
);
}
export default App;