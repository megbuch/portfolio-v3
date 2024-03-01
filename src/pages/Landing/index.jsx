import ExperienceCard from '../../components/ExperienceCard'
import { experiences } from '../../global/data/experiences'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import './styles.scss'

export default function LandingPage() {
	return (
		<div id="landing-page" className="col">
      <div className="header col">
        <h1>Meghan Bucher</h1>
        <h2>Software Engineer at MTI - Mobile Technologies, Inc.</h2>
        <div className="links row">
          <FaLinkedin />
          <FaGithub />
        </div>
      </div>
      {/* About Section */}
      <div className="section col">
        <p className="subtitle">About</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem nulla pharetra diam. Diam maecenas ultricies mi eget mauris pharetra. Nec tincidunt praesent semper feugiat nibh. At tempor commodo ullamcorper a lacus. Nunc pulvinar sapien et ligula ullamcorper. At consectetur lorem donec massa sapien faucibus et molestie. Est sit amet facilisis magna etiam tempor. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Euismod lacinia at quis risus sed vulputate odio. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Tristique risus nec feugiat in fermentum. Dictum at tempor commodo ullamcorper. Mattis rhoncus urna neque viverra justo.</p>
      </div>
      {/* Experience Section */}
      <div className="section col">
        <p className="subtitle">Experience</p>
        <div className="col">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
      {/* Projects Section */}
      <div className="section col">
        <p className="subtitle">Projects</p>
        <p>Project 1</p>
        <p>Project 2</p>
        <p>Project 3</p>
        <p>View More</p>
      </div>  
    </div>
	)
}