
export interface Post {
  id: number
  title: string
  description: string
  content: string
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'My University Life',
    description: 'My experience as a university student.',
    content: 'University life is an important part of my journey. I learn new subjects, work on projects, and spend time with my friends.'
  },
  {
    id: 2,
    title: 'Learning Web Development',
    description: 'How I started learning to build websites.',
    content: 'I started learning HTML, CSS, and JavaScript. Now I am learning React and TypeScript to create more interesting websites.'
  },
  {
    id: 3,
    title: 'My First Portfolio Website',
    description: 'A project I created using HTML, CSS, and JavaScript.',
    content: 'For my first SIS assignment, I created a personal portfolio website. It has information about me, my projects, and a contact form.'
  },
  {
    id: 4,
    title: 'Why I Want to Improve My English',
    description: 'My thoughts about learning English.',
    content: 'English is important for education and communication. I want to improve my skills because it can help me in my future career.'
  },
  {
    id: 5,
    title: 'My Goals for the Future',
    description: 'Some goals I want to achieve.',
    content: 'I want to improve my programming skills, complete my university projects, and learn new things that will help me in the future.'
  }
]
