import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface RiskAlert {
  id: string
  enterpriseId: string
  type: string
  level: 'low' | 'medium' | 'high' | 'critical'
  title: string
  description: string
  status: 'active' | 'processed' | 'resolved'
  createdAt: string
  updatedAt: string
}

interface EmergencyResponse {
  id: string
  alertId: string
  plan: string
  actions: string[]
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
  createdAt: string
  updatedAt: string
}

interface RiskState {
  alerts: RiskAlert[]
  responses: EmergencyResponse[]
  loading: boolean
  error: string | null
}

const initialState: RiskState = {
  alerts: [],
  responses: [],
  loading: false,
  error: null
}

export const riskSlice = createSlice({
  name: 'risk',
  initialState,
  reducers: {
    setAlerts: (state, action: PayloadAction<RiskAlert[]>) => {
      state.alerts = action.payload
    },
    setResponses: (state, action: PayloadAction<EmergencyResponse[]>) => {
      state.responses = action.payload
    },
    addAlert: (state, action: PayloadAction<RiskAlert>) => {
      state.alerts.push(action.payload)
    },
    updateAlert: (state, action: PayloadAction<RiskAlert>) => {
      const index = state.alerts.findIndex(a => a.id === action.payload.id)
      if (index !== -1) {
        state.alerts[index] = action.payload
      }
    },
    addResponse: (state, action: PayloadAction<EmergencyResponse>) => {
      state.responses.push(action.payload)
    },
    updateResponse: (state, action: PayloadAction<EmergencyResponse>) => {
      const index = state.responses.findIndex(r => r.id === action.payload.id)
      if (index !== -1) {
        state.responses[index] = action.payload
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
  setAlerts, 
  setResponses, 
  addAlert, 
  updateAlert, 
  addResponse, 
  updateResponse, 
  setLoading, 
  setError 
} = riskSlice.actions

export default riskSlice.reducer