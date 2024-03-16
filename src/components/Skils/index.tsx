import { IconBrandCss3, IconBrandFigma, IconBrandHtml5, IconBrandJavascript, IconBrandNodejs, IconBrandPython, IconBrandReact, IconBrandTypescript, IconGitBranch, IconSql } from '@tabler/icons-react';
import styles from './Skils.module.css';

function Skils() {
    return (
        <div className={styles.container}>
            <section className={styles.skils} id='#skils'>
                <h2>Eu trabalho com essa tecnologias.</h2>
                <div className={styles.box}>
                    <div className={styles.techs}>
                        <h4>Back-end</h4>
                        <div className={styles.icons}>
                            <p><IconBrandJavascript /> Javascript</p>
                            <p><IconBrandPython /> Python</p>
                            <p><IconBrandTypescript /> Typescript</p>
                            <p><IconBrandNodejs /> Node JS</p>
                            <p><IconSql /> PostgreSQL</p>
                            <p><IconGitBranch /> Git e Github</p>
                        </div>
                    </div>
                    <div className={styles.techs}>
                        <h4>Front-end</h4>
                        <div className={styles.icons}>
                            <p><IconBrandJavascript /> Javascript</p>
                            <p><IconBrandTypescript /> Typescript</p>
                            <p><IconBrandReact /> React JS</p>
                            <p><IconBrandHtml5 /> HTML5</p>
                            <p><IconBrandCss3 /> CSS3</p>
                            <p><IconBrandFigma /> Figma</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skils;
