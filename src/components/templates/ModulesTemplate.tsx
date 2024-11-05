import React from 'react';
import NavBar from '../organisms/NavBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores/store';
import { useGetModulesQuery } from '../../api/endpoints/modules';
import ModulesSection from '../organisms/ModulesSection';

interface ModulesTemplateProps {
    
}

const ModulesTemplate: React.FC<ModulesTemplateProps> = () => {
  const [ modules, setModules ] = React.useState();
  const token = useSelector((state: RootState) => state.auth.token);
  const { data } = useGetModulesQuery(undefined, {
    skip: !token
  });
  
  React.useEffect(() => {
    if (data) {
      console.log(data.modules);
      setModules(data.modules);
    }
  }, [data]);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <NavBar label='Tree Learning' />
      <main className="flex-grow p-4 pt-0">
        {
          modules ? <ModulesSection modules={ modules } /> : null
        }
      </main>
    </div>
  );
};

export default ModulesTemplate;