import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface EnvironmentState {
  airQuality: {
    pm25: number
    pm10: number
    so2: number
    no2: number
    o3: number
    co: number
  }
  waterQuality: {
    ph: number
    cod: number
    ammonia: number
    totalNitrogen: number
    totalPhosphorus: number
  }
  soilQuality: {
    ph: number
    organicMatter: number
    nitrogen: number
    phosphorus: number
    potassium: number
  }
  loading: boolean
  error: string | null
}

const initialState: EnvironmentState = {
  airQuality: {
    pm25: 0,
    pm10: 0,
    so2: 0,
    no2: 0,
    o3: 0,
    co: 0
  },
  waterQuality: {
    ph: 7.0,
    cod: 0,
    ammonia: 0,
    totalNitrogen: 0,
    totalPhosphorus: 0
  },
  soilQuality: {
    ph: 6.5,
    organicMatter: 0,
    nitrogen: 0,
    phosphorus: 0,
    potassium: 0
  },
  loading: false,
  error: null
}

export const environmentSlice = createSlice({
  name: 'environment',
  initialState,
  reducers: {
    setAirQuality: (state, action: PayloadAction<EnvironmentState['airQuality']>) => {
      state.airQuality = action.payload
    },
    setWaterQuality: (state, action: PayloadAction<EnvironmentState['waterQuality']>) => {
      state.waterQuality = action.payload
    },
    setSoilQuality: (state, action: PayloadAction<EnvironmentState['soilQuality']>) => {
      state.soilQuality = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    }
  }
})

export const { setAirQuality, setWaterQuality, setSoilQuality, setLoading, setError } = environmentSlice.actions

export default environmentSlice.reducer