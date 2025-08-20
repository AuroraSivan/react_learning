//import "./comp1.scss"//全局引入，会污染样式，影响其他组件
//scss模块化引入
import styles from "./comp1.module.scss"

function Comp1(){
    return (
        <div className={styles.box}>
            <p>这是Comp1里面的内容</p>
        </div>
    )
}

export default Comp1