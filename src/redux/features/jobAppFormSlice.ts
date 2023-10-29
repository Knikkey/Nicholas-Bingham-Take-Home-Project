import { createSlice } from "@reduxjs/toolkit";
import { formFields } from "@/data/data";

interface FormDataType {
  data: { [key: string]: string };
}

const initialState: FormDataType = {
  data: formFields
    .flat()
    .reduce((acc, curr) => ({ ...acc, [curr.id]: "" }), {}),
};

export const jobAppFormSlice = createSlice({
  name: "jobAppForm",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    resetState: () => initialState,
  },
});

export const { setFormData, resetState } = jobAppFormSlice.actions;
export default jobAppFormSlice.reducer;
