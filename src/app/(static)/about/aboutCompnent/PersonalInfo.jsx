
import style from '../page.module.css';

const PersonalInfo = () => {
    const personalInfoData = [
        { label: 'Name', value: 'Mahmoud Bahaa' },
        { label: 'Age', value: '20' },
        { label: 'Address', value: 'Cairo, Egypt' },
        { label: 'Phone', value: '+201010623847' },
        { label: 'Email', value: 'mahmoudbahaa755@gmail.com' },
        { label: 'Freelance', value: 'Available' },
        { label: 'Language', value: 'Arabic, English' },
        { label: 'Graduated from', value: 'Computer Science' },
    ];

    return (
        <div className={style.personalInfo}>
            <h2>
                Personal<span className='purple'> Info</span>
            </h2>
            <div className={style['personal-info']}>
                <ul>
                    {personalInfoData.map((item, index) => (
                        <li key={index}>
                            <span className='purple'>{item.label}:</span> <span className='f-bold'>
                                {item.value}
                                </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PersonalInfo;
