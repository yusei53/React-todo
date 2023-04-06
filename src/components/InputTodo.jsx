const style = { 
    backgroundColor: "lightblue",
    width: "700px",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "10px",
    alignItems: "center"
}

export const InputTodo = (props) => {
  const {todoText, onChange, onClickdd} = props;
  return (
        <div style={style}>
        <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
        <button onClick={onClickdd}>追加</button>
      </div>
  )
}
