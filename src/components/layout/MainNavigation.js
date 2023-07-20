import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

// 解释这段代码的作用：

// 这段代码定义了一个React组件MainNavigation，它渲染了一个页面的头部导航栏，包括一个logo和一个包含三个链接的菜单栏。这三个链接分别是：
// 1. 'All Meetups'，指向网站的主页
// 2. 'Add New Meetup'，指向一个页面，用于添加新的meetup
// 3. 'My Favorites'，指向一个页面，显示用户收藏的meetup，并在链接旁边显示收藏的meetup的数量
// 这个组件使用了React的Context API，从FavoritesContext中获取了totalFavorites属性，这个属性表示用户收藏的meetup的数量，并将其显示在'My Favorites'链接旁边的一个小红点中。

function MainNavigation() {
  // 使用了useContext钩子
  const favoritesCtx = useContext(FavoritesContext);

  return (
    // 这行代码使用了CSS Modules的语法，通过导入一个名为classes的对象，它允许React组件在其样式表中使用局部作用域的CSS类名。
    // 在这个例子中，MainNavigation.module.css是一个CSS模块文件，其中定义了一些CSS规则，并暴露了一些CSS类名。
    // 当使用import classes from './MainNavigation.module.css';导入这个文件时，classes对象将包含这些CSS类名的映射。
    // classes.header是一个代表头部的CSS类名，它将被应用于<header>元素的className属性中。
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add New Meetup</Link>
          </li>
          <li>
            <Link to='/favorites'>
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
