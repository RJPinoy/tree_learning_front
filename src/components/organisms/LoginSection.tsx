import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

interface LoginSectionProps {
    onLogin: () => void
}

const LoginSection: React.FC<LoginSectionProps> = ({ onLogin }) => {
    return (  
        <div className="flex flex-col justify-center items-center w-2/4">
            <h2 className="my-2 text-xl font-bold">Login Section</h2>
            <Input label="Email"/>
            <Input label="Mot de passe"/>
            <div className="flex flex-row justify-center items-center">
                <p className="p-2">Keep me logged in</p>
                <input type="checkbox" />
            </div>
            <Button label="Se connecter" onClick={ onLogin }/>
            <p>Mot de passe oublié ? <a href="#" className="text-blue-600 hover:text-sky-700">Réinitialiser</a></p>
        </div>
    );
}

export default LoginSection;