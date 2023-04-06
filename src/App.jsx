import { useState } from "react"
import "./styles.css"

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomplete, setIncomplete] = useState(["aaaa", "bbbb"]);
  const [complete, setComplete] = useState(["cccc"]);

  const onChangeTodo = (event) => setTodoText(event.target.value);

  const onClickdd = () => {
    if (todoText === "") return;
    const newTodo = [...incomplete, todoText];
    setIncomplete(newTodo);
    setTodoText("");
  }

  const onclickDelete = (index) => {
    const newTodo = [...incomplete];
    newTodo.splice(index, 1);
    setIncomplete(newTodo);
  }

  const onClickComplete = (index) => {
    const newInCompleteTodo = [...incomplete];
    newInCompleteTodo.splice(index, 1); 

    const newCompleteTodo = [...complete, incomplete[index]];
    setIncomplete(newInCompleteTodo);
    setComplete(newCompleteTodo);
  }

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodo} />
        <button onClick={onClickdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incomplete.map((todo, index) => {
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
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {complete.map((todo) => {
            return (
          <div key = {todo} className="list-row">
            <li className="task">{todo}</li>
            <button>戻す</button>
          </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}