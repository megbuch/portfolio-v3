import exploriaImage from '../../assets/exploria.png'
import gitfundedImage from '../../assets/gitfunded.png'
import jobseekrImage from '../../assets/jobseekr.png'
import ledgerlyImage from '../../assets/ledgerly.png'
import npcgenImage from '../../assets/npcgen.png'
import portfolioV1Image from '../../assets/portfolio-v1.png'
import portfolioV2Image from '../../assets/portfolio-v2.png'
import portfolioV3Image from '../../assets/portfolio-v3.png'
import simonSaysImage from '../../assets/simon-says.png'
import spacelabMainImage from '../../assets/spacelab-main.png'
import spacelabParticipationImage from '../../assets/spacelab-participation.png'

export const featuredProjects = [
  {
    name: 'Exploria',
    description: 'Discover your next great adventure with Exploria. Powered by the National Park Service API, Exploria delivers real-time, detailed information on all 400+ U.S. National Parks.',
    image: exploriaImage,
    deployed: true,
    deployedLink: 'https://exploria-mb.netlify.app',
    githubLink: 'https://github.com/megbuch/exploria',
    technologies: ['JavaScript', 'React', 'HTML', 'SCSS']
  },
  {
    name: 'Portfolio v2',
    description: 'The second iteration of my portfolio.',
    image: portfolioV2Image,
    deployed: true,
    deployedLink: 'https://meghanbucher-v2.netlify.app/',
    githubLink: 'https://github.com/megbuch/portfolio-v2',
    technologies: ['JavaScript', 'React', 'HTML', 'SCSS']
  },
  {
    name: 'NPC Generator',
    description: 'Let NPC Generator inspire you. Create characters on the fly, generating randomized demographic information, appearance descriptions, ability scores, personality traits, plot hooks, alignments, and corresponding beliefs — all at the push of a button.',
    image: npcgenImage,
    deployed: true,
    deployedLink: 'https://npcgen.com',
    githubLink: 'https://github.com/megbuch/npc-generator',
    technologies: ['JavaScript', 'HTML', 'CSS']
  },
  {
    name: 'Ledgerly Accounting',
    description: 'Ledgerly Accounting provides small-business owners with a comprehensive solution to manage business income and expenses. Users can manage their income and expense data, filter these transactions by category and/or date range, and generate financial reports.',
    image: ledgerlyImage,
    deployed: false,
    deployedLink: '',
    githubLink: 'https://github.com/megbuch/ledgerly',
    technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'Express', 'MongoDB', 'Token-Based Authentication']
  },
]

export const projects = [
  {
    name: 'Exploria',
    description: 'Discover your next great adventure with Exploria. Powered by the National Park Service API, Exploria delivers real-time, detailed information on all 400+ U.S. National Parks.',
    image: exploriaImage,
    deployed: true,
    deployedLink: 'https://exploria-mb.netlify.app',
    githubLink: 'https://github.com/megbuch/exploria',
    technologies: ['JavaScript', 'React', 'HTML', 'SCSS']
  },
  {
    name: 'GitFunded',
    description: 'Discover and support charitable causes with GitFunded. Create, customize, and manage your campaigns. Make donations to the ones that inspire you. All in a few simple steps.',
    image: gitfundedImage,
    deployed: false,
    deployedLink: '',
    githubLink: 'https://github.com/megbuch/GitFunded',
    technologies: ['Python', 'Django', 'HTML', 'CSS']
  },
  {
    name: 'JobSeekr',
    description: 'JobSeekr is the best way to organize all aspects of your job search. Ditch the spreadsheet and manage your job applications with descriptions, company and role information, status updates, dates, notes, and tasks while navigating a beautiful interface.',
    image: jobseekrImage,
    deployed: false,
    deployedLink: '',
    githubLink: 'https://github.com/megbuch/job-seekr-app',
    technologies: ['JavaScript', 'Express', 'Node.js', 'HTML', 'CSS']
  },
  {
    name: 'Ledgerly Accounting',
    description: 'Ledgerly Accounting provides small-business owners with a comprehensive solution to manage business income and expenses. Users can manage their income and expense data, filter these transactions by category and/or date range, and generate financial reports.',
    image: ledgerlyImage,
    deployed: false,
    deployedLink: '',
    githubLink: 'https://github.com/megbuch/ledgerly',
    technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'Express', 'MongoDB', 'Token-Based Authentication']
  },
  {
    name: 'NPC Generator',
    description: 'Let NPC Generator inspire you. Create characters on the fly, generating randomized demographic information, appearance descriptions, ability scores, personality traits, plot hooks, alignments, and corresponding beliefs — all at the push of a button.',
    image: npcgenImage,
    deployed: true,
    deployedLink: 'https://npcgen.com',
    githubLink: 'https://github.com/megbuch/npc-generator',
    technologies: ['JavaScript', 'HTML', 'CSS']
  },
  {
    name: 'Portfolio v1',
    description: 'The first iteration of my portfolio.',
    image: portfolioV1Image,
    deployed: true,
    deployedLink: 'https://meghanbucher-v1.netlify.app/',
    githubLink: 'https://github.com/megbuch/portfolio-v1',
    technologies: ['JavaScript', 'HTML', 'CSS']
  },
  {
    name: 'Portfolio v2',
    description: 'The second iteration of my portfolio.',
    image: portfolioV2Image,
    deployed: true,
    deployedLink: 'https://meghanbucher-v2.netlify.app/',
    githubLink: 'https://github.com/megbuch/portfolio-v2',
    technologies: ['JavaScript', 'React', 'HTML', 'SCSS']
  },
  {
    name: 'Portfolio v3',
    description: 'The third iteration of my portfolio.',
    image: portfolioV3Image,
    deployed: true,
    deployedLink: 'https://meghanbucher-v3.netlify.app/',
    githubLink: 'https://github.com/megbuch/portfolio-v3',
    technologies: ['JavaScript', 'React', 'HTML', 'SCSS']
  },
  {
    name: 'Simon Says',
    description: 'My take on the classic Simon game we all know and love! Reach level 12 and brag to your friends.',
    image: simonSaysImage,
    deployed: true,
    deployedLink: 'https://simonsays-mb.netlify.app/',
    githubLink: 'https://github.com/megbuch/simon-says-game',
    technologies: ['JavaScript', 'HTML', 'CSS']
  },
  {
    name: 'SpaceLab: Main Website',
    description: 'Complete redesign of the SpaceLab main website.',
    image: spacelabMainImage,
    deployed: true,
    deployedLink: 'https://spacelab.space/',
    githubLink: 'https://github.com/spacelabdev/spacelab-react',
    technologies: ['JavaScript', 'React', 'HTML', 'SCSS']
  },
  {
    name: 'SpaceLab: Participation Campaign',
    description: `Created a landing page for SpaceLab's participation campaign.`,
    image: spacelabParticipationImage,
    deployed: false,
    deployedLink: '',
    githubLink: 'https://github.com/spacelabdev/spacelab-react',
    technologies: ['JavaScript', 'React', 'HTML', 'SCSS']
  },
]