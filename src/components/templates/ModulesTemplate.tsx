import React from 'react';
import NavBar from '../organisms/NavBar';

interface ModulesTemplateProps {
    
}

const ModulesTemplate: React.FC<ModulesTemplateProps> = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <NavBar label='Tree Learning' />
      <main className="flex-grow p-4 pt-0">
        <div>
            Hello modules!
        </div>
      </main>
    </div>
  );
};

export default ModulesTemplate;