import './styles.scss'

export default function LandingPage() {
	return (
		<div id="landing-page" className="col">
      <div>
        <h1>Meghan Bucher</h1>
        <h2>Software Engineer at MTI - Mobile Technologies, Inc.</h2>
      </div>
      <div className="section col">
        <p className="subtitle">About</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem nulla pharetra diam. Diam maecenas ultricies mi eget mauris pharetra. Nec tincidunt praesent semper feugiat nibh. At tempor commodo ullamcorper a lacus. Nunc pulvinar sapien et ligula ullamcorper. At consectetur lorem donec massa sapien faucibus et molestie. Est sit amet facilisis magna etiam tempor. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Euismod lacinia at quis risus sed vulputate odio. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Tristique risus nec feugiat in fermentum. Dictum at tempor commodo ullamcorper. Mattis rhoncus urna neque viverra justo.</p>
      </div>
      <div className="section col">
        <p className="subtitle">Experience</p>
        <div className="col">
          <div className="experience-cell row">
            <p className="date">May 2023 - Present</p>
            <div className="col content-ctr">
              <div>
                <p className="company">MTI - Mobile Technologies, Inc.</p>
                <p className="title">Front End Engineer</p>
                <p className="location">Hillsboro, Oregon</p>
              </div>
              <ul className="col">
                <li>Design and develop innovative large-scale, enterprise access management software, ensuring robust and highly-secure solutions for a broad array of Fortune 100 clients.</li>
                <li>Conduct thorough testing and maintain the highest standards of quality to deliver exceptional performance and reliability.</li>
                <li>Own the full-cycle design and development of our native Android application, used for access management of IoT devices.</li>
                <li>Build SDKs that enable B2B clients to leverage our wireless communication software within their own platforms.</li>
              </ul>
            </div>
          </div>
          <div className="experience-cell row">
            <p className="date">March 2023 - May 2023</p>
            <div className="col content-ctr">
              <div>
                <p className="company">SpaceLab</p>
                <p className="title">Web Developer</p>
                <p className="location">Remote</p>
              </div>
              <ul className="col">
                <li>Developed the React.js front-end for SpaceLab’s numerous projects and campaigns.</li>
                <li>Worked with team to overhaul the SpaceLab official website.</li>
                <li>Collaborated with UX designers and other cross-functional teams to translate Figma wireframes into pixel-perfect, feature-rich components. </li>
              </ul>
            </div>
          </div>
          <div className="experience-cell row">
            <p className="date">December 2022 - March 2023</p>
            <div className="col content-ctr">
              <div>
                <p className="company">General Assembly</p>
                <p className="title">Software Engineering Fellow</p>
                <p className="location">Remote</p>
              </div>
              <ul className="col">
                <li>Completed a 12-week intensive Software Engineering Immersive program, dedicating 500+ rigorous hours to mastering full stack web development, following several months of rigorous self-study.</li>
                <li>Developed full stack applications adhering to best practices using JavaScript, Python, Django, React, Express, Node.js, MongoDB, and PostgreSQL.</li>
              </ul>
            </div>
          </div>
          <p>View Resume</p>
        </div>
      </div>
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