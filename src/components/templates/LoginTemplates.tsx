import React from "react";
import LoginSection from "../organisms/LoginSection";
import CompanySection from "../organisms/CompanySection";

interface LoginTemplatesProps {

}

const LoginTemplates: React.FC<LoginTemplatesProps> = () => {
    return (  
        <div className="flex h-screen bg-gray-100">
            <LoginSection />
            <CompanySection />
        </div>
    );
}
 
export default LoginTemplates;