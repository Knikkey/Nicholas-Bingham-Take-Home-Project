import { createSlice } from "@reduxjs/toolkit";
import { formFields } from "@/data/data";

interface FormData {
  data: { [key: string]: string };
}

const initialState: FormData = {
  data: formFields
    .flat()
    .reduce((acc, curr) => ({ ...acc, [curr.id]: "" }), {}),
};

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
