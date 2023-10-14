import Link from 'next/link';
import style from './Button.module.css';

export default function Button({ name, href, onClick }) {
    return (
        <div>
            <Link className={style.button} href={href || './'} onClick={onClick}>
                {name}
            </Link>
        </div>
    );
}
