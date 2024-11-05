// Ce fichier gère les requêtes pour des entités ou des fonctionnalités spécifiques à votre application, comme :
// CRUD (Créer, Lire, Mettre à jour, Supprimer) pour divers modules.
// Requêtes pour récupérer des données spécifiques liées aux modules de votre application.
// Chaque fonction définie dans ce fichier peut également être intégrée dans le slice API pour gérer les interactions avec le backend.

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../stores/store";
import { baseUrl } from '../../../variables.ts';

const apiModule = createApi({
    reducerPath: 'module',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl + '/api',
        credentials: 'include',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            console.log(headers);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getModules: builder.query<any, void>({
            query: () => '/modules',
        })
    })
});

export const { useGetModulesQuery } = apiModule;
export default apiModule;