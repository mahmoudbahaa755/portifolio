import style from './StickMan.module.css';

const Stickman = () => {
    return (
        <div className={style.action}>
            <div className={style.stickman}>
                <div className={style.body}>
                    <div className={style.head}>
                        <div className={style.face}>
                            <div className={style.eye}></div>

                        </div>
                    </div>
                    <div className={`${style.arm} ${style['arm-right']}`}>
                        <div className={style.limb}></div>
                    </div>
                    <div className={`${style.arm} ${style['arm-left']}`}>
                        <div className={style.limb}></div>
                    </div>
                    <div className={`${style.leg} ${style['leg-right']}`}>
                        <div className={style.limb}></div>
                    </div>
                    <div className={`${style.leg} ${style['leg-left']}`}>
                        <div className={style.limb}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stickman;