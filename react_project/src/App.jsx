import reactLogo from './assets/react.svg'
import './App.css'

function Detail({ content, active }) {
  return (
    <div>
      <h2>文章详情</h2>
      <p>{content}</p>
      <p> 状态：{active?'on':'off'}</p>
    </div>
  )
}
//1.请求功能所需的数据
//2.创建Article组件
//3.将文章的数据分别传递给Article，针对不同文章相应展示
function Article(props) {
  //App组件中使用了Article组件，是父组件，传递了title和content属性
  return (
    <article>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </article>
  )
}

//解构props对象，直接拿到title和content属性,想拿某个属性就写某个
function Article2({ title, content, active }) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>state:{active?'显示中':'已隐藏'}</p>
    </article>
  )
}

function Article3({ title, detailData }) {
  return (
    <div>
      <h2>{title}</h2>
      <Detail {...detailData}/>
    </div>
  )
}

function App() {
//组件分为dom组件和react组件
//dom组件是react支持的html和svg标签，eg. <div>, <span>, <svg>
//react组件是用户自定义的组件，eg. <MyComponent />
//react组件可以嵌套dom组件和其他react组件

  const imgStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%'
  }
  
  const imgData = {
    className: 'small',
    style: imgStyle
  }

  const articleData = {
    title: '文章标题',
    detailData:{
      content: '这是文章内容',
      active:true
    }
  }

  return (
    <>
      <img 
        src="https://react.dev/logo-og.png" 
        alt="React Logo"
        {...imgData}//支持展开语法，拿到需要设置的值然后传递给img标签，下面可以省略
        className="small"
        style={imgStyle}
        /*style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%'
        }} */
      />
      <Article
        title="标签1"
        content="这是文章1的内容"
        active={true} //传递一个布尔值，默认是true
      />
      <Article3 
        {...articleData}
      />
    </>
  )
}

export default App
