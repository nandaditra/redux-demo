import { createSlice } from "@reduxjs/toolkit"

export const librarySlice = createSlice({
    name: 'library',
    initialState: {
        data : []
    },
    reducers: {
        addData : state => {
            state.data.push("Hari")
        }
    }
})

export const { addData } = librarySlice.actions 
export default librarySlice.reducer