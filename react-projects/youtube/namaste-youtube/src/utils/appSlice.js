import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true
    },
    reducers: {
        toggleMenu: (state) => {
            // console.log('heelo reducer');
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu: (state) => {
            state.isMenuOpen = false
        }
    }
})

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;