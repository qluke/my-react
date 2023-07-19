//prop的作用是传递文本值
function Todo(props){
  function deleteHandler(){
    //这三个不同的按钮会打印不同的日志
    console.log('Clicked!');
    console.log(props.text);
  }
  //JSX 会让你把标签放到 JavaScript 中。而大括号会让你 “回到” JavaScript 中
  return (
      <div className="card">
        <h2>{props.text}</h2>
        <div className='action'>
          <button className="btn" onClick={deleteHandler}>DELETE</button>
      </div>
    </div>
  );
}


export default Todo;