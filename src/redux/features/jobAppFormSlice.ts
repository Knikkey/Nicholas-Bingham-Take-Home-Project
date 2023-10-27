import { createSlice } from "@reduxjs/toolkit";

interface FormData {
  data: { [key: string]: string } | null;
}

const initialState: FormData = { data: null };

export const jobAppFormSlice = createSlice({
  name: "job app form slice",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      return { data: action.payload };
    },
  },
});

export const { setFormData } = jobAppFormSlice.actions;
export default jobAppFormSlice.reducer;
