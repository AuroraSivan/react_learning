//组件写法的路由
import App from '../App'
import Home from '../views/Home'
import About from '../views/About'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
//两种路由模式的组件：BrowserRouter（History模式）和 HashRouter（哈希模式

const baseRouter = () => (
    //方法里没有其他操作，省略return
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
            {/*配置用户访问/ 的时候，重定向到/home路径*/}
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter
