import Link from 'next/link'
import Image from 'next/image'
import style from './Card.module.css'
export default function Card({ props }){

    return(
        <div>
            <div className={style["projectCard"]}>
                <div className={style["projectImage"]}>
                    <Link
                        href={props.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={props.image}
                            objectFit="cover"
                            priority={false}
                            placeholder="empty"
                            className={style.fullImage}
                            layout="responsive"
                            width={400}
                            height={600}
                            alt={props.name}
                        />
                    </Link>
                </div>
                <div className={style["projectDetails"]}>
                    <p className={style["projectName"]}>{props.name}</p>
                    <Link
                        href={props.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${style["projectButton"]}`}
                    >
                        <span className="purple f-bold">View Project</span>
                    </Link>
                </div>
            </div>
        </div>
    )

}