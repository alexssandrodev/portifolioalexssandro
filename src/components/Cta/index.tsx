import { IconBrandWhatsapp } from "@tabler/icons-react";
import styles from './Cta.module.css';

function Cta() {
    return (
        <section className={styles.cta} id="#sobre">
            <div className={styles.copy}>
                <p>
                    Sou programador fullstack, atuo desenvolvendo soluções como,
                    sites, sistemas web, landing pages...
                </p>
                <span>
                    <p><IconBrandWhatsapp /></p>
                    <h4>(84) 99610-2818</h4>
                </span>
            </div>
            <div className={styles.logo}>
                <h1>Alexssandro Vicente</h1>
                <p>Software Engineer</p>
                <span>A tecnologia nos move.</span>
            </div>
        </section>
    );
}

export default Cta;
