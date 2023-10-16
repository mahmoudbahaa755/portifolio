import { navInfo } from "./data";
import style from "./NavBarH.module.css";
export default function NavBarH() {

    return (
      <nav class="nav">
        <div class="container">
          <div id="mainListDiv" class="main_list">
            <ul class="navlinks">
              {navInfo.map((item) => (
                <Link
                  // onMouseEnter={() => setHoveredIcon(item.name)}
                  href={item.url}
                  className={`${style.navbarlink} ${
                    item.id === activeDiv ? style.active : ""
                  }`}
                  onClick={() => handleClick(item.id)}
                  key={item.id}
                >
                  <Image
                    src={item.svg}
                    className={style.img}
                    alt={item.name}
                    width={66}
                    height={66}
                  />
                </Link>
              ))}
            </ul>
          </div>
          <span class="navTrigger">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>
    );
}