// Ce fichier définit le slice principal pour l'API. Il utilise createApi de Redux Toolkit pour créer une instance de gestion d'API qui va interagir avec votre backend.
// Il sert de point central pour la gestion des requêtes, des mutations et des cache des données.
// Dans ce fichier, vous pouvez configurer les baseQuery, les endpoints, et les reducers qui gèrent les états de chargement et d'erreur.

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    user: null | object; // Remplacez par l'interface utilisateur appropriée
    token: null | string;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    token: localStorage.getItem('token'),
    isAuthenticated: !!localStorage.getItem('token'),
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<object>) {
            state.user = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        setToken(state, action) {
            state.token = action.payload
            localStorage.setItem('token', action.payload);
        },
        clearUser(state) {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        },
    },
});

export const { setUser, clearUser, setToken } = authSlice.actions;
export default authSlice.reducer;