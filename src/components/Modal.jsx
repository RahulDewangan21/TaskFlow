import React from 'react';

const Modal = ({ isOpen, onClose, children, title }) => {
  
  if (!isOpen) return null;

  return (
    
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-xs flex items-center justify-center z-50">
      

      
      <div className="bg-white p-6 rounded-lg shadow-xl relative w-full max-w-md mx-auto">
        

        <div className="flex justify-between items-center mb-4">
          
          <h2 className="text-xl font-semibold">{title}</h2>
          
          
          <button
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
            aria-label="Close modal" 
          >
            &times;
          </button>
        </div>

       
        {children}
      </div>
    </div>
  );
};

export default Modal;