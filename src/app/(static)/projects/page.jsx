import Image from 'next/image';
import style from './page.module.css';
import Link from 'next/link';

export default function Projects() {
    const projects = [
        {
            name: 'Loan Template',
            description: 'Html, Css, responsive',
            image: '/images/loanTemplate.png',
            link: 'https:/mahmoudbahaa12.github.io/Loan-Template/',
        }, {
            name: 'Loan Template',
            description: 'Html, Css, responsive',
            image: '/images/loanTemplate.png',
            link: 'https:/mahmoudbahaa12.github.io/Loan-Template/',
        }, {
            name: 'Loan Template',
            description: 'Html, Css, responsive',
            image: '/images/loanTemplate.png',
            link: 'https:/mahmoudbahaa12.github.io/Loan-Template/',
        }
    ];

    return (
        <div className={style.container}>
            <div className='flex-mid'>

            <h1>My <span className="purple">Portfolio</span></h1>
            <small className="small">Showcasing Some Of My Best Work</small>
            </div>
            <div className={style["project-list"]}>
                {projects.map((project, index) => (
                    <div className={style["projectCard"]} key={index}>
                       <div className={style["projectImage"]}>
    <Link href={project.link} target="_blank" rel="noopener noreferrer">
        <Image src={project.image} objectFit="cover"  layout="responsive" width={200} height={200} alt={project.name} />
    </Link>
</div>
                        <div className={style["projectDetails"]}>
                            <p className={style["projectName"]}>{project.name}</p>
                            <Link href={project.link} target="_blank" rel="noopener noreferrer" className={`${style["projectButton"]}`}>
                                <span className='purple f-bold'>View Project</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
