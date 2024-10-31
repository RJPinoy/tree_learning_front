import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '../../api/authSlice';
import { useCheckAuthQuery } from '../../api/endpoints/auth';

type AuthWrapperProps = {
    children: ReactNode;
}

export const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
    const { data, error, isSuccess, isFetching } = useCheckAuthQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            dispatch(clearUser()); // Réinitialise l'état si une erreur se produit
        } else if (isSuccess && data) {
            dispatch(setUser(data)); // Met à jour l'utilisateur en cas de succès
        }
    }, [error, data, isSuccess, dispatch]);

    if (isFetching) return <p>Chargement en cours ...</p>;

    return <>{children}</>;
};