import { createContext, useState } from 'react';

// 解释这段代码的作用：

// 这段代码定义了一个名为`FavoritesContext`的React上下文对象，它包含了`favorites`、`totalFavorites`、`addFavorite`、
// `removeFavorite`和`itemIsFavorite`等属性和方法。这个上下文对象可以被整个React应用程序中的组件访问和使用。

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});

// 名为`FavoritesContextProvider`的React组件，它是`FavoritesContext`上下文对象的提供者。
// 它使用`useState`钩子来维护用户收藏的meetup列表，并提供了三个方法来操作这个列表：
// `addFavoriteHandler` 添加新的收藏
// `removeFavoriteHandler` 收藏列表中删除meetup
// `itemIsFavoriteHandler` 检查meetup是否已经被收藏
// 最后将这些方法和用户收藏的meetup列表等信息打包到一个`context`对象中，并将其传递给`FavoritesContext.Provider`组
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  
  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }
  
  function removeFavoriteHandler(meetupId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
  }
  
  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }
  
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };
  
  // `FavoritesContext.Provider`组件是 React上下文API的一部分，它允许后代组件访问`FavoritesContext`上下文对象中提供的值。
  // `FavoritesContext.Provider`组件的`value`属性设置为`context`对象，这样就可以在整个应用程序中使用这个上下文对象了。
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
