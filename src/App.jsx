import { useState } from "react"
import "./styles.css"
import {InputTodo} from "./components/InputTodo"
import {InCompleteTodo} from "./components/InComplete"
import { CompleteTodo } from "./components/Complete"

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

  const onClickBack = (index) => {
    const newCompleteTodo = [...complete];
    newCompleteTodo.splice(index, 1);

    const newInCompleteTodo = [...incomplete, complete[index]];
    setComplete(newCompleteTodo);
    setIncomplete(newInCompleteTodo);
  }

  return (
    <>
    <html lang="ja">
    <InputTodo todoText={todoText} onChange={onChangeTodo} onClickdd={onClickdd} disabled = {incomplete.length >= 5}/>
    {incomplete.length >= 5 && (<p style={{color: "red"}}>登録できるtodoは5個までだぞ。。消化していけ〜。。</p>)}
    <InCompleteTodo todo={incomplete} onClickComplete={onClickComplete} onclickDelete={onclickDelete}/>
    <CompleteTodo todo={complete} onClickBack={onClickBack}/>
      </html>
    </>
  )
}