import  Navbar  from '@/component/NavBar/Navbar';
import Navbarsmall from '@/component/NavBarsmall/NavBarsmall'
import style from './MainNav.module.css'
export default function MainNav(){
    return(
        <div >
             <div className={style.laptop}>
            <Navbar />
              </div>
          <div className={style.mobile}>
            <Navbarsmall />
              </div>
        </div>
    )
}