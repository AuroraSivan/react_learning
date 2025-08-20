import { useState } from 'react'
import {Button} from 'antd'
import {UpCircleOutlined} from '@ant-design/icons'
import{ Outlet, useRoutes, Link } from 'react-router-dom'
import routes from './router'

function App() {
  const outlet = useRoutes(routes)
  return (
    <>
    {/*使用标签进行跳转*/}
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      {/*<div>顶级组件</div>
      <br />
      <Button type="primary">our button</Button>
      <br />
      <UpCircleOutlined style={{fontSize:'40px', color:'blue'}}/>*/}
      {/*占位符组件，类似于窗口，用来展示组件，像vue中的router-vue*/}
      {/*<Outlet></Outlet>*/}
      {outlet}
    </>
  )
}

export default App
