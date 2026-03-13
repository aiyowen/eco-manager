import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CarbonEmission {
  id: string
  enterpriseId: string
  year: number
  month: number
  scope1: number
  scope2: number
  scope3: number
  total: number
  createdAt: string
}

interface CarbonFootprint {
  id: string
  enterpriseId: string
  reportId: string
  data: {
    energy: number
    transportation: number
    waste: number
    other: number
  }
  total: number
  status: 'draft' | 'completed' | 'verified'
  createdAt: string
  updatedAt: string
}

interface CarbonAsset {
  id: string
  enterpriseId: string
  type: string
  quantity: number
  value: number
  status: 'active' | 'traded' | 'retired'
  createdAt: string
  updatedAt: string
}

interface CarbonState {
  emissions: CarbonEmission[]
  footprints: CarbonFootprint[]
  assets: CarbonAsset[]
  loading: boolean
  error: string | null
}

const initialState: CarbonState = {
  emissions: [],
  footprints: [],
  assets: [],
  loading: false,
  error: null
}

export const carbonSlice = createSlice({
  name: 'carbon',
  initialState,
  reducers: {
    setEmissions: (state, action: PayloadAction<CarbonEmission[]>) => {
      state.emissions = action.payload
    },
    setFootprints: (state, action: PayloadAction<CarbonFootprint[]>) => {
      state.footprints = action.payload
    },
    setAssets: (state, action: PayloadAction<CarbonAsset[]>) => {
      state.assets = action.payload
    },
    addEmission: (state, action: PayloadAction<CarbonEmission>) => {
      state.emissions.push(action.payload)
    },
    addFootprint: (state, action: PayloadAction<CarbonFootprint>) => {
      state.footprints.push(action.payload)
    },
    addAsset: (state, action: PayloadAction<CarbonAsset>) => {
      state.assets.push(action.payload)
    },
    updateFootprint: (state, action: PayloadAction<CarbonFootprint>) => {
      const index = state.footprints.findIndex(f => f.id === action.payload.id)
      if (index !== -1) {
        state.footprints[index] = action.payload
      }
    },
    updateAsset: (state, action: PayloadAction<CarbonAsset>) => {
      const index = state.assets.findIndex(a => a.id === action.payload.id)
      if (index !== -1) {
        state.assets[index] = action.payload
      }
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
  setEmissions, 
  setFootprints, 
  setAssets, 
  addEmission, 
  addFootprint, 
  addAsset, 
  updateFootprint, 
  updateAsset, 
  setLoading, 
  setError 
} = carbonSlice.actions

export default carbonSlice.reducer