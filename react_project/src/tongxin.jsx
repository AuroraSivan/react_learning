import { useState } from 'react'
//子组件传递数据给父组件
function Detail({ onActive }) {
    const [status, setStatus] = useState(true)
    function handleClick(){
        setStatus(!status)
        onActive(status)
    }
    return (
        <div>
            <button onClick={handleClick}>button</button>
            <p style={{
                display:status?'block':'none'
            }}>Detail的内容</p>
        </div>
    )

}

//通过父组件给子组件一个自定义事件的设置，事件触发后向父组件传递参数
export default function Tongxin() {
    function handleActive(active){
        console.log('active', active)
    }
    return (
        <div>
            <h2>通信</h2>
            <Detail 
               onActive={handleActive}
            />
        </div>
    )
}

//同级属性使用父组件中转传值

//层级较多时使用props一级一级传非常麻烦，使用context钩子
