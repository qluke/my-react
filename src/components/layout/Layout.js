import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

// 这段代码定义了一个名为 Layout 的 React 组件。这个组件渲染了一个包含页面主要内容的 main 元素，同时在页面顶部渲染了一个 MainNavigation 组件。
// <main className={classes.main}>{props.children}</main> 是 Layout 组件中的一个子元素，它使用 props.children 属性来渲染所有传递给 Layout 组件的子元素。其中，className={classes.main} 表示给 main 元素添加一个样式类名为 classes.main，这个类名可能是通过 import 引入的一个样式类名对象，用来控制 main 元素的样式和布局。
// 这种方式可以让 Layout 组件的内部结构更加灵活，因为它可以接受任意类型的子元素作为页面主要内容，并且可以通过 props 属性来动态地控制 main 元素的样式和布局。同时，由于 Layout 组件在顶部渲染了一个 MainNavigation 组件，因此它可以在整个应用程序中共享相同的导航栏和页面布局。

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
