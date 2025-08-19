构建：
### 方法一：使用 Create React App（官方推荐，零配置）
Create React App 是 Facebook 维护的官方工具，能快速生成配置完善的 React 项目。

1. **确保安装了 Node.js**  
   首先检查是否安装 Node.js（需要 v14.0.0 或更高版本）：
   node -v  # 查看 Node 版本
   npm -v   # 查看 npm 版本
   若未安装，从 [Node.js 官网](https://nodejs.org/) 下载安装。

2. **创建 React 项目**  
   运行以下命令（将 `my-react-app` 替换为你的项目名）：
   npx create-react-app my-react-app
   - `npx` 是 npm 5.2+ 自带的工具，会临时安装 `create-react-app` 并执行，无需全局安装
   - 项目名需使用小写字母，可包含连字符（如 `my-first-app`）

3. **进入项目并启动开发服务器**
   cd my-react-app   # 进入项目目录
   npm start         # 启动开发服务器（默认端口 3000）
   启动后，浏览器会自动打开 `http://localhost:3000`，显示 React 初始页面。


### 方法二：使用 Vite（更快的构建工具）
Vite 是新一代前端构建工具，比 Create React App 启动更快、热更新更高效，推荐用于现代 React 项目。

1. **创建 Vite 项目**  
   运行以下命令，按提示选择 React 模板：
   npm create vite@latest
   

2. **按交互提示操作**：
   - 输入项目名称（如 `my-vite-react`）
   - 选择框架：`React`
   - 选择变体：`React`（默认，使用 JavaScript）或 `React + TypeScript`（如需 TypeScript）

3. **进入项目并安装依赖**
   ```bash
   cd my-vite-react   # 进入项目目录
   npm install        # 安装依赖
   ```

4. **启动开发服务器**
   npm run dev   # 启动 Vite 开发服务器（默认端口 5173）