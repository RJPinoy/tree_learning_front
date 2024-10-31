// Ce fichier définit le slice principal pour l'API. Il utilise createApi de Redux Toolkit pour créer une instance de gestion d'API qui va interagir avec votre backend.
// Il sert de point central pour la gestion des requêtes, des mutations et des cache des données.
// Dans ce fichier, vous pouvez configurer les baseQuery, les endpoints, et les reducers qui gèrent les états de chargement et d'erreur.

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    user: null | object; // Remplacez par l'interface utilisateur appropriée
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<object>) {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        clearUser(state) {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;