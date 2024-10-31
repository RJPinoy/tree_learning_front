// Ce fichier est dédié aux opérations d'authentification. Vous y définirez les requêtes pour :
// Connexion des utilisateurs (login).
// Inscription des nouveaux utilisateurs (registration).
// Gestion des tokens JWT.
// Déconnexion des utilisateurs (logout).
// Chaque opération peut être définie comme un endpoint dans le slice API.

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:8000'

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl + '/api' }),
    endpoints: (builder) => ({
        checkAuth: builder.query<any, void>({
            query: () => '/me', // Endpoint pour vérifier l'utilisateur
        }),
    }),
});

export const { useCheckAuthQuery } = api;
export default api;