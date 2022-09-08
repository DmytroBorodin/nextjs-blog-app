import Link from "next/link";
import Logo from "../logo/logo";
import classes from "./main-navigation.module.css";

function MainNavigation(props) {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <ul>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
