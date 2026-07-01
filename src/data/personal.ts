export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  skills: string[];
  email: string;
  linkedin: string;
  whatsapp: string;
  cvUrl?: string;
}

export const personal: PersonalInfo = {
  name: 'Nectar Shavit',
  title: 'Product Designer',
  tagline: "Passion for crafting meaningful digital experiences.",
  bio: "I'm a product designer focused on creating clear, human-first interfaces for complex systems. Coming from a background in learning technologies and game design, I enjoy turning messy ideas into functional prototypes and clean UI.",
  skills: ['Figma', 'UX Research', 'Data Visualization', 'Design Systems', 'Prototyping', 'B2B / Enterprise'],
  email: 'nectarsha@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nectar-shavit/',
  whatsapp: '972547919755',
  cvUrl: '/cv.pdf',
};
