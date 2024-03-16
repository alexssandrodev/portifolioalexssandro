import { IconMenu, IconX } from '@tabler/icons-react';
import styles from './Header.module.css';
import { useState } from 'react';

function Header() {
    const [activeMenu, setActiveMenu] = useState<boolean>(false);

    function handleMenu() {
        setActiveMenu((state) => !state);
    }


    return (
        <header className={styles.header}>
            <section className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.logo}>
                        <a href={'/'}><h3><span>Alexssandro Vicente</span></h3></a>
                    </div>
                    <div className={`${styles.menu} ${activeMenu ? styles.activeMenu : styles.deactiveMenu}`}>
                        <a href={'/'}>Home</a>
                        <a href={'#sobre'}>Sobre</a>
                        <a href={'#skills'}>Skils</a>
                        <a href={'#projects'}>Projetos</a>
                        <a href={'#contacts'}>Contato</a>
                    </div>
                    <p onClick={handleMenu} className={styles.iconMenu}>{activeMenu ? <IconX /> : <IconMenu />}</p>
                </div>
            </section>
        </header>
    );
}

export default Header;
