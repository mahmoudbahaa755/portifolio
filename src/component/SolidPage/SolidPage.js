
import style from './SolidPage.module.css'
export default function SolidPage({ children }) {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}