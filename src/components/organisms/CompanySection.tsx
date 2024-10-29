import React from "react";

interface CompanySectionProps {

}

const CompanySection: React.FC<CompanySectionProps> = () => {
    return (  
        <div className="flex flex-col justify-center items-center w-2/4 px-5">
            <h2 className="text-xl font-bold">Company Section</h2>
            <p className="my-2 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quam ratione, laudantium mollitia pariatur sunt cumque dolores amet velit maiores nulla eligendi, error odit quae reiciendis vel quaerat, maxime assumenda.</p>
        </div>
    );
}
 
export default CompanySection;