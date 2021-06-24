import {createSlice} from '@reduxjs/toolkit'

export const popup = createSlice({
  name: 'rooms',
  initialState: {
	isOpen: false
  },
  reducers: {
	toggle: (state) => {
	  state.isOpen = !state.isOpen
	}
  },
})

export const { toggle } = popup.actions

export default popup.reducer