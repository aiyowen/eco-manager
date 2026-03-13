import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface EnergyConsumption {
  id: string
  enterpriseId: string
  date: string
  category: string
  consumption: number
  cost: number
  savings: number
}

interface ChemicalDosage {
  id: string
  enterpriseId: string
  date: string
  type: string
  dosage: number
  cost: number
  optimized: number
}

interface InspectionTask {
  id: string
  enterpriseId: string
  type: string
  status: 'scheduled' | 'in_progress' | 'completed' | 'failed'
  scheduledAt: string
  completedAt: string | null
  result: string | null
}

interface EfficiencyState {
  energyConsumption: EnergyConsumption[]
  chemicalDosage: ChemicalDosage[]
  inspectionTasks: InspectionTask[]
  loading: boolean
  error: string | null
}

const initialState: EfficiencyState = {
  energyConsumption: [],
  chemicalDosage: [],
  inspectionTasks: [],
  loading: false,
  error: null
}

export const efficiencySlice = createSlice({
  name: 'efficiency',
  initialState,
  reducers: {
    setEnergyConsumption: (state, action: PayloadAction<EnergyConsumption[]>) => {
      state.energyConsumption = action.payload
    },
    setChemicalDosage: (state, action: PayloadAction<ChemicalDosage[]>) => {
      state.chemicalDosage = action.payload
    },
    setInspectionTasks: (state, action: PayloadAction<InspectionTask[]>) => {
      state.inspectionTasks = action.payload
    },
    addEnergyConsumption: (state, action: PayloadAction<EnergyConsumption>) => {
      state.energyConsumption.push(action.payload)
    },
    addChemicalDosage: (state, action: PayloadAction<ChemicalDosage>) => {
      state.chemicalDosage.push(action.payload)
    },
    addInspectionTask: (state, action: PayloadAction<InspectionTask>) => {
      state.inspectionTasks.push(action.payload)
    },
    updateInspectionTask: (state, action: PayloadAction<InspectionTask>) => {
      const index = state.inspectionTasks.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.inspectionTasks[index] = action.payload
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
  setEnergyConsumption, 
  setChemicalDosage, 
  setInspectionTasks, 
  addEnergyConsumption, 
  addChemicalDosage, 
  addInspectionTask, 
  updateInspectionTask, 
  setLoading, 
  setError 
} = efficiencySlice.actions

export default efficiencySlice.reducer