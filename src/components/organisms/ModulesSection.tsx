import React from "react";
import Module from "../molecules/Module";

interface ModuleItem {
    title: string;
    description: string;
}

interface ModulesSectionProps {
    modules: ModuleItem[];
}

const ModulesSection: React.FC<ModulesSectionProps> = ({ modules }) => {
    return (
        <div className='flex flex-col flex-wrap justify-start items-start w-full bg-gray-100 p-5'>
            <h1 className='text-2xl font-bold'>Modules disponibles :</h1>
            <div className='flex flex-row flex-wrap justify-start items-start w-full mt-5'>
            {
                modules.map((module, index) => (
                    <Module key={index} title={module.title} description={module.description} />
                ))
            }
            </div>
        </div>
    );
}
 
export default ModulesSection;