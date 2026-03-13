import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Enterprise {
  id: string
  name: string
  industry: string
  address: string
  contact: string
  status: 'normal' | 'warning' | 'danger'
  emissions: {
    air: number
    water: number
    solid: number
  }
  compliance: {
    rate: number
    issues: number
  }
}

interface EnterpriseState {
  enterprises: Enterprise[]
  selectedEnterprise: Enterprise | null
  loading: boolean
  error: string | null
}

const initialState: EnterpriseState = {
  enterprises: [],
  selectedEnterprise: null,
  loading: false,
  error: null
}

export const enterpriseSlice = createSlice({
  name: 'enterprise',
  initialState,
  reducers: {
    setEnterprises: (state, action: PayloadAction<Enterprise[]>) => {
      state.enterprises = action.payload
    },
    setSelectedEnterprise: (state, action: PayloadAction<Enterprise | null>) => {
      state.selectedEnterprise = action.payload
    },
    addEnterprise: (state, action: PayloadAction<Enterprise>) => {
      state.enterprises.push(action.payload)
    },
    updateEnterprise: (state, action: PayloadAction<Enterprise>) => {
      const index = state.enterprises.findIndex(e => e.id === action.payload.id)
      if (index !== -1) {
        state.enterprises[index] = action.payload
      }
    },
    deleteEnterprise: (state, action: PayloadAction<string>) => {
      state.enterprises = state.enterprises.filter(e => e.id !== action.payload)
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    }
  }
})

export const { 
  setEnterprises, 
  setSelectedEnterprise, 
  addEnterprise, 
  updateEnterprise, 
  deleteEnterprise, 
  setLoading, 
  setError 
} = enterpriseSlice.actions

export default enterpriseSlice.reducer