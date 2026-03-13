import React, { useState } from 'react'

// 简单的SVG图标组件
const MonitorIcon = ({ className }: { className?: string }) => <svg className={className || "w-12 h-12"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
const MapIcon = ({ className }: { className?: string }) => <svg className={className || "w-12 h-12"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>

const Compliance: React.FC = () => {
  const [activeTab, setActiveTab] = useState('data-collection')

  // 模拟环境数据采集设备
  const collectionDevices = [
    { id: 1, type: '空气质量监测站', location: '园区入口', status: 'online', lastData: '2026-03-11 10:30' },
    { id: 2, type: '水质监测站', location: '园区河流', status: 'online', lastData: '2026-03-11 10:15' },
    { id: 3, type: '噪声监测站', location: '园区边界', status: 'offline', lastData: '2026-03-11 09:45' },
    { id: 4, type: '无人机监测', location: '园区上空', status: 'online', lastData: '2026-03-11 10:00' },
  ]

  // 模拟企业档案
  const enterpriseProfiles = [
    { id: 1, name: '某化工厂', status: 'normal', compliance: 92 },
    { id: 2, name: '某污水处理厂', status: 'warning', compliance: 78 },
    { id: 3, name: '某钢铁厂', status: 'normal', compliance: 85 },
    { id: 4, name: '某制药厂', status: 'danger', compliance: 65 },
  ]

  // 模拟合规诊断结果
  const complianceDiagnosis = [
    { id: 1, enterprise: '某化工厂', issue: '废气处理设施维护记录不完整', severity: 'medium', suggestion: '完善维护记录' },
    { id: 2, enterprise: '某污水处理厂', issue: 'COD排放接近阈值', severity: 'high', suggestion: '优化处理工艺' },
    { id: 3, enterprise: '某制药厂', issue: '应急预案未更新', severity: 'low', suggestion: '更新应急预案' },
  ]

  // 模拟报告模板
  const reportTemplates = [
    { id: 1, name: '排污许可证执行报告', status: 'active' },
    { id: 2, name: '自行监测报告', status: 'active' },
    { id: 3, name: '环境统计报表', status: 'active' },
    { id: 4, name: '碳排放报告', status: 'active' },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64 bg-gradient-to-r from-emerald-400 to-teal-500">
          <img 
            src="https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=1200&h=400&fit=crop" 
            alt="合规保障" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-3xl font-bold text-white mb-2">合规保障</h2>
            <p className="text-white/90 text-sm">
              提供环境数据智能采集、污染源全生命周期管理等功能
            </p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600">
            包括环保合规智能诊断、智能报告自动生成、非现场监管对接和可视化管理等功能，确保企业环保合规。
          </p>
        </div>
      </div>

      {/* 标签页导航 */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab('data-collection')}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'data-collection' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              环境数据智能采集
            </button>
            <button
              onClick={() => setActiveTab('lifecycle')}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'lifecycle' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              污染源全生命周期管理
            </button>
            <button
              onClick={() => setActiveTab('diagnosis')}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'diagnosis' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              环保合规智能诊断
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'reports' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              智能报告自动生成
            </button>
            <button
              onClick={() => setActiveTab('offsite')}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'offsite' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              非现场监管对接
            </button>
            <button
              onClick={() => setActiveTab('visualization')}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'visualization' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              可视化管理
            </button>
          </nav>
        </div>

        {/* 标签页内容 */}
        <div className="p-6">
          {activeTab === 'data-collection' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">环境数据智能采集</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        设备类型
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        位置
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        状态
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        最后数据时间
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        操作
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {collectionDevices.map((device) => (
                      <tr key={device.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{device.type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{device.location}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${device.status === 'online' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {device.status === 'online' ? '在线' : '离线'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{device.lastData}</div>
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

          {activeTab === 'lifecycle' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">污染源全生命周期管理</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {enterpriseProfiles.map((enterprise) => (
                  <div key={enterprise.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-md font-medium text-gray-700">{enterprise.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${enterprise.status === 'normal' ? 'bg-green-100 text-green-800' : enterprise.status === 'warning' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                        {enterprise.status === 'normal' ? '正常' : enterprise.status === 'warning' ? '预警' : '超标'}
                      </span>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">合规率</span>
                        <span className="text-sm font-medium">{enterprise.compliance}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: `${enterprise.compliance}%` }}></div>
                      </div>
                    </div>
                    <button className="w-full px-3 py-2 bg-primary-600 text-white rounded-md text-sm hover:bg-primary-700 transition-colors">
                      查看详情
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'diagnosis' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">环保合规智能诊断</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        企业名称
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        问题描述
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        严重程度
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        建议措施
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        操作
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {complianceDiagnosis.map((diagnosis) => (
                      <tr key={diagnosis.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{diagnosis.enterprise}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">{diagnosis.issue}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${diagnosis.severity === 'high' ? 'bg-red-100 text-red-800' : diagnosis.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                            {diagnosis.severity === 'high' ? '高' : diagnosis.severity === 'medium' ? '中' : '低'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">{diagnosis.suggestion}</div>
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

          {activeTab === 'reports' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">智能报告自动生成</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reportTemplates.map((template) => (
                  <div key={template.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-md font-medium text-gray-700">{template.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800`}>
                        {template.status === 'active' ? '可用' : '不可用'}
                      </span>
                    </div>
                    <button className="w-full px-3 py-2 bg-primary-600 text-white rounded-md text-sm hover:bg-primary-700 transition-colors">
                      生成报告
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'offsite' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">非现场监管对接</h3>
              <div className="border rounded-lg p-6">
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                  <MonitorIcon className="mx-auto text-primary-600 mb-4" />
                  <p className="text-gray-600">政府监管平台对接</p>
                  <p className="text-sm text-gray-500 mt-2">实时同步监管数据，减少现场检查频次</p>
                </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'visualization' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">可视化管理</h3>
              <div className="border rounded-lg p-6">
                <div className="flex items-center justify-center h-96">
                  <div className="text-center">
                  <MapIcon className="mx-auto text-primary-600 mb-4" />
                  <p className="text-gray-600">3D地图可视化</p>
                  <p className="text-sm text-gray-500 mt-2">通过数字孪生技术实现"一屏统览"</p>
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

export default Compliance