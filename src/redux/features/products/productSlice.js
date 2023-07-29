import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProcessors: [],
  selectedMotherboard: [],
  selectedRam: [],
  selectedPowerSupply: [],
  selectedMonitor: [],
  selectedOthers: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProcessor: (state, action) => {
      const processor = action.payload;
      state.selectedProcessors = [processor];
    },
    addMotherboard: (state, action) => {
      const motherboard = action.payload;
      state.selectedMotherboard = [motherboard];
    },
    addRam: (state, action) => {
      const ram = action.payload;
      state.selectedRam = [ram];
    },
    addPowerSupply: (state, action) => {
      const powerSupply = action.payload;
      state.selectedPowerSupply = [powerSupply];
    },
    addMonitor: (state, action) => {
      const monitor = action.payload;
      state.selectedMonitor = [monitor];
    },
    addOthers: (state, action) => {
      const others = action.payload;
      state.selectedOthers = [others];
    },
  },
});

export const {
  addProcessor,
  addMonitor,
  addMotherboard,
  addOthers,
  addPowerSupply,
  addRam,
} = productSlice.actions;

export default productSlice.reducer;
