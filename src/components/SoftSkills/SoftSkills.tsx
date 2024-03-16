import { useLayoutEffect, useRef } from 'react';
import { IconBulb, IconCode, IconUserQuestion, IconUsers } from '@tabler/icons-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SoftSkills..css';


function SoftSkils() {
    const el = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.box',
                    scrub: true,
                    // markers: true,
                    start: 'top 530rem',
                    end: 'bottom 270rem'
                }
            })
            .fromTo("#card-1", {
                opacity: 0,
                x: -150
            }, {
                opacity: 1,
                x: 0
            })
            .fromTo("#card-2", {
                opacity: 0,
                y: 150
            }, {
                opacity: 1,
                y: 0
            })
            .fromTo("#card-3", {
                opacity: 0,
                y: 150
            }, {
                opacity: 1,
                y: 0
            })
            .fromTo("#card-4", {
                opacity: 0,
                y: 150
            }, {
                opacity: 1,
                y: 0
            })
        }, el);
    
        return () => {
            gsap.killTweensOf('.soft');
        }
    }, []);

    return (
        <section className='container' id='skills'>
            <h5>Soft Skills</h5>
            <div className='soft' ref={el}>
                <div className='box' id='card-1'>
                    <div className='title'>
                        <span className='question'><IconUserQuestion /></span>
                        <h4>Comunicação</h4>
                    </div>
                    <div className="description">
                        <p>Boa comunicação para entender e passar informações.</p>
                    </div>
                </div>
                <div className='box creaty' id='card-2'>
                    <div className='title'>
                        <span className='creativity'><IconBulb /></span>
                        <h4>Criatividade</h4>
                    </div>
                    <div className="description">
                        <p>Tenho criatividade para pensar e agir além do esperado.</p>
                    </div>
                </div>
                <div className='box solve' id='card-3'>
                    <div className='title'>
                        <span className='solved'><IconCode /></span>
                        <h4>Resolver problemas</h4>
                    </div>
                    <div className="description">
                        <p>A resolução de problemas é que trabalhei e continuo trabalhando para aprimorar.</p>
                    </div>
                </div>
                <div className='box worked' id='card-4'>
                    <div className='title'>
                        <span className='work'><IconUsers /></span>
                        <h4>Trabalho em Equipe</h4>
                    </div>
                    <div className="description">
                        <p>O trabalho em equipe é importante e eu busco melhorar sempre.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SoftSkils;
