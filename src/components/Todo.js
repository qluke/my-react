import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

// React 组件是返回标签的 JavaScript 函数，React 组件必须以大写字母开头
// React 组件必须以大写字母开头
function Todo(props) {
  // 从 React 引入 useState 后，在组件中声明一个 state 变量
  const [modalIsopen, setModalIsOpen] = useState(false);
  // 惯例，需要像这样 [something, setSomething] 为它们命名
  const [count, setCount] = useState(0);

  function deleteHandler() {
    // 这三个不同的按钮会打印不同的日志
    console.log("Clicked!");
    console.log(props.text);
    setModalIsOpen(true);
  }

  function closeModalHandler(){
    setModalIsOpen(false);
  }
  function handleClick() {
    // 点击该按钮计数器将递增
    setCount(count + 1);
    console.log(count);
  }
  // JSX 会让你把标签放到 JavaScript 中。而大括号会让你 “回到” JavaScript 中
  return (
    <div className="card">
      {/* prop 的作用是传递文本值 */}
      <h2>{props.text}</h2>
      {/* 在组件中声明 “事件处理” 函数来响应事件，注意结尾没有小括号*/}
      <div className="action">
        <button className="btn" onClick={deleteHandler}>
          DELETE
        </button>
        <button onClick={handleClick}>Clicked {count} times</button>
      </div>

      {/* if modalIsopen is true then render the modal */}
      {modalIsopen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> : null}
      {/* if modalIsopen is true then render the Backdrop */}
      {/* 将函数作为参数传递 */}
      {modalIsopen && <Backdrop onCancel={closeModalHandler}/>}
    </div>
  );
}

export default Todo;
