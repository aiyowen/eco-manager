import React, { useState } from 'react'

// 简单的SVG图标组件
const MapIcon = ({ className }: { className?: string }) => <svg className={className || "w-12 h-12"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>

const ParkService: React.FC = () => {
  const [activeTab, setActiveTab] = useState('monitoring')

  // 模拟环境质量数据
  const environmentData = {
    air: {
      pm25: 35,
      pm10: 65,
      so2: 8,
      no2: 25,
      o3: 45,
      co: 0.8
    },
    water: {
      ph: 7.2,
      cod: 25,
      ammonia: 1.2,
      totalNitrogen: 2.5,
      totalPhosphorus: 0.3
    },
    noise: 55
  }

  // 模拟污染源数据
  const pollutionSources = [
    { id: 1, name: '某化工厂', type: '工业废气', status: 'normal', emissions: 85 },
    { id: 2, name: '某污水处理厂', type: '工业废水', status: 'warning', emissions: 120 },
    { id: 3, name: '某钢铁厂', type: '工业废气', status: 'normal', emissions: 95 },
    { id: 4, name: '某制药厂', type: '工业废水', status: 'danger', emissions: 150 },
  ]

  // 模拟执法记录
  const lawEnforcementRecords = [
    { id: 1, enterprise: '某化工厂', type: '现场检查', date: '2026-03-10', result: '未发现异常' },
    { id: 2, enterprise: '某污水处理厂', type: '在线监测', date: '2026-03-09', result: '超标预警' },
    { id: 3, enterprise: '某钢铁厂', type: '现场检查', date: '2026-03-08', result: '未发现异常' },
    { id: 4, enterprise: '某制药厂', type: '在线监测', date: '2026-03-07', result: '超标预警' },
  ]

  // 模拟应急事件
  const emergencyEvents = [
    { id: 1, title: '某化工厂废气泄漏', level: 'high', status: 'in_progress', time: '2026-03-11 10:30' },
    { id: 2, title: '某园区水质异常', level: 'medium', status: 'completed', time: '2026-03-10 09:15' },
    { id: 3, title: '某企业火灾', level: 'high', status: 'completed', time: '2026-03-09 16:45' },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64 bg-gradient-to-r from-blue-400 to-cyan-500">
          <img 
            src="https://images.unsplash.com/photo-1518173946687-a4c036bc3c08?w=1200&h=400&fit=crop" 
            alt="园区服务平台" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-3xl font-bold text-white mb-2">园区服务平台</h2>
            <p className="text-white/90 text-sm">
              面向园区生态环境管理部门提供环境监管支持服务
            </p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600">
            包括环境质量监控预警、污染源精细化管理、环境执法辅助、应急指挥调度等功能。
          </p>
        </div>
      </div>

      {/* 标签页导航 */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('monitoring')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'monitoring' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              环境质量监测
            </button>
            <button
              onClick={() => setActiveTab('pollution')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'pollution' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              污染源管理
            </button>
            <button
              onClick={() => setActiveTab('law')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'law' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              执法辅助
            </button>
            <button
              onClick={() => setActiveTab('emergency')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'emergency' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              应急指挥
            </button>
            <button
              onClick={() => setActiveTab('visualization')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'visualization' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              数据可视化
            </button>
          </nav>
        </div>

        {/* 标签页内容 */}
        <div className="p-6">
          {activeTab === 'monitoring' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">环境质量实时监测</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 空气质量 */}
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium text-gray-700 mb-3">空气质量</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">PM2.5</span>
                      <span className="text-sm font-medium">{environmentData.air.pm25} μg/m³</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">PM10</span>
                      <span className="text-sm font-medium">{environmentData.air.pm10} μg/m³</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">SO₂</span>
                      <span className="text-sm font-medium">{environmentData.air.so2} μg/m³</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">NO₂</span>
                      <span className="text-sm font-medium">{environmentData.air.no2} μg/m³</span>
                    </div>
                  </div>
                </div>

                {/* 水质 */}
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium text-gray-700 mb-3">水质监测</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">pH值</span>
                      <span className="text-sm font-medium">{environmentData.water.ph}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">COD</span>
                      <span className="text-sm font-medium">{environmentData.water.cod} mg/L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">氨氮</span>
                      <span className="text-sm font-medium">{environmentData.water.ammonia} mg/L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">总氮</span>
                      <span className="text-sm font-medium">{environmentData.water.totalNitrogen} mg/L</span>
                    </div>
                  </div>
                </div>

                {/* 噪声 */}
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium text-gray-700 mb-3">噪声监测</h4>
                  <div className="flex items-center justify-center h-40">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary-600">{environmentData.noise}</div>
                      <div className="text-sm text-gray-600 mt-2">dB(A)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pollution' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">污染源精细化管理</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        污染源名称
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        类型
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        状态
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        排放量
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        操作
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {pollutionSources.map((source) => (
                      <tr key={source.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{source.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{source.type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${source.status === 'normal' ? 'bg-green-100 text-green-800' : source.status === 'warning' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                            {source.status === 'normal' ? '正常' : source.status === 'warning' ? '预警' : '超标'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{source.emissions} mg/m³</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a href="#" className="text-primary-600 hover:text-primary-900">
                            详情
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'law' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">环境执法辅助</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        企业名称
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        执法类型
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        日期
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        结果
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        操作
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {lawEnforcementRecords.map((record) => (
                      <tr key={record.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{record.enterprise}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{record.type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{record.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{record.result}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a href="#" className="text-primary-600 hover:text-primary-900">
                            详情
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'emergency' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">应急指挥调度</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        事件名称
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        级别
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        状态
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        时间
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        操作
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {emergencyEvents.map((event) => (
                      <tr key={event.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{event.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${event.level === 'high' ? 'bg-red-100 text-red-800' : event.level === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                            {event.level === 'high' ? '高' : event.level === 'medium' ? '中' : '低'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${event.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' : event.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {event.status === 'in_progress' ? '处理中' : event.status === 'completed' ? '已完成' : '待处理'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{event.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a href="#" className="text-primary-600 hover:text-primary-900">
                            详情
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'visualization' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">数据可视化</h3>
              <div className="border rounded-lg p-4 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapIcon className="mx-auto text-primary-600 mb-4" />
                  <p className="text-gray-600">园区环境状况"一张图"可视化</p>
                  <p className="text-sm text-gray-500 mt-2">实时展示园区环境质量、污染源分布等信息</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ParkService