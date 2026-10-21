
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
    description: 'My experience, studies, and challenges at university.',
    content: 'I am a university student in Kazakhstan. At university, I study different subjects such as cybersecurity, web development, and management. Some assignments are difficult, especially when I need to learn something new. I also work on projects and presentations with my classmates. University is teaching me not only technical skills but also teamwork and responsibility. I want to improve my grades and become a better student.'
  },
  {
    id: 2,
    title: 'Learning Web Development',
    description: 'My journey from HTML and CSS to React.',
    content: 'I started learning web development with HTML, CSS, and JavaScript. At first, I learned how to create simple pages and style them. Later, I started working with React and TypeScript. Now I am building my own blog using React components and React Router. Sometimes programming is confusing, but I enjoy seeing my projects work in the browser. I want to continue learning and become more confident in coding.'
  },
  {
    id: 3,
    title: 'My First Portfolio Website',
    description: 'How I created my personal portfolio for SIS 1.',
    content: 'One of my first web development projects was my personal portfolio website. I created it for my SIS 1 assignment using HTML, CSS, and JavaScript. The website has About Me, Projects, and Contact sections. I also added a dark and light mode button and a contact form with validation. I made the website responsive so it works on phones and computers. This project helped me understand how to build a complete website.'
  },
  {
    id: 4,
    title: 'My Journey to IELTS 8.0',
    description: 'Why I want to improve my English and achieve a high IELTS score.',
    content: 'One of my biggest goals is to get Band 8.0 in IELTS Academic. I have already spent time preparing for this exam, but I know that I still need to improve. Listening and Reading are important parts of my preparation. Sometimes it is difficult to stay focused and study consistently. However, I understand that English can give me more opportunities in education and my future career. My goal is to practise regularly and become more confident in English.'
  },
  {
    id: 5,
    title: 'My Goals for the Future',
    description: 'My plans for education, personal growth, and my career.',
    content: 'I have several goals that I want to achieve in the future. First, I want to get good grades at university and improve my English. I also want to develop my programming skills and create useful projects. Another important goal is to become more disciplined and manage my time better. In the future, I want to get my driving license, earn my own money, and become more independent. I know these goals will take time, so I want to make progress step by step.'
  }
]
