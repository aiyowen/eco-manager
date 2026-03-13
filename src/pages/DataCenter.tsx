import React, { useState } from 'react'

// 简单的SVG图标组件
const BarChart3Icon = ({ className }: { className?: string }) => <svg className={className || "w-12 h-12"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
const DownloadIcon = ({ className }: { className?: string }) => <svg className={className || "w-4 h-4"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>

const DataCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')

  // 模拟数据概览
  const dataOverview = {
    totalEnterprises: 150,
    totalMonitoringPoints: 500,
    totalDataPoints: 1000000,
    totalAlerts: 25,
  }

  // 模拟数据分析
  const dataAnalysis = [
    { id: 1, category: '大气污染', count: 120, percentage: 40 },
    { id: 2, category: '水污染', count: 90, percentage: 30 },
    { id: 3, category: '土壤污染', count: 60, percentage: 20 },
    { id: 4, category: '噪声污染', count: 30, percentage: 10 },
  ]

  // 模拟数据报表
  const dataReports = [
    { id: 1, name: '环境质量月报', date: '2026-03-01', status: 'completed' },
    { id: 2, name: '污染源排放年报', date: '2026-02-15', status: 'completed' },
    { id: 3, name: '环境风险评估报告', date: '2026-03-15', status: 'draft' },
    { id: 4, name: '碳排放报告', date: '2026-03-20', status: 'pending' },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64 bg-gradient-to-r from-cyan-400 to-blue-500">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop" 
            alt="数据中心" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-3xl font-bold text-white mb-2">数据中心</h2>
            <p className="text-white/90 text-sm">
              提供环境数据的统一管理和分析功能
            </p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600">
            包括数据概览、数据分析、数据报表和数据导出。
          </p>
        </div>
      </div>

      {/* 标签页导航 */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'overview' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              数据概览
            </button>
            <button
              onClick={() => setActiveTab('analysis')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'analysis' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              数据分析
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'reports' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              数据报表
            </button>
            <button
              onClick={() => setActiveTab('export')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'export' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              数据导出
            </button>
          </nav>
        </div>

        {/* 标签页内容 */}
        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">数据概览</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium text-gray-700 mb-3">企业数量</h4>
                  <div className="text-3xl font-bold text-primary-600">{dataOverview.totalEnterprises}</div>
                  <div className="text-sm text-gray-500 mt-1">家</div>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium text-gray-700 mb-3">监测点位</h4>
                  <div className="text-3xl font-bold text-primary-600">{dataOverview.totalMonitoringPoints}</div>
                  <div className="text-sm text-gray-500 mt-1">个</div>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium text-gray-700 mb-3">数据点数</h4>
                  <div className="text-3xl font-bold text-primary-600">{dataOverview.totalDataPoints.toLocaleString()}</div>
                  <div className="text-sm text-gray-500 mt-1">条</div>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium text-gray-700 mb-3">预警数量</h4>
                  <div className="text-3xl font-bold text-primary-600">{dataOverview.totalAlerts}</div>
                  <div className="text-sm text-gray-500 mt-1">条</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analysis' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">数据分析</h3>
              <div className="border rounded-lg p-4">
                <h4 className="text-md font-medium text-gray-700 mb-4">污染类型分布</h4>
                <div className="h-80 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3Icon className="mx-auto text-primary-600 mb-4" />
                    <p className="text-gray-600">污染类型分布图表</p>
                    <p className="text-sm text-gray-500 mt-2">展示不同污染类型的分布情况</p>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        污染类型
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        数量
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        占比
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {dataAnalysis.map((item) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{item.category}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{item.count}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{item.percentage}%</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">数据报表</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        报表名称
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        生成日期
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        状态
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        操作
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {dataReports.map((report) => (
                      <tr key={report.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{report.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{report.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${report.status === 'completed' ? 'bg-green-100 text-green-800' : report.status === 'draft' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                            {report.status === 'completed' ? '已完成' : report.status === 'draft' ? '草稿' : '待提交'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a href="#" className="text-primary-600 hover:text-primary-900 mr-3">
                            查看
                          </a>
                          <a href="#" className="text-primary-600 hover:text-primary-900">
                            下载
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'export' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">数据导出</h3>
              <div className="border rounded-lg p-6">
                <h4 className="text-md font-medium text-gray-700 mb-4">导出选项</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">数据类型</label>
                    <select className="w-full border rounded-md p-2">
                      <option>环境质量数据</option>
                      <option>污染源数据</option>
                      <option>预警数据</option>
                      <option>企业数据</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">时间范围</label>
                    <div className="flex space-x-4">
                      <input type="date" className="border rounded-md p-2" />
                      <input type="date" className="border rounded-md p-2" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">导出格式</label>
                    <select className="w-full border rounded-md p-2">
                      <option>Excel (.xlsx)</option>
                      <option>CSV (.csv)</option>
                      <option>PDF (.pdf)</option>
                      <option>JSON (.json)</option>
                    </select>
                  </div>
                  <div className="flex justify-end">
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors flex items-center">
                      <DownloadIcon className="mr-2" />
                      导出数据
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DataCenter