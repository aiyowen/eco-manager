import React, { useState } from 'react'

// 简单的SVG图标组件
const ActivityIcon = ({ className }: { className?: string }) => <svg className={className || "w-12 h-12"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>

const EnterpriseService: React.FC = () => {
  const [activeTab, setActiveTab] = useState('compliance')

  // 模拟企业合规数据
  const complianceData = {
    rate: 92,
    issues: 3,
    lastAudit: '2026-03-10',
    nextAudit: '2026-06-10'
  }

  // 模拟在线监测数据
  const monitoringData = {
    air: {
      pm25: 35,
      pm10: 65,
      so2: 8,
      no2: 25
    },
    water: {
      ph: 7.2,
      cod: 25,
      ammonia: 1.2
    }
  }

  // 模拟报告数据
  const reports = [
    { id: 1, type: '排污许可证执行报告', status: 'completed', date: '2026-03-01' },
    { id: 2, type: '自行监测报告', status: 'completed', date: '2026-02-15' },
    { id: 3, type: '环境统计报表', status: 'draft', date: '2026-03-15' },
    { id: 4, type: '碳排放报告', status: 'pending', date: '2026-03-20' },
  ]

  // 模拟风险预警数据
  const riskAlerts = [
    { id: 1, title: '废气排放接近阈值', level: 'medium', time: '2026-03-11 10:30' },
    { id: 2, title: '废水处理设施异常', level: 'high', time: '2026-03-10 15:45' },
    { id: 3, title: '噪声监测超标', level: 'low', time: '2026-03-09 08:20' },
  ]

  // 模拟绿色转型建议
  const greenTransformation = [
    { id: 1, title: '更换节能设备', saving: '15%', investment: '10万元', payback: '2年' },
    { id: 2, title: '优化生产工艺', saving: '20%', investment: '15万元', payback: '1.5年' },
    { id: 3, title: '安装太阳能发电', saving: '30%', investment: '50万元', payback: '5年' },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64 bg-gradient-to-r from-indigo-400 to-purple-500">
          <img 
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1200&h=400&fit=crop" 
            alt="企业服务平台" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-3xl font-bold text-white mb-2">企业服务平台</h2>
            <p className="text-white/90 text-sm">
              面向工业企业提供环境管理专业服务
            </p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600">
            包括环保合规咨询、在线监测管理、报告自动生成、风险预警提醒、绿色转型指导等功能。
          </p>
        </div>
      </div>

      {/* 标签页导航 */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('compliance')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'compliance' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              合规管理
            </button>
            <button
              onClick={() => setActiveTab('monitoring')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'monitoring' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              在线监测
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'reports' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              报告管理
            </button>
            <button
              onClick={() => setActiveTab('risk')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'risk' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              风险预警
            </button>
            <button
              onClick={() => setActiveTab('green')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'green' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              绿色转型
            </button>
          </nav>
        </div>

        {/* 标签页内容 */}
        <div className="p-6">
          {activeTab === 'compliance' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">环保合规管理</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium text-gray-700 mb-4">合规概览</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">合规率</span>
                        <span className="text-sm font-medium">{complianceData.rate}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: `${complianceData.rate}%` }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">待整改问题</span>
                      <span className="text-sm font-medium">{complianceData.issues}个</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">上次审核</span>
                      <span className="text-sm font-medium">{complianceData.lastAudit}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">下次审核</span>
                      <span className="text-sm font-medium">{complianceData.nextAudit}</span>
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium text-gray-700 mb-4">合规建议</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-500 mt-2"></div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-900">加强废气处理设施的日常维护</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-500 mt-2"></div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-900">完善环境应急预案</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-500 mt-2"></div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-900">定期开展环保培训</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-500 mt-2"></div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-900">规范环境监测数据记录</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'monitoring' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">在线监测管理</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium text-gray-700 mb-3">废气监测</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">PM2.5</span>
                      <span className="text-sm font-medium">{monitoringData.air.pm25} μg/m³</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">PM10</span>
                      <span className="text-sm font-medium">{monitoringData.air.pm10} μg/m³</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">SO₂</span>
                      <span className="text-sm font-medium">{monitoringData.air.so2} μg/m³</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">NO₂</span>
                      <span className="text-sm font-medium">{monitoringData.air.no2} μg/m³</span>
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium text-gray-700 mb-3">废水监测</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">pH值</span>
                      <span className="text-sm font-medium">{monitoringData.water.ph}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">COD</span>
                      <span className="text-sm font-medium">{monitoringData.water.cod} mg/L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">氨氮</span>
                      <span className="text-sm font-medium">{monitoringData.water.ammonia} mg/L</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="text-md font-medium text-gray-700 mb-3">监测趋势</h4>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-center">
                    <ActivityIcon className="mx-auto text-primary-600 mb-4" />
                    <p className="text-gray-600">监测数据趋势图表</p>
                    <p className="text-sm text-gray-500 mt-2">展示近7天监测数据变化趋势</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">报告管理</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        报告类型
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        状态
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        日期
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        操作
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {reports.map((report) => (
                      <tr key={report.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{report.type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${report.status === 'completed' ? 'bg-green-100 text-green-800' : report.status === 'draft' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                            {report.status === 'completed' ? '已完成' : report.status === 'draft' ? '草稿' : '待提交'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{report.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a href="#" className="text-primary-600 hover:text-primary-900 mr-3">
                            查看
                          </a>
                          <a href="#" className="text-primary-600 hover:text-primary-900">
                            编辑
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                  生成新报告
                </button>
              </div>
            </div>
          )}

          {activeTab === 'risk' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">风险预警提醒</h3>
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
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        操作
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {riskAlerts.map((alert) => (
                      <tr key={alert.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{alert.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${alert.level === 'high' ? 'bg-red-100 text-red-800' : alert.level === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                            {alert.level === 'high' ? '高' : alert.level === 'medium' ? '中' : '低'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{alert.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a href="#" className="text-primary-600 hover:text-primary-900">
                            处理
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'green' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">绿色转型指导</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {greenTransformation.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4">
                    <h4 className="text-md font-medium text-gray-700 mb-3">{item.title}</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">节能率</span>
                        <span className="text-sm font-medium text-green-600">{item.saving}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">投资金额</span>
                        <span className="text-sm font-medium">{item.investment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">回收期</span>
                        <span className="text-sm font-medium">{item.payback}</span>
                      </div>
                    </div>
                    <button className="mt-4 w-full px-3 py-2 bg-primary-600 text-white rounded-md text-sm hover:bg-primary-700 transition-colors">
                      查看详情
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EnterpriseService