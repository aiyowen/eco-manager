import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ComplianceIssue {
  id: string
  enterpriseId: string
  type: string
  description: string
  severity: 'low' | 'medium' | 'high'
  status: 'pending' | 'processing' | 'resolved'
  createdAt: string
  updatedAt: string
}

interface ComplianceReport {
  id: string
  enterpriseId: string
  type: string
  title: string
  content: string
  status: 'draft' | 'submitted' | 'approved' | 'rejected'
  createdAt: string
  updatedAt: string
}

interface ComplianceState {
  issues: ComplianceIssue[]
  reports: ComplianceReport[]
  loading: boolean
  error: string | null
}

const initialState: ComplianceState = {
  issues: [],
  reports: [],
  loading: false,
  error: null
}

export const complianceSlice = createSlice({
  name: 'compliance',
  initialState,
  reducers: {
    setIssues: (state, action: PayloadAction<ComplianceIssue[]>) => {
      state.issues = action.payload
    },
    setReports: (state, action: PayloadAction<ComplianceReport[]>) => {
      state.reports = action.payload
    },
    addIssue: (state, action: PayloadAction<ComplianceIssue>) => {
      state.issues.push(action.payload)
    },
    updateIssue: (state, action: PayloadAction<ComplianceIssue>) => {
      const index = state.issues.findIndex(i => i.id === action.payload.id)
      if (index !== -1) {
        state.issues[index] = action.payload
      }
    },
    addReport: (state, action: PayloadAction<ComplianceReport>) => {
      state.reports.push(action.payload)
    },
    updateReport: (state, action: PayloadAction<ComplianceReport>) => {
      const index = state.reports.findIndex(r => r.id === action.payload.id)
      if (index !== -1) {
        state.reports[index] = action.payload
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
  setIssues, 
  setReports, 
  addIssue, 
  updateIssue, 
  addReport, 
  updateReport, 
  setLoading, 
  setError 
} = complianceSlice.actions

export default complianceSlice.reducer