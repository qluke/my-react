import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

// 这段代码定义了一个名为MeetupItem的React组件，它渲染了一个meetup的列表项。
// 这个组件接受一个名为props的参数，其中包含了id、title、image、address和description等meetup属性，用于显示一个图片、标题、地址、描述和一个按钮，用于将meetup添加到或从收藏夹中删除。

function MeetupItem(props) {
  // 使用了useContext钩子，它从FavoritesContext上下文对象中获取了itemIsFavorite属性
  // 这个属性用于判断当前的meetup是否已经被收藏。
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  // 当用户点击这个按钮时，会调用toggleFavoriteStatusHandler函数，该函数会根据当前meetup是否已经被收藏，执行添加或删除该meetup的操作。
  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
