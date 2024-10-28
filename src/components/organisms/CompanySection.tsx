import React from "react";

interface CompanySectionProps {

}

const CompanySection: React.FC<CompanySectionProps> = () => {
    return (  
        <div className="flex flex-col justify-center items-center w-2/4">
            <h2 className="text-xl font-bold">Company Section</h2>
            <p className="my-2">Here you can include patati... patata...</p>
        </div>
    );
}
 
export default CompanySection;