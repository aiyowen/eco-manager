import React, { useState } from 'react'

const RiskControl: React.FC = () => {
  const [activeTab, setActiveTab] = useState('alert')

  // 模拟风险预警数据
  const alerts = [
    { id: 1, title: '某化工厂废气排放超标', level: 'high', status: 'active', time: '2026-03-11 10:30', enterprise: '某化工厂' },
    { id: 2, title: '某园区水质异常', level: 'medium', status: 'processed', time: '2026-03-11 09:15', enterprise: '某污水处理厂' },
    { id: 3, title: '某企业噪声超标', level: 'low', status: 'resolved', time: '2026-03-10 16:45', enterprise: '某钢铁厂' },
    { id: 4, title: '某制药厂废水排放异常', level: 'high', status: 'active', time: '2026-03-10 14:20', enterprise: '某制药厂' },
  ]

  // 模拟应急响应数据
  const emergencyResponses = [
    { id: 1, alertId: 1, title: '某化工厂废气泄漏', status: 'in_progress', startTime: '2026-03-11 10:35', estimatedEndTime: '2026-03-11 12:00' },
    { id: 2, alertId: 2, title: '某园区水质异常', status: 'completed', startTime: '2026-03-11 09:20', estimatedEndTime: '2026-03-11 10:00', actualEndTime: '2026-03-11 09:55' },
    { id: 3, alertId: 4, title: '某制药厂废水排放异常', status: 'pending', startTime: null, estimatedEndTime: null },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">风险防控</h2>
        <p className="text-gray-600">
          提供环境风险预警和环境应急响应功能，建立分级分类的预警指标体系，
          实现环境风险的及时预警和应急响应的快速处置。
        </p>
      </div>

      {/* 标签页导航 */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('alert')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'alert' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              环境风险预警
            </button>
            <button
              onClick={() => setActiveTab('emergency')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'emergency' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              环境应急响应
            </button>
          </nav>
        </div>

        {/* 标签页内容 */}
        <div className="p-6">
          {activeTab === 'alert' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">环境风险预警</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        预警内容
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        企业名称
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
                    {alerts.map((alert) => (
                      <tr key={alert.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{alert.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{alert.enterprise}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${alert.level === 'high' ? 'bg-red-100 text-red-800' : alert.level === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                            {alert.level === 'high' ? '高' : alert.level === 'medium' ? '中' : '低'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${alert.status === 'active' ? 'bg-red-100 text-red-800' : alert.status === 'processed' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                            {alert.status === 'active' ? '活跃' : alert.status === 'processed' ? '处理中' : '已解决'}
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

          {activeTab === 'emergency' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">环境应急响应</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        事件名称
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        状态
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        开始时间
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        预计结束时间
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        实际结束时间
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        操作
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {emergencyResponses.map((response) => (
                      <tr key={response.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{response.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${response.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' : response.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {response.status === 'in_progress' ? '处理中' : response.status === 'completed' ? '已完成' : '待处理'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{response.startTime || '-'}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{response.estimatedEndTime || '-'}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{response.actualEndTime || '-'}</div>
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
        </div>
      </div>
    </div>
  )
}

export default RiskControl