import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { useSelector } from "react-redux";
import { selectInput } from "../../stores/slices/inputSlice";

interface LoginFormProps {
    
}

const LoginForm: React.FC<LoginFormProps> = () => {
    const [ isCheck, setIsCheck ] = React.useState(false);
    const inputValue = useSelector(selectInput);

    function onLogin() {
        console.log("login...");
        console.log("email:", inputValue.email);
        console.log("password:", inputValue.password);
        console.log(isCheck);
    }

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.checked;
        setIsCheck(newValue);
    };

    return (
        <>
            <h2 className="my-2 text-xl font-bold">Login Section</h2>
            <Input id="email" label="Email" />
            <Input id="password" label="Mot de passe" />
            <div className="flex flex-row justify-center items-center">
                <p className="p-2">Keep me logged in</p>
                <input 
                    type="checkbox" 
                    defaultChecked={ isCheck }
                    onChange={ handleCheckbox }
                />
            </div>
            <Button label="Se connecter" onClick={ onLogin }/>
            <p>Mot de passe oublié ? <a href="#" className="text-blue-600 hover:text-sky-700">Réinitialiser</a></p>
        </>
    );
}
 
export default LoginForm;