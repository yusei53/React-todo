const style = { 
    backgroundColor: "lightblue",
    width: "700px",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "10px",
    alignItems: "center"
}

export const InputTodo = (props) => {
  const {todoText, onChange, onClickdd, disabled} = props;
  return (
        <div style={style}>
        <input disabled={disabled} placeholder="TODOを入力" value={todoText} onChange={onChange} />
        <button disabled={disabled} onClick={onClickdd}>追加</button>
      </div>
  )
}
