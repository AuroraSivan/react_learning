//对象形式的路由,路由表写法
//路由懒加载
import React, { lazy, type JSX } from 'react'
import { Navigate } from 'react-router-dom'
import Home from '../views/Home'
//import About from '../views/About'

const About = lazy(() => import('../views/About'))

//懒加载模式需要添加loading组件
const withLoadingComponent = (comp:JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)
const routes = [
    {
        path:"/",
        element:<Navigate to="/home" replace /> //重定向到/home
    },
    {
        path:"/home",
        element:<Home />
    },
    {
        path:"/about",
        element:withLoadingComponent(<About />) //懒加载组件
    }
]

export default routes
