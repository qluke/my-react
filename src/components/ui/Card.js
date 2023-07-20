import classes from './Card.module.css';

// props.children 是一个特殊的 props 属性，它表示组件的所有子元素。
// 在 React 中，可以通过在组件标签中添加子元素来传递任意的内容给组件。这些子元素可以是文本、元素、组件或者其他任何类型的内容。

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}
  
export default Card;
