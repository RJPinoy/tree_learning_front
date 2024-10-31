import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from '../../stores/slices/authSlice';
import { useCheckAuthQuery } from '../../api/endpoints/auth';
import { RootState } from '../../stores/store';

type AuthWrapperProps = {
    children: ReactNode;
}

export const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
    const token = useSelector((state: RootState) => state.auth.token);
    const { data, error, isSuccess, isFetching } = useCheckAuthQuery(undefined, {
        skip: !token
    });
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