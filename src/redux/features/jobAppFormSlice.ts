import { createSlice } from "@reduxjs/toolkit";

interface FormData {
  [key: string]: string;
}

const initialState: FormData = {};

export const jobAppFormSlice = createSlice({
  name: "jobAppForm",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFormData } = jobAppFormSlice.actions;
export default jobAppFormSlice.reducer;
