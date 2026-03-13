import React, { useState } from 'react'

// 简单的SVG图标组件
const ActivityIcon = ({ className }: { className?: string }) => <svg className={className || "w-12 h-12"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>

const CostReduction: React.FC = () => {
  const [activeTab, setActiveTab] = useState('energy')

  // 模拟能耗数据
  // const energyConsumption = [
  //   { id: 1, month: '1月', consumption: 12000, cost: 8400, savings: 0 },
  //   { id: 2, month: '2月', consumption: 11500, cost: 8050, savings: 350 },
  //   { id: 3, month: '3月', consumption: 11000, cost: 7700, savings: 700 },
  //   { id: 4, month: '4月', consumption: 10500, cost: 7350, savings: 1050 },
  //   { id: 5, month: '5月', consumption: 10000, cost: 7000, savings: 1400 },
  //   { id: 6, month: '6月', consumption: 9500, cost: 6650, savings: 1750 },
  // ]

  // 模拟药剂投加数据
  const chemicalDosage = [
    { id: 1, date: '2026-03-11', type: 'PAC', dosage: 50, optimized: 40, saving: 20 },
    { id: 2, date: '2026-03-10', type: 'PAM', dosage: 10, optimized: 8, saving: 20 },
    { id: 3, date: '2026-03-09', type: 'PAC', dosage: 48, optimized: 38, saving: 21 },
    { id: 4, date: '2026-03-08', type: 'PAM', dosage: 12, optimized: 9, saving: 25 },
  ]

  // 模拟巡检任务数据
  const inspectionTasks = [
    { id: 1, type: '无人机巡检', status: 'completed', scheduledAt: '2026-03-11 10:00', completedAt: '2026-03-11 10:30', result: '正常' },
    { id: 2, type: '电子狗巡检', status: 'in_progress', scheduledAt: '2026-03-11 09:00', completedAt: null, result: null },
    { id: 3, type: '无人机巡检', status: 'scheduled', scheduledAt: '2026-03-12 10:00', completedAt: null, result: null },
    { id: 4, type: '电子狗巡检', status: 'failed', scheduledAt: '2026-03-10 09:00', completedAt: '2026-03-10 09:15', result: '设备故障' },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64 bg-gradient-to-r from-yellow-400 to-amber-500">
          <img 
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=400&fit=crop" 
            alt="降本增效" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-3xl font-bold text-white mb-2">降本增效</h2>
            <p className="text-white/90 text-sm">
              提供能耗优化、药剂精准投加和自动巡检功能
            </p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600">
            帮助企业降低环保设施运行成本，提高运行效率。
          </p>
        </div>
      </div>

      {/* 标签页导航 */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('energy')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'energy' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              能耗优化
            </button>
            <button
              onClick={() => setActiveTab('chemical')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'chemical' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              药剂精准投加
            </button>
            <button
              onClick={() => setActiveTab('inspection')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'inspection' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              自动巡检
            </button>
          </nav>
        </div>

        {/* 标签页内容 */}
        <div className="p-6">
          {activeTab === 'energy' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">能耗优化</h3>
              <div className="border rounded-lg p-4">
                <h4 className="text-md font-medium text-gray-700 mb-4">能耗趋势</h4>
                <div className="h-80 flex items-center justify-center">
                  <div className="text-center">
                    <ActivityIcon className="mx-auto text-primary-600 mb-4" />
                    <p className="text-gray-600">能耗趋势图表</p>
                    <p className="text-sm text-gray-500 mt-2">展示近6个月能耗变化趋势</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium text-gray-700 mb-3">本月能耗</h4>
                  <div className="text-3xl font-bold text-primary-600">9,500</div>
                  <div className="text-sm text-gray-500 mt-1">kWh</div>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium text-gray-700 mb-3">本月成本</h4>
                  <div className="text-3xl font-bold text-primary-600">6,650</div>
                  <div className="text-sm text-gray-500 mt-1">元</div>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium text-gray-700 mb-3">累计 savings</h4>
                  <div className="text-3xl font-bold text-green-600">1,750</div>
                  <div className="text-sm text-gray-500 mt-1">元</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'chemical' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">药剂精准投加</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        日期
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        药剂类型
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        传统投加量 (kg)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        优化投加量 (kg)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        节约率
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {chemicalDosage.map((dosage) => (
                      <tr key={dosage.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{dosage.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{dosage.type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{dosage.dosage}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{dosage.optimized}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-green-600 font-medium">{dosage.saving}%</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium text-gray-700 mb-3">本月药剂成本</h4>
                  <div className="text-3xl font-bold text-primary-600">8,500</div>
                  <div className="text-sm text-gray-500 mt-1">元</div>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium text-gray-700 mb-3">本月节约成本</h4>
                  <div className="text-3xl font-bold text-green-600">1,700</div>
                  <div className="text-sm text-gray-500 mt-1">元</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'inspection' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">自动巡检</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        巡检类型
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        状态
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        计划时间
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        完成时间
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
                    {inspectionTasks.map((task) => (
                      <tr key={task.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{task.type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${task.status === 'completed' ? 'bg-green-100 text-green-800' : task.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' : task.status === 'scheduled' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                            {task.status === 'completed' ? '已完成' : task.status === 'in_progress' ? '进行中' : task.status === 'scheduled' ? '已计划' : '失败'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{task.scheduledAt}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{task.completedAt || '-'}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{task.result || '-'}</div>
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
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                  新增巡检任务
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CostReduction