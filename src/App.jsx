import { useState } from "react"
import "./styles.css"

export const App = () => {

  const [incomplete, setIncomplete] = useState(["aaaa", "bbbb"]);
  const [complete, setComplete] = useState(["cccc"]);

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incomplete.map((todo) => {
            return (
           <div key={todo} className="list-row">
            <li className="task">{todo}</li>
            <button>完了</button>
            <button>削除</button>
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