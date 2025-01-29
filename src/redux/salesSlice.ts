import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    loading: false,
};

const salesSlice = createSlice({
    name: 'sales',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { setData, setLoading } = salesSlice.actions;
export default salesSlice.reducer;
