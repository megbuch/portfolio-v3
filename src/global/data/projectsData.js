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
import managedAccessIOSImage from '../../assets/managed-access-ios.png'
import managedAccessAppStoreImage from '../../assets/managed-access-app-store.png'
import managedAccessAndroidImage from '../../assets/managed-access-android.png'
import managedAccessPlayStoreImage from '../../assets/managed-access-play-store.png'
export const projectsData = [
  {
    name: 'Exploria',
    description: 'Discover your next great adventure with Exploria. Powered by the National Park Service API, Exploria delivers real-time, detailed information on all 400+ U.S. National Parks.',
    platform: 'Web',
    image: exploriaImage,
    technologies: ['JavaScript', 'React', 'HTML', 'SCSS'],
    isFeatured: true,
    isWorkProject: false,
    company: '',
    deployedLink: 'https://exploria-mb.netlify.app',
    githubLink: 'https://github.com/megbuch/exploria'
  },
  {
    name: 'GitFunded',
    description: 'Discover and support charitable causes with GitFunded. Create, customize, and manage your campaigns. Make donations to the ones that inspire you. All in a few simple steps.',
    platform: 'Web',
    image: gitfundedImage,
    technologies: ['Python', 'Django', 'HTML', 'CSS'],
    isFeatured: false,
    isWorkProject: false,
    company: '',
    deployedLink: '',
    githubLink: 'https://github.com/megbuch/GitFunded'
  },
  {
    name: 'JobSeekr',
    description: 'JobSeekr is the best way to organize all aspects of your job search. Ditch the spreadsheet and manage your job applications with descriptions, company and role information, status updates, dates, notes, and tasks while navigating a beautiful interface.',
    platform: 'Web',
    image: jobseekrImage,
    technologies: ['JavaScript', 'Express', 'Node.js', 'HTML', 'CSS'],
    isFeatured: false,
    isWorkProject: false,
    company: '',
    deployedLink: '',
    githubLink: 'https://github.com/megbuch/job-seekr-app'
  },
  {
    name: 'Ledgerly Accounting',
    description: 'Ledgerly Accounting provides small-business owners with a comprehensive solution to manage business income and expenses. Users can manage their income and expense data, filter these transactions by category and/or date range, and generate financial reports.',
    platform: 'Web',
    image: ledgerlyImage,
    technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'Express', 'MongoDB'],
    isFeatured: false,
    isWorkProject: false,
    company: '',
    deployedLink: '',
    githubLink: 'https://github.com/megbuch/ledgerly'
  },
  {
    name: 'NPC Generator',
    description: 'Let NPC Generator inspire you. Create characters on the fly, generating randomized demographic information, appearance descriptions, ability scores, personality traits, plot hooks, alignments, and corresponding beliefs — all at the push of a button.',
    platform: 'Web',
    image: npcgenImage,
    technologies: ['JavaScript', 'HTML', 'CSS'],
    isFeatured: true,
    isWorkProject: false,
    company: '',
    deployedLink: 'https://npcgen-mb.netlify.app',
    githubLink: 'https://github.com/megbuch/npc-generator'
  },
  {
    name: 'Portfolio v1',
    description: 'The first iteration of my portfolio.',
    platform: 'Web',
    image: portfolioV1Image,
    technologies: ['JavaScript', 'HTML', 'CSS'],
    isFeatured: false,
    isWorkProject: false,
    company: '',
    deployedLink: 'https://meghanbucher-v1.netlify.app/',
    githubLink: 'https://github.com/megbuch/portfolio-v1'
  },
  {
    name: 'Portfolio v2',
    description: 'The second iteration of my portfolio.',
    platform: 'Web',
    image: portfolioV2Image,
    technologies: ['JavaScript', 'React', 'HTML', 'SCSS'],
    isFeatured: true,
    isWorkProject: false,
    company: '',
    deployedLink: 'https://meghanbucher-v2.netlify.app/',
    githubLink: 'https://github.com/megbuch/portfolio-v2'
  },
  {
    name: 'Portfolio v3',
    description: 'The third iteration of my portfolio.',
    platform: 'Web',
    image: portfolioV3Image,
    technologies: ['JavaScript', 'React', 'HTML', 'SCSS'],
    isFeatured: false,
    isWorkProject: false,
    company: '',
    deployedLink: 'https://meghanbucher-v3.netlify.app/',
    githubLink: 'https://github.com/megbuch/portfolio-v3'
  },
  {
    name: 'Simon Says',
    description: 'My take on the classic Simon game we all know and love! Reach level 12 and brag to your friends.',
    platform: 'Web',
    image: simonSaysImage,
    technologies: ['JavaScript', 'HTML', 'CSS'],
    isFeatured: false,
    isWorkProject: false,
    company: '',
    deployedLink: 'https://simonsays-mb.netlify.app/',
    githubLink: 'https://github.com/megbuch/simon-says-game'
  },
  {
    name: 'Main Website',
    description: 'Complete redesign of the SpaceLab main website.',
    platform: 'Web',
    image: spacelabMainImage,
    technologies: ['JavaScript', 'React', 'HTML', 'SCSS'],
    isFeatured: false,
    isWorkProject: true,
    company: 'SpaceLab',
    deployedLink: 'https://spacelab.space/',
    githubLink: 'https://github.com/spacelabdev/spacelab-react'
  },
  {
    name: 'Participation Campaign',
    description: "Landing page for SpaceLab's participation campaign.",
    platform: 'Web',
    image: spacelabParticipationImage,
    technologies: ['JavaScript', 'React', 'HTML', 'SCSS'],
    isFeatured: false,
    isWorkProject: true,
    company: 'SpaceLab',
    deployedLink: '',
    githubLink: 'https://github.com/spacelabdev/spacelab-react'
  },
  {
    name: 'MTI Managed Access',
    description: 'Native iOS application that allows users to manage MTI Connect enabled security devices, keys, user access, as well as view health, security statuses, and historical data. This app also includes an unlocking feature, allowing users to unlock smart locks via Bluetooth Low Energy.',
    platform: 'iOS',
    image: managedAccessIOSImage,
    storeImage: managedAccessAppStoreImage,
    technologies: ['Swift'],
    isFeatured: true,
    isWorkProject: true,
    company: 'Mobile Technologies, Inc.',
    deployedLink: 'https://apps.apple.com/us/app/mti-managed-access/id6736996883',
    githubLink: ''
  },
  {
    name: 'MTI Managed Access',
    description: 'Native Android application that allows users to manage MTI Connect enabled security devices, keys, user access, as well as view health, security statuses, and historical data. This app also includes an unlocking feature, allowing users to unlock smart locks via Bluetooth Low Energy.',
    platform: 'Android',
    image: managedAccessAndroidImage,
    storeImage: managedAccessPlayStoreImage,
    technologies: ['Java'],
    isFeatured: true,
    isWorkProject: true,
    company: 'Mobile Technologies, Inc.',
    deployedLink: 'https://play.google.com/store/apps/details?id=com.mti.mae.gen3',
    githubLink: ''
  }
];