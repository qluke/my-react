import Link from "next/link";

// https://www.nextjs.cn/docs/routing/introduction#nested-routes

// https://nextjs.org/docs/app/building-your-application/routing
function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/">Index routes: pages/index.js → /</Link>
        </li>
        <li>
          <Link href="/about">Nested routes: pages/about/index.js → /blog</Link>
        </li>
        <li>
          <Link href="/clients/abc/123">Dynamic route segments: pages/clients/[id]/[[clientprojectid]] → /all/*</Link>
        </li>
        <li>
          <Link href="/all/123/456">Dynamic route segments: pages/all/[...slug].js → /all/*</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/portfolio">Linking between pages: Portfolio</Link>
        </li>
        <li>
          <Link href="/portfolio/123">Linking between pages: Portfolio/123</Link>
        </li>
        <li>
          <Link href="/clients">Linking to dynamic paths: Clients</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
