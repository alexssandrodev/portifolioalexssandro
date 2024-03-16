import { useEffect, useState } from 'react';
import ProjectItem from '../../ProjectItem';
import './projects.css';
import { DataProjects } from '../../models/DataProjects';
import { projects } from '../../data/projects';

function Projects() {

    const [projectList, setProjectList] = useState<DataProjects[]>([]);

    useEffect(() => {
        setProjectList(projects);
    }, [projectList]);

    return ( 
        <section className="projects__container">
            <h4>Projetos desenvolvidos</h4>
            <div className="projects__item">
                {projectList.length === 0 && (
                    <p>Não há projetos...</p>
                )}
                {projectList && projectList.map((project) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </div>
        </section>
     );
}

export default Projects;
