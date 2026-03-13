import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import environmentReducer from './features/environment/environmentSlice'
import enterpriseReducer from './features/enterprise/enterpriseSlice'
import complianceReducer from './features/compliance/complianceSlice'
import riskReducer from './features/risk/riskSlice'
import carbonReducer from './features/carbon/carbonSlice'
import efficiencyReducer from './features/efficiency/efficiencySlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    environment: environmentReducer,
    enterprise: enterpriseReducer,
    compliance: complianceReducer,
    risk: riskReducer,
    carbon: carbonReducer,
    efficiency: efficiencyReducer,
  },
}) 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch