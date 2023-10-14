import Image from 'next/image'
import style from './page.module.css'
import me from '../../public/images/fromal2.png';
import Button from '@/elments/Button/Button';
import SoicalIcons from '@/elments/socialIcons/socialIcons';
export default function Home() {
  return (
    <div className="container">
            <div className={style.compenet}>
                <div className={style.image}>
                    <Image
                        src={me} 
                        priority={false} 
                        alt="Mahmoud Bahaa"
                        className={style.img}
                        width={400}
                        height={400}
                        placeholder = 'empty'
                       
                    />
                </div>
                <div className={style.content}>
                  <div className='flex-mid'>

                    <h1 className={style.name}>Mahmoud Bahaa</h1>
                    <p className={style.joptitle}>Software Engineer</p>
                    
                    <SoicalIcons />
                  </div>
                    <p className={style.preaf}>
I'm a web developer in Egypt with 2 years of experience in creating cutting-edge
 UX/UI designs and websites. I specialize in crafting user-centric products that 
 align with the latest design trends. My strength lies in translating ideas into intuitive, high-quality solutions. With a sharp focus on product evolution,
 I excel at efficient task prioritization and rapid delivery.                    </p>
                    <div className={`flex-mid ${style.button}`}> {/* If 'flex' is a class, add it here */}

                        <Button name="Contact Me" href="/contact" />
                        <Button name="Know more about me" href="/about" />
                    </div>
                </div>
            </div>
        </div>
  )
}
