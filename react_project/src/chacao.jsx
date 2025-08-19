function List({ children, title, footer }) {
    //其他内容仍然用props就可以
    return (
        <>
        <h2>{title}</h2>
        <ul>
            {children}
        </ul>
        <footer>{footer}</footer>
        </>
        
    )
}

export default function Chacao(){
    return (
        <>
        <List
            title="list1"
            footer={<p>列表1的底部</p>}
        >
            <li>列表项1</li>
            <li>列表项1</li>
        </List>
        <List title="list2">
            <li>列表项2</li>
            <li>列表项2</li>
        </List>
        </>
    )
}