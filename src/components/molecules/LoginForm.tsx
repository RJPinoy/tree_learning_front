import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

interface LoginFormProps {
    onLogin: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    return (
        <>
            <h2 className="my-2 text-xl font-bold">Login Section</h2>
            <Input label="Email"/>
            <Input label="Mot de passe"/>
            <div className="flex flex-row justify-center items-center">
                <p className="p-2">Keep me logged in</p>
                <input type="checkbox" />
            </div>
            <Button label="Se connecter" onClick={ onLogin }/>
            <p>Mot de passe oublié ? <a href="#" className="text-blue-600 hover:text-sky-700">Réinitialiser</a></p>
        </>
    );
}
 
export default LoginForm;