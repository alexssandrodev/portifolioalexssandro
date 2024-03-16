
import './projectItem.css';
import { DataProjects } from '../models/DataProjects';
import { IconX } from '@tabler/icons-react';
import { useLayoutEffect, useState } from 'react';
import { projects } from '../data/projects';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ProjectItemProps {
    project: DataProjects;
}

function ProjectItem({ project }: ProjectItemProps) {
    const [closeModal, setCloseModal] = useState<boolean>(false);

    function handleModal() {
        setCloseModal((state) => !state);
    }

    function showImageModal(id: string) {
        const projectsList = projects;
        const selectImage = projectsList.filter((image) => image.id === id);
        
        return selectImage;
    }

    const image = showImageModal(project.id);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.item__box', {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.item__box',
                scrub: true,
                // markers: true,
                start: 'top 550rem',
                end: 'bottom 600rem'
            }
        })

        return () => {
            gsap.killTweensOf('.item__box');
        }
    }, []);

    return (
        <section className="item__container" id='projects'>
            <div className={`item__modalimage ${closeModal ? 'active_modal' : 'close_modal'}`}>
                <p onClick={handleModal} className='iconx'><IconX /></p>
                <div className="item__modal">
                    {image.map((item) => (
                        <img key={project.id} src={item.image} alt="" />
                    ))}
                </div>
            </div>
            <div className="item__box">
                <img onClick={handleModal} src={project.image} alt="" />
                <div className="right">
                    <div className="top">
                        <p>{project.description}</p>
                        <div className="techs">
                            {project.techs.map((tech) => (
                                <p key={project.id}>{tech}</p>
                            ))}
                        </div>
                    </div>
                    <div className="buttons">
                        <a href='' className="btn">Ver código</a>
                        <a href='' className="btn">Ver projeto</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectItem;
