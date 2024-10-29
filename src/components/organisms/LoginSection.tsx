import React from "react";
import LoginForm from "../molecules/LoginForm";

interface LoginSectionProps {
    onLogin: () => void
}

const LoginSection: React.FC<LoginSectionProps> = ({ onLogin }) => {
    return (  
        <div className="flex flex-col justify-center items-center w-2/4 px-5">
            <LoginForm onLogin={ onLogin }/>
        </div>
    );
}

export default LoginSection;