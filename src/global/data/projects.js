import exploriaImage from '../../assets/exploria.png'
import npcgenImage from '../../assets/npcgen.png'
import ledgerlyImage from '../../assets/ledgerly.png'

export const projects = [
  {
    name: 'Exploria',
    description: 'TODO',
    image: exploriaImage,
    deployedLink: 'https://exploria-mb.netlify.app',
    githubLink: 'https://github.com/megbuch/exploria',
    technologies: ['JavaScript', 'React', 'HTML', 'SCSS']
  },
  {
    name: 'NPC Generator',
    description: 'Let NPC Generator inspire you. Create characters on the fly, generating randomized demographic information, appearance descriptions, ability scores, personality traits, plot hooks, alignments, and corresponding beliefs — all at the push of a button.',
    image: npcgenImage,
    deployedLink: 'https://npcgen.com',
    githubLink: 'https://github.com/megbuch/npc-generator',
    technologies: ['JavaScript', 'HTML', 'CSS']
  },
  {
    name: 'Ledgerly Accounting',
    description: 'Ledgerly Accounting provides small-business owners with a comprehensive solution to manage business income and expenses. Users can manage their income and expense data, filter these transactions by category and/or date range, and generate financial reports.',
    image: ledgerlyImage,
    deployedLink: '',
    githubLink: 'https://github.com/megbuch/ledgerly',
    technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'Express', 'MongoDB', 'Token-Based Authentication']
  },

]