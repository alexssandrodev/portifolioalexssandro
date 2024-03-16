import { DataProjects } from "../models/DataProjects";

export const projects: DataProjects[] = [
    {
        id: '1',
        image: '../../public/project1.png',
        description: 'Projeto de portifólio para expor trabalhs e experiências, tecnologias usadas.',
        techs: ['Javascript', 'React JS', 'Node JS', 'Typescript']
    },
    {
        id: '2',
        image: '../../public/project2.png',
        description: 'Software de controle de estoque, com função de caixa embutido e controle financeiro, tecnologias usadas.',
        techs: ['Javascript', 'React JS', 'Node JS', 'Typescript', 'PostgreSQL', 'Fastify']
    }
]
