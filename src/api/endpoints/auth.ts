// Ce fichier est dédié aux opérations d'authentification. Vous y définirez les requêtes pour :
// Connexion des utilisateurs (login).
// Inscription des nouveaux utilisateurs (registration).
// Gestion des tokens JWT.
// Déconnexion des utilisateurs (logout).
// Chaque opération peut être définie comme un endpoint dans le slice API.

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../stores/store';
import { baseUrl } from '../../../variables.ts';

interface LoginRequestBody {
    email: string;
    password: string;
}

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: baseUrl + '/api',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            console.log(headers);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        loginCheck: builder.mutation<any, LoginRequestBody>({
            query: (body) => ({
                url: '/login_check',
                method: 'POST',
                body,
            }),
        }),
        checkAuth: builder.query<any, void>({
            query: () => '/me',
        }),
    }),
});

export const { useLoginCheckMutation, useCheckAuthQuery } = api;
export default api;