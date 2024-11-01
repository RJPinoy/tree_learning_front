import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { useDispatch, useSelector } from "react-redux";
import { selectInput } from "../../stores/slices/inputSlice";
import { useLoginCheckMutation, useCheckAuthQuery } from "../../api/endpoints/auth";
import { setUser, clearUser, setToken } from "../../stores/slices/authSlice";
import { RootState } from '../../stores/store';

interface LoginFormProps {
    
}

const LoginForm: React.FC<LoginFormProps> = () => {
    const [ isCheck, setIsCheck ] = React.useState(false);
    const dispatch = useDispatch();
    const inputValue = useSelector(selectInput);
    const token = useSelector((state: RootState) => state.auth.token);
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const { data } = useCheckAuthQuery(undefined, {
        skip: !token
    });
    const [ loginCheck ] = useLoginCheckMutation();

    const onLogin = async () => {
        try {
            console.log("Attempting to login...", inputValue);

            const loginRequestBody = {
                email: inputValue.email,
                password: inputValue.password,
            };

            const response = await loginCheck(loginRequestBody).unwrap();
            const token = response.token;
            dispatch(setToken(token));
            dispatch(setUser(data));
            console.log("Login successful:", response);
            console.log("your token : ", response);
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    React.useEffect(() => {
        if (data) {
            dispatch(setUser(data));
        }
    }, [data, dispatch]);

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.checked;
        setIsCheck(newValue);
    };
  
    const handleDisconnect = () => {
        dispatch(clearUser());
        console.log("Disconnected successfully.");
    }

    if (isAuthenticated) return (
        <>
            <h2 className="my-2 text-xl font-bold">Welcome {data.email} !</h2>
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-sky-700 transition duration-500 ease-in-out' onClick={ handleDisconnect }>Se déconnecter</button>
        </>

    )

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