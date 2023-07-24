import Link from "next/link";

// 这段代码是一个React组件，它定义了一个ClientsPage组件，该组件将呈现一个客户列表，其中每个客户名称都是一个链接，用户可以通过点击该链接进入特定的客户详情页面。
// 这个组件使用了Link组件从Next.js框架中导入。Link组件是Next.js的一个核心特性，它使开发人员可以使用客户端路由实现无需重新加载整个页面的浏览器导航。
function ClientsPage() {
  // 这个组件将客户的信息映射到一个URL路径，并将其作为查询参数传递给客户端路由系统。
  // 在这个组件中，客户信息被定义为一个包含两个对象的数组。每个对象都包含客户的id和name属性。
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];

  return (
    /* 然后，组件使用map函数遍历客户数组，并将每个客户呈现为一个列表项，其中客户名称被包装在一个Link组件中。
    这个组件的href属性指定了客户的URL路径，其中pathname指定了客户详情页面的路径，query指定了客户的id作为查询参数传递。
    组件的key属性被设置为客户的id，以帮助React在更新列表时跟踪每个列表项的变化。最后，组件将整个列表呈现在一个<ul>标签中。 */
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              // A Different Way Of Setting Link Hrefs
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
