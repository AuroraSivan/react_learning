import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';

//将js语法和html语法混合在一起的语法叫做jsx语法
//jsx语法最终会被编译成纯js语法
//jsx只能返回一个根元素，多个需要用<div>包裹或者用<></>空标签包裹
function App() {//函数式组件
  const divContent = "Hello React"
  const title = "This is a title"

  //条件渲染
  const flag = true
  let content = ''
  if(flag){
    content = <h1>这是一个标题</h1>
  }else{
    content = <h2>这是一个副标题</h2>
  }

  //列表渲染
  //使用map方法遍历数组，返回一个新的数组
  //每个元素需要有一个唯一的key属性
  //如果没有唯一的key，可以使用索引index作为key，但不推荐
  //推荐使用id等唯一标识符作为key
  //注意：key属性不会被传递给组件，只是用于React内部的优化
  const driver = [
    {id:1, name: 'lec'},
    {id:2, name: 'max'},
    {id:3, name: 'pia'}
  ]

  const listContent = driver.map(item => (
    <Fragment key={item.id}>
      {/* jsx只能存在一个根元素，存在多个根标签使用Fragment包裹多个元素,key属性确保唯一性 */}
      <li>{item.name}</li>
      <li>------------</li>
    </Fragment>
  ))

  //使用useState钩子函数定义状态变量
  //useState钩子函数返回一个数组，第一个元素是状态变量，第二个元素是修改状态变量的函数
  //可以使用解构赋值获取这两个元素
  const [sentence,setSentence] = useState('标签默认内容'); 
  //事件处理
  //事件处理函数可以直接在标签上使用onClick等属性绑定
  //事件处理函数可以是一个函数，也可以是一个箭头函数
  //如果需要传递参数，可以使用箭头函数或者bind方法
  function handleClick() {
    setSentence('标签内容已被修改') //修改状态变量
  }

  const [data, setData] = useState({
    title: '默认标题',
    content: '默认内容'
  })
  
  function handleDataChange() {
    setData({//setData是直接替换data对象，如果属性较多，比较麻烦
      ...data,//展开操作把原有属性
      title: '新标题'//这样其他不会被修改，只会更改title属性
    })
  }

  const [list,setList] = useState([
    {id: 1, name: 'linabell'},
    {id: 2, name: 'cookiean'},
    {id: 3, name: 'duffy'}
  ])

  const listItems = list.map(item => (
    <li key={item.id}>{item.name}</li>
  ))

  let id = 3
  function handleListChange() {
    /*setList([
      ...list, //展开操作符，保留原有列表
      {id: ++id, name: 'olu'} //添加新项
    ])*/
   setList(list.filter(item => item.id !== 2).concat({id: ++id, name: 'olu'})) //过滤掉id为2的项，然后添加新项
  }
  return (
    <>
    <div title = {data.title}>
      {data.content}
    </div>

    <button onClick={handleDataChange}>修改数据</button>

    <ul>{listContent}</ul>

    <div>{sentence}</div>
    <button onClick={handleClick}>点击我</button>

    <ul>{listItems}</ul>
    <button onClick={handleListChange}>添加新项</button>
    </>
    
  );
}

export default App;
