export const InputTodo = (props) => {
  const {todoText, onChange, onClickdd} = props;
  return (
        <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
        <button onClick={onClickdd}>追加</button>
      </div>
  )
}
