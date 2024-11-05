import React from "react";

interface ModuleProps {
    title: string;
    description: string;
}

const Module: React.FC<ModuleProps> = ({ title, description }) => {
    return (
        <div className='flex flex-col justify-center items-center min-w-64 max-w-64 min-h-64 mr-5 mb-5 p-2 shadow-md rounded-xl bg-white border-4 border-gray-400 transition duration-500 ease-in-out hover:shadow-2xl hover:border-gray-600'>
            <h2 className='flex justify-center items-center min-h-10 font-semibold text-center mb-2'>{ title }</h2>
            <p className='flex flex-1 text-center'>{ description }</p>
        </div>
    );
}
 
export default Module;