import React, { useState } from 'react'

const SystemManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('users')

  // 模拟用户数据
  const users = [
    { id: 1, username: 'admin', name: '管理员', role: '系统管理员', status: 'active' },
    { id: 2, username: 'user1', name: '用户1', role: '园区管理员', status: 'active' },
    { id: 3, username: 'user2', name: '用户2', role: '企业用户', status: 'inactive' },
    { id: 4, username: 'user3', name: '用户3', role: '企业用户', status: 'active' },
  ]

  // 模拟角色数据
  const roles = [
    { id: 1, name: '系统管理员', permissions: ['全部权限'] },
    { id: 2, name: '园区管理员', permissions: ['园区管理', '企业管理', '数据查看'] },
    { id: 3, name: '企业用户', permissions: ['企业管理', '数据查看'] },
  ]

  // 模拟系统设置
  const systemSettings = [
    { id: 1, name: '系统名称', value: '环保管家智慧平台' },
    { id: 2, name: '数据备份频率', value: '每天' },
    { id: 3, name: '预警通知方式', value: '邮件,短信' },
    { id: 4, name: '系统语言', value: '中文' },
  ]

  // 模拟日志数据
  const logs = [
    { id: 1, user: 'admin', action: '登录系统', time: '2026-03-11 10:30' },
    { id: 2, user: 'user1', action: '查看企业数据', time: '2026-03-11 09:15' },
    { id: 3, user: 'admin', action: '修改系统设置', time: '2026-03-10 16:45' },
    { id: 4, user: 'user2', action: '生成报告', time: '2026-03-10 14:20' },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">系统管理</h2>
        <p className="text-gray-600">
          提供用户管理、角色管理、系统设置和日志管理功能，确保系统的安全运行。
        </p>
      </div>

      {/* 标签页导航 */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('users')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'users' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              用户管理
            </button>
            <button
              onClick={() => setActiveTab('roles')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'roles' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              角色管理
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'settings' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              系统设置
            </button>
            <button
              onClick={() => setActiveTab('logs')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'logs' ? 'border-b-2 border-primary-600 text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              日志管理
            </button>
          </nav>
        </div>

        {/* 标签页内容 */}
        <div className="p-6">
          {activeTab === 'users' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">用户管理</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        用户名
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        姓名
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        角色
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
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{user.username}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{user.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{user.role}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {user.status === 'active' ? '活跃' : '禁用'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a href="#" className="text-primary-600 hover:text-primary-900 mr-3">
                            编辑
                          </a>
                          <a href="#" className="text-primary-600 hover:text-primary-900">
                            删除
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                  添加用户
                </button>
              </div>
            </div>
          )}

          {activeTab === 'roles' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">角色管理</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        角色名称
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        权限
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        操作
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {roles.map((role) => (
                      <tr key={role.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{role.name}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">{role.permissions.join(', ')}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a href="#" className="text-primary-600 hover:text-primary-900 mr-3">
                            编辑
                          </a>
                          <a href="#" className="text-primary-600 hover:text-primary-900">
                            删除
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                  添加角色
                </button>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">系统设置</h3>
              <div className="space-y-4">
                {systemSettings.map((setting) => (
                  <div key={setting.id} className="flex items-center justify-between border-b pb-4">
                    <div className="text-sm font-medium text-gray-700">{setting.name}</div>
                    <div className="text-sm text-gray-900">{setting.value}</div>
                    <button className="text-primary-600 hover:text-primary-900 text-sm">
                      编辑
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                  保存设置
                </button>
              </div>
            </div>
          )}

          {activeTab === 'logs' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">日志管理</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        用户
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        操作
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        时间
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {logs.map((log) => (
                      <tr key={log.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{log.user}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{log.action}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{log.time}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                  导出日志
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SystemManagement