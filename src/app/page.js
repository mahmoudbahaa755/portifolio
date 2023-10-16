import Image from 'next/image'
import style from './page.module.css'
import me from '../../public/images/cat.jpg';
import Button from '@/elments/Button/Button';
import StickManWithCard from '@/elments/StickManWithCard/StickManWithCard'

import SoicalIcons from '@/elments/socialIcons/socialIcons';
export default function Home() {
  return (
    <div className="container">
      <div className={style.compenet}>
        <div className={style.image}>
          <Image
            src={me}
            priority={false}
            fill={true}
            placeholder="empty"
            alt="Mahmoud Bahaa"
            className={style.img}
          />
        </div>
        <div className={style.content}>
          <div className="flex-mid">
            <h1 className={style.name}>Mahmoud Bahaa</h1>
            <p className={style.joptitle}>Software Engineer</p>

            <SoicalIcons />
          </div>

          <StickManWithCard />
          <p className={`${style.preaf} small `}>
            I'm a web developer with 2 years of experience in creating
            cutting-edge UX/UI designs and websites. My strength lies in
            translating ideas into intuitive, high-quality solutions.With a
            sharp focus on product evolution,
          </p>
          <div className={`flex-mid m-20 ${style.button}`}>
            
            {/* If 'flex' is a class, add it here */}
            <Button name="Contact Me" href="/contact" />
            <Button name="Know more about me" href="/about" />
          </div>
        </div>
      </div>
    </div>
  );
}
