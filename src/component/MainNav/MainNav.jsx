import  Navbar  from '@/component/NavBar/Navbar';
import Navbarsmall from '@/component/NavBarsmall/NavBarsmall'
import style from './MainNav.module.css'
export default function MainNav(){
    return(
        <div className={style.laptop}>
             <div >
            <Navbar />
              </div>
          <div className={style.mobile}>
            <Navbarsmall />
              </div>
        </div>
    )
}