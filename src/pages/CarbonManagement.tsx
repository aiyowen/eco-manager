import React, { useState } from 'react'

// 简单的SVG图标组件
const BarChart3Icon = ({ className }: { className?: string }) => <svg className={className || "w-12 h-12"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>

const CarbonManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('accounting')

  // 模拟碳排放数据
  // const carbonEmissions = [
  //   { id: 1, month: '1月', scope1: 120, scope2: 80, scope3: 50, total: 250 },
  //   { id: 2, month: '2月', scope1: 115, scope2: 75, scope3: 45, total: 235 },
  //   { id: 3, month: '3月', scope1: 110, scope2: 70, scope3: 40, total: 220 },
  //   { id: 4, month: '4月', scope1: 105, scope2: 65, scope3: 35, total: 205 },
  //   { id: 5, month: '5月', scope1: 100, scope2: 60, scope3: 30, total: 190 },
  //   { id: 6, month: '6月', scope1: 95, scope2: 55, scope3: 25, total: 175 },
  // ]

  // 模拟减排方案
  const emissionReductionPlans = [
    { id: 1, name: '更换节能设备', reduction: 15, investment: 100000, payback: 24, status: 'recommended' },
    { id: 2, name: '优化生产工艺', reduction: 20, investment: 150000, payback: 18, status: 'recommended' },
    { id: 3, name: '安装太阳能发电', reduction: 30, investment: 500000, payback: 60, status: 'optional' },
    { id: 4, name: '实施绿色供应链', reduction: 10, investment: 50000, payback: 36, status: 'optional' },
  ]

  // 模拟碳资产数据
  const carbonAssets = [
    { id: 1, type: '碳配额', quantity: 1000, value: 50000, status: 'active' },
    { id: 2, type: 'CCER', quantity: 500, value: 25000, status: 'active' },
    { id: 3, type: '碳配额', quantity: 800, value: 40000, status: 'traded' },
    { id: 4, type: 'CCER', quantity: 300, value: 15000, status: 'retired' },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64 bg-gradient-to-r from-green-400 to-emerald-500">
          <img 
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=400&fit=crop" 
            alt="双碳管理" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-3xl font-bold text-white mb-2">双碳管理</h2>
            <p className="text-white/90 text-sm">
              提供碳排放精准核算、减排路径优化和碳资产化管理功能
            </p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600">
            帮助企业实现碳达峰碳中和目标。
          </p>
        </div>
      </div>

      {/* 标签页导航 */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('accounting')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'accounting' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              碳排放精准核算
            </button>
            <button
              onClick={() => setActiveTab('reduction')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'reduction' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              减排路径优化
            </button>
            <button
              onClick={() => setActiveTab('assets')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'assets' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              碳资产化管理
            </button>
          </nav>
        </div>

        {/* 标签页内容 */}
        <div className="p-6">
          {activeTab === 'accounting' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">碳排放精准核算</h3>
              <div className="border rounded-lg p-4">
                <h4 className="text-md font-medium text-gray-700 mb-4">碳排放趋势</h4>
                <div className="h-80 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3Icon className="mx-auto text-primary-600 mb-4" />
                    <p className="text-gray-600">碳排放趋势图表</p>
                    <p className="text-sm text-gray-500 mt-2">展示近6个月碳排放变化趋势</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium text-gray-700 mb-3">范围一排放</h4>
                  <div className="text-3xl font-bold text-primary-600">120</div>
                  <div className="text-sm text-gray-500 mt-1">吨 CO₂e</div>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium text-gray-700 mb-3">范围二排放</h4>
                  <div className="text-3xl font-bold text-primary-600">80</div>
                  <div className="text-sm text-gray-500 mt-1">吨 CO₂e</div>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium text-gray-700 mb-3">范围三排放</h4>
                  <div className="text-3xl font-bold text-primary-600">50</div>
                  <div className="text-sm text-gray-500 mt-1">吨 CO₂e</div>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                  生成碳足迹报告
                </button>
              </div>
            </div>
          )}

          {activeTab === 'reduction' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">减排路径优化</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        方案名称
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        减排量 (吨 CO₂e)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        投资金额 (元)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        回收期 (月)
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
                    {emissionReductionPlans.map((plan) => (
                      <tr key={plan.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{plan.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{plan.reduction}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{plan.investment.toLocaleString()}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{plan.payback}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${plan.status === 'recommended' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                            {plan.status === 'recommended' ? '推荐' : '可选'}
                          </span>
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

          {activeTab === 'assets' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">碳资产化管理</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        资产类型
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        数量 (吨 CO₂e)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        价值 (元)
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
                    {carbonAssets.map((asset) => (
                      <tr key={asset.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{asset.type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{asset.quantity}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{asset.value.toLocaleString()}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${asset.status === 'active' ? 'bg-green-100 text-green-800' : asset.status === 'traded' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                            {asset.status === 'active' ? '活跃' : asset.status === 'traded' ? '已交易' : '已注销'}
                          </span>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium text-gray-700 mb-3">总碳资产价值</h4>
                  <div className="text-3xl font-bold text-primary-600">130,000</div>
                  <div className="text-sm text-gray-500 mt-1">元</div>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium text-gray-700 mb-3">活跃碳资产</h4>
                  <div className="text-3xl font-bold text-primary-600">1,500</div>
                  <div className="text-sm text-gray-500 mt-1">吨 CO₂e</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CarbonManagement