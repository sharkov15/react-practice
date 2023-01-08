import { useParams } from 'react-router-dom';
import BtnGitHub from '../components/button gitHub/BtnGitHub';
//import img from './../img/projects/02-big.jpg'
import {projects} from './../helpers/projectList'


const Project = () => {
    const {id} = useParams()
    const project = projects[id]

        return ( <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">Name page</h1>

                    <img src={project.imgBig} alt={project.title} className="project-details__cover"/>

                    <div className="project-details__desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    {project.gitHubLink && (
                        <BtnGitHub link='http://github.com/'/>
                    )}

                    
                </div>
            </div>
        </main> 
    );
}
 
export default Project;