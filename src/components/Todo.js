function Todo(props){
    return (
        <div className="card">
        <h2>{props.text}</h2>
        <div class='action'>
            <span> A span</span>
          <button className="btn">DELETE</button>
        </div>
      </div>
    );
}


export default Todo;