import Image from 'next/image';
import style from './Services.module.css';
import { services } from '../data';
export default function Services() {


    return (
        <div className={style.container}>
                <h2>My Services</h2>
            <div className={style['services']}>
                <div className={style['service-list']}>
                    {services.map((service, index) => (
                        <div key={index} className={style['service-item']}>
                            <Image src={service.imageSrc} alt={service.title} width={50} height={50} />
                            <small className='purple'>{service.title}</small>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
