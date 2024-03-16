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
                <a target="_blanc" href="http://api.whatsapp.com/send?1=pt_BR&phone=5584996102818">
                    <p><IconBrandWhatsapp /></p>
                    <h4>Meu Whatsapp</h4>
                </a>
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
