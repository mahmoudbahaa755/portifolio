import Link from 'next/link';
import style from './Circle.module.css'

export default function Circle(props) {
  let style_red =''
    if (props.closed === true){
       style_red='red'
    }
    return (
      <div className={`${style_red} ${style["studio-button"]}`}>
              <div className={style["studio-button-icon"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <span className={style.eye}></span>
              </div>
              <Link
                className={style["studio-button-label"]}
                href={props.LiveServer}
              >
                {props.name ? props.name : "Source Code"}
               
              </Link>
            </div>
    );

}