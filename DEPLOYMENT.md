# 环保管家智慧平台部署和使用说明

## 项目简介

环保管家智慧平台是一个基于 React + TypeScript + Tailwind CSS 开发的环境管理系统，采用 "1+2+3+N" 总体架构体系，包括统一数据底座、园区服务平台、企业服务平台，以及合规保障、风险防控、双碳管理和降本增效等核心功能模块。

## 技术栈

- **前端框架**: React 18
- **开发语言**: TypeScript
- **状态管理**: Redux Toolkit
- **样式框架**: Tailwind CSS
- **路由管理**: React Router
- **数据可视化**: ECharts
- **3D 渲染**: Three.js
- **构建工具**: Vite

## 环境要求

- Node.js: v16.0.0 或更高版本
- npm: v7.0.0 或更高版本

## 安装步骤

1. **克隆项目**

   ```bash
   git clone <repository-url>
   cd eco-gateway-platform
   ```

2. **安装依赖**

   ```bash
   npm install
   ```

3. **运行开发服务器**

   ```bash
   npm run dev
   ```

   开发服务器启动后，可通过 http://localhost:5173 访问网站。

4. **构建生产版本**

   ```bash
   npm run build
   ```

   构建产物将生成在 `dist` 目录中。

5. **预览生产版本**

   ```bash
   npm run preview
   ```

## 项目结构

```
├── src/
│   ├── components/        # 通用组件
│   │   ├── Layout.tsx     # 主布局组件
│   │   └── EChartsComponent.tsx  # ECharts 图表组件
│   ├── features/          # Redux 状态管理
│   │   ├── carbon/        # 双碳管理相关状态
│   │   ├── compliance/    # 合规保障相关状态
│   │   ├── efficiency/    # 降本增效相关状态
│   │   ├── enterprise/    # 企业服务相关状态
│   │   ├── environment/   # 环境数据相关状态
│   │   └── risk/          # 风险防控相关状态
│   ├── pages/             # 页面组件
│   │   ├── Home.tsx       # 首页
│   │   ├── ParkService.tsx  # 园区服务平台
│   │   ├── EnterpriseService.tsx  # 企业服务平台
│   │   ├── Compliance.tsx  # 合规保障
│   │   ├── RiskControl.tsx  # 风险防控
│   │   ├── CarbonManagement.tsx  # 双碳管理
│   │   ├── CostReduction.tsx  # 降本增效
│   │   ├── DataCenter.tsx  # 数据中心
│   │   └── SystemManagement.tsx  # 系统管理
│   ├── App.tsx            # 应用入口组件
│   ├── main.tsx           # 应用启动文件
│   ├── store.ts           # Redux 存储配置
│   └── index.css          # 全局样式
├── public/                # 静态资源
├── index.html             # HTML 模板
├── package.json           # 项目配置和依赖
├── tailwind.config.js     # Tailwind CSS 配置
├── tsconfig.json          # TypeScript 配置
├── vite.config.ts         # Vite 配置
└── DEPLOYMENT.md          # 部署和使用说明
```

## 核心功能模块

### 1. 统一数据底座

- 整合大气、水、土壤、固废等平台监管数据
- 支持海量数据的实时采集、处理和分析

### 2. 园区服务平台

- 环境质量监控预警
- 污染源精细化管理
- 环境执法辅助
- 应急指挥调度

### 3. 企业服务平台

- 环保合规咨询
- 在线监测管理
- 报告自动生成
- 风险预警提醒
- 绿色转型指导

### 4. 合规保障

- 环境数据智能采集
- 污染源全生命周期管理
- 环保合规智能诊断
- 智能报告自动生成
- 非现场监管对接
- 可视化管理

### 5. 风险防控

- 环境风险预警
- 环境应急响应

### 6. 双碳管理

- 碳排放精准核算
- 减排路径优化
- 碳资产化管理

### 7. 降本增效

- 能耗优化
- 药剂精准投加
- 自动巡检

## 部署方式

### 1. 本地开发

按照上述安装步骤运行开发服务器即可。

### 2. 生产部署

1. **构建生产版本**

   ```bash
   npm run build
   ```

2. **部署到静态网站托管服务**

   将 `dist` 目录中的文件部署到任何静态网站托管服务，如：
   - GitHub Pages
   - Vercel
   - Netlify
   - AWS S3 + CloudFront

3. **部署到服务器**

   可以使用 Nginx 或 Apache 等 web 服务器托管静态文件：

   ```nginx
   server {
     listen 80;
     server_name example.com;
     root /path/to/dist;
     index index.html;
     
     location / {
       try_files $uri $uri/ /index.html;
     }
   }
   ```

## 注意事项

1. **环境变量**

   本项目目前使用模拟数据，实际部署时需要根据实际情况配置 API 接口地址等环境变量。

2. **性能优化**

   - 生产构建已启用代码分割和树摇优化
   - 图片和静态资源建议使用 CDN 加速

3. **浏览器兼容性**

   支持现代浏览器，包括 Chrome、Firefox、Safari 和 Edge 的最新版本。

4. **响应式设计**

   网站采用响应式设计，适配桌面、平板和移动设备。

## 开发指南

### 代码风格

- 使用 ESLint 和 Prettier 保持代码风格一致
- 遵循 TypeScript 类型规范
- 组件命名使用 PascalCase
- 变量和函数命名使用 camelCase

### 提交规范

- 使用 Conventional Commits 规范
- 提交信息格式：`<type>(<scope>): <description>`
- 常见类型：feat(新功能)、fix(修复)、docs(文档)、style(样式)、refactor(重构)、test(测试)、chore(构建/依赖)

### 测试

- 运行 lint 检查：`npm run lint`
- 运行类型检查：`npx tsc --noEmit`

## 故障排查

1. **依赖安装失败**

   - 检查 Node.js 和 npm 版本
   - 清除 npm 缓存：`npm cache clean --force`
   - 重新安装依赖：`npm install`

2. **开发服务器启动失败**

   - 检查端口是否被占用
   - 检查配置文件是否正确

3. **构建失败**

   - 检查 TypeScript 类型错误
   - 检查 ESLint 错误

4. **页面空白或错误**

   - 检查浏览器控制台错误信息
   - 检查网络请求是否正常
   - 检查 Redux 状态是否正确

## 联系与支持

如有任何问题或建议，请联系项目维护人员。

---

**© 2026 环保管家智慧平台**