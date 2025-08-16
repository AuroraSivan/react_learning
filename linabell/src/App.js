import logo from './logo.svg';
import './App.css';

//将js语法和html语法混合在一起的语法叫做jsx语法
//jsx语法最终会被编译成纯js语法
//jsx只能返回一个根元素，多个需要用<div>包裹或者用<></>空标签包裹
function App() {//函数式组件
  const divContent = "Hello React"
  const title = "This is a title"

  //条件渲染
  const flag = true
  if(flag){
    
  }

  return (
    <div title = {title}>{divContent}</div>//插值语法
  );
}

export default App;
