import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { setAirQuality, setWaterQuality, setSoilQuality } from '../features/environment/environmentSlice'
import EChartsComponent from '../components/EChartsComponent'

// 简单的SVG图标组件
const AlertTriangleIcon = ({ className }: { className?: string }) => <svg className={className || "w-5 h-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-.334-1.964-.334-2.732 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
const NewspaperIcon = ({ className }: { className?: string }) => <svg className={className || "w-5 h-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
const QuickLinksIcon = ({ className }: { className?: string }) => <svg className={className || "w-5 h-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
const ChevronRightIcon = ({ className }: { className?: string }) => <svg className={className || "w-4 h-4"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const { airQuality, waterQuality, soilQuality } = useSelector((state: RootState) => state.environment)

  // 模拟数据
  useEffect(() => {
    // 模拟空气质素数据
    dispatch(setAirQuality({
      pm25: 35,
      pm10: 65,
      so2: 8,
      no2: 25,
      o3: 45,
      co: 0.8
    }))

    // 模拟水质数据
    dispatch(setWaterQuality({
      ph: 7.2,
      cod: 25,
      ammonia: 1.2,
      totalNitrogen: 2.5,
      totalPhosphorus: 0.3
    }))

    // 模拟土壤数据
    dispatch(setSoilQuality({
      ph: 6.8,
      organicMatter: 2.5,
      nitrogen: 1.2,
      phosphorus: 0.8,
      potassium: 1.5
    }))
  }, [dispatch])

  // 快速入口数据
  const quickLinks = [
    { title: '园区服务平台', icon: '🏭', path: '/park-service' },
    { title: '企业服务平台', icon: '🏢', path: '/enterprise-service' },
    { title: '合规保障', icon: '✅', path: '/compliance' },
    { title: '风险防控', icon: '⚠️', path: '/risk-control' },
    { title: '双碳管理', icon: '🌱', path: '/carbon-management' },
    { title: '降本增效', icon: '📈', path: '/cost-reduction' },
  ]

  // 预警信息
  const alerts = [
    { id: 1, title: '某化工厂废气排放超标', level: 'high', time: '2026-03-11 10:30' },
    { id: 2, title: '某园区水质异常', level: 'medium', time: '2026-03-11 09:15' },
    { id: 3, title: '某企业未按时提交排污报告', level: 'low', time: '2026-03-10 16:45' },
  ]

  // 新闻动态
  const news = [
    { id: 1, title: '环保部发布新的大气污染防治标准', time: '2026-03-11' },
    { id: 2, title: '我省启动新一轮环保专项整治行动', time: '2026-03-10' },
    { id: 3, title: '环保管家智慧平台正式上线运行', time: '2026-03-09' },
  ]

  // 获取空气质量等级
  const getAirQualityLevel = (pm25: number) => {
    if (pm25 <= 35) return { level: '优', color: 'text-green-500' }
    if (pm25 <= 75) return { level: '良', color: 'text-yellow-500' }
    if (pm25 <= 115) return { level: '轻度污染', color: 'text-orange-500' }
    if (pm25 <= 150) return { level: '中度污染', color: 'text-red-500' }
    if (pm25 <= 250) return { level: '重度污染', color: 'text-purple-500' }
    return { level: '严重污染', color: 'text-maroon-500' }
  }

  const airLevel = getAirQualityLevel(airQuality.pm25)

  return (
    <div className="space-y-6">
      {/* 平台概览 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">平台概览</h2>
        <p className="text-gray-600">
          环保管家智慧平台采用"1+2+3+N"总体架构体系，以统一数据底座为基础，
          构建园区服务平台和企业服务平台两大核心平台，利用物联网、大数据、人工智能三大技术支撑，
          实现N个应用场景的智能管理。
        </p>
      </div>

      {/* 实时监测数据 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 空气质量 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">空气质量</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${airLevel.color}`}>
              {airLevel.level}
            </span>
          </div>
          <EChartsComponent 
            height="300px"
            option={{
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow'
                }
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis: {
                type: 'category',
                data: ['PM2.5', 'PM10', 'SO₂', 'NO₂', 'O₃', 'CO']
              },
              yAxis: {
                type: 'value',
                axisLabel: {
                  formatter: '{value} μg/m³'
                }
              },
              series: [
                {
                  data: [
                    airQuality.pm25,
                    airQuality.pm10,
                    airQuality.so2,
                    airQuality.no2,
                    airQuality.o3,
                    airQuality.co * 1000 // 转换为 μg/m³
                  ],
                  type: 'bar',
                  itemStyle: {
                    color: '#0ea5e9'
                  }
                }
              ]
            }}
          />
        </div>

        {/* 水质 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">水质监测</h3>
          <EChartsComponent 
            height="300px"
            option={{
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow'
                }
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis: {
                type: 'category',
                data: ['pH值', 'COD', '氨氮', '总氮', '总磷']
              },
              yAxis: {
                type: 'value',
                axisLabel: {
                  formatter: '{value} mg/L'
                }
              },
              series: [
                {
                  data: [
                    waterQuality.ph,
                    waterQuality.cod,
                    waterQuality.ammonia,
                    waterQuality.totalNitrogen,
                    waterQuality.totalPhosphorus
                  ],
                  type: 'bar',
                  itemStyle: {
                    color: '#22c55e'
                  }
                }
              ]
            }}
          />
        </div>

        {/* 土壤质量 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">土壤质量</h3>
          <EChartsComponent 
            height="300px"
            option={{
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow'
                }
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis: {
                type: 'category',
                data: ['pH值', '有机质', '氮', '磷', '钾']
              },
              yAxis: {
                type: 'value',
                axisLabel: {
                  formatter: '{value}'
                }
              },
              series: [
                {
                  data: [
                    soilQuality.ph,
                    soilQuality.organicMatter,
                    soilQuality.nitrogen,
                    soilQuality.phosphorus,
                    soilQuality.potassium
                  ],
                  type: 'bar',
                  itemStyle: {
                    color: '#f59e0b'
                  }
                }
              ]
            }}
          />
        </div>
      </div>

      {/* 预警信息 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <AlertTriangleIcon className="mr-2 text-yellow-500" />
            预警信息
          </h3>
          <button className="text-primary-600 text-sm flex items-center">
            查看全部 <ChevronRightIcon className="ml-1" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  预警内容
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  级别
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  时间
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {alerts.map((alert) => (
                <tr key={alert.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{alert.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${alert.level === 'high' ? 'bg-red-100 text-red-800' : alert.level === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                      {alert.level === 'high' ? '高' : alert.level === 'medium' ? '中' : '低'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {alert.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 新闻动态 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <NewspaperIcon className="mr-2 text-primary-600" />
              新闻动态
            </h3>
            <button className="text-primary-600 text-sm flex items-center">
              查看全部 <ChevronRightIcon className="ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {news.map((item) => (
              <div key={item.id} className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-500 mt-2"></div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 快速入口 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <QuickLinksIcon className="mr-2 text-gray-600" />
              快速入口
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-2xl mb-2">{link.icon}</span>
                <span className="text-sm font-medium text-gray-700">{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home