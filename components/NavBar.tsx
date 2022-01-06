import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Movie</a>
      </Link>
      <Link href="/tv">
        <a className={router.pathname === "/tv" ? "active" : ""}>TV</a>
      </Link>
      <style jsx>
        {`
          nav {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 0px;
          }
          a {
            text-decoration: none;
            color: #999999;
            margin-right: 5px;
            font-weight: 700;
            font-size: 20px;
          }
          .active {
            color: #fff;
            border-bottom: 2px solid lime;
          }
        `}
      </style>
    </nav>
  );
}
