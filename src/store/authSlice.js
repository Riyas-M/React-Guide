import { createSlice } from '@reduxjs/toolkit';

const intitalAuthState = {isAuthenticated: false};
const authSlice = createSlice({
    name: 'authentication',
    initialState: intitalAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;