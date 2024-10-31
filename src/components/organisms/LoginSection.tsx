import React from "react";
import LoginForm from "../molecules/LoginForm";

interface LoginSectionProps {
    
}

const LoginSection: React.FC<LoginSectionProps> = () => {
    return (  
        <div className="flex flex-col justify-center items-center w-2/4 px-5">
            <LoginForm />
        </div>
    );
}

export default LoginSection;