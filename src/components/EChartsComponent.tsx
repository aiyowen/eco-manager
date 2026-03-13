import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

interface EChartsComponentProps {
  option: echarts.EChartsOption
  height?: string
  width?: string
}

const EChartsComponent: React.FC<EChartsComponentProps> = ({ 
  option, 
  height = '400px',
  width = '100%'
}) => {
  const chartRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current)
      chart.setOption(option)
      
      // 响应式调整
      const handleResize = () => {
        chart.resize()
      }
      
      window.addEventListener('resize', handleResize)
      
      return () => {
        chart.dispose()
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [option])
  
  return (
    <div 
      ref={chartRef} 
      style={{ 
        height, 
        width 
      }} 
    />
  )
}

export default EChartsComponent