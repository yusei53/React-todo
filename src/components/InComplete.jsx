export const InCompleteTodo = (props) => {  
const {todo, onClickComplete, onclickDelete} = props
    return (    
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {todo.map((todo, index) => {
            return (
           <div key={todo} className="list-row">
            <li className="task">{todo}</li>
            <button onClick={ () => onClickComplete(index)}>完了</button>
            <button onClick={ () => onclickDelete(index)}>削除</button>
          </div>             
            )
          })}
        </ul>
      </div>
    )
}