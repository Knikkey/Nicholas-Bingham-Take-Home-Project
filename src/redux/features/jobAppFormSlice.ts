import { createSlice } from "@reduxjs/toolkit";

interface FormData {
  data: { [key: string]: string };
}

const initialState: FormData = { data: {} };

export const jobAppFormSlice = createSlice({
  name: "job app form slice",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export const { setFormData } = jobAppFormSlice.actions;
export default jobAppFormSlice.reducer;
