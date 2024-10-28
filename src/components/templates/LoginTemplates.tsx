import React from "react";
import LoginSection from "../organisms/LoginSection";
import CompanySection from "../organisms/CompanySection";

interface LoginTemplatesProps {

}

const LoginTemplates: React.FC<LoginTemplatesProps> = () => {
    function onLogin() {
      console.log("login...");
    }

    return (  
        <div className="flex h-screen bg-gray-100">
            <LoginSection onLogin={ onLogin } />
            <CompanySection />
        </div>
    );
}
 
export default LoginTemplates;