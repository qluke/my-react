import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from './components/layout/Layout';

// 定义三个路由 MainNavigation组件嵌入到Layout组件中
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

// react-router-dom 从V5升级到V6 新版本写法错误
// 报错：[AllMeetupsPage] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>
// 原因：在React Router v6中，<Routes>组件用于定义应用程序的路由配置。它期望每个子组件都是<Route>组件，该组件定义了路由路径和要渲染的组件之间的映射。
// 解决方式：用<Route>组件包装AllMeetupsPage组件

// function App() {
//   return (
//     <Routes>
//       <Route path="/" exact>
//         <AllMeetupsPage />
//       </Route>
//       <Route path="/new-meetup">
//         <NewMeetupPage />
//       </Route>
//       <Route path="/favorites">
//         <FavoritesPage />
//       </Route>
//     </Routes>
//   );
// }

// react-router-dom 从V5升级到V6 新版本写法错误
// 报错：A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.
// 解决方式：Switch 重命名为 Routes

// function App() {
//   return (
//     <Switch>
//       <Route path="/" exact>
//         <AllMeetupsPage />
//       </Route>
//       <Route path="/new-meetup">
//         <NewMeetupPage />
//       </Route>
//       <Route path="/favorites">
//         <FavoritesPage />
//       </Route>
//     </Switch>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Route path="/" exact>
//         <AllMeetupsPage />
//       </Route>
//       <Route path="/new-meetup">
//         <NewMeetupPage />
//       </Route>
//       <Route path="/favorites">
//         <FavoritesPage />
//       </Route>
//     </div>
//   );
// }

export default App;
