import TimelineItem from './TimelineItem'

export const EXPERIENCES = [
  {
    org: 'Shanghai Ugion Technology',
    url: 'https://younetmedia.com',
    logo: '/static/images/experiences/ugion-logo.png',
    start: 'March 2024',
    end: 'Present',
    title: 'Frontend Developer',
    icon: 'man-technologist',
    event: 'career-younetmedia',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Build{' '}
            <a href="https://ecomheat.youneteci.com" rel="noopener noreferrer" target="_blank">
              Ecomheat
            </a>{' '}
            - a website helps to measure the performance of the industry and players on E-Commerce
            platforms thru cross E-commerce channels.
          </li>
          <li>
            Build <strong>AppCore</strong> - Developed and published core NestJS packages, including
            DatabaseModule, CacheModule, RedisModule, ConfigModule and others on npm to accelerate
            development and deployment across multiple projects.
          </li>
        </ul>
      )
    },
  },
  {
    org: 'Yonyou Auto Information Technology ',
    url: 'https://www.yonyouqiche.com/',
    logo: '/static/images/experiences/yonyou-logo.png',
    start: 'July 2022',
    end: 'July 2020',
    title: 'Frontend Developer',
    icon: 'man-technologist',
    event: 'career-qkit',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            <strong>Developed and maintained web applications</strong> for managing company website
            content, including blogs, clients, and recruitment.
          </li>
          <li>
            Implemented backend solutions using <strong> NestJS, PostgreSQL, and Prisma</strong>.
          </li>
          <li>
            <strong>Participated in Agile methodologies </strong> to boost project efficiency and
            completion rates.
          </li>
        </ul>
      )
    },
  },
  {
    org: 'Nanjing Audit University Jinshen College',
    url: 'https://lxsy.nau.edu.cn/NanjingAuditUniversity/list.htm',
    logo: '/static/images/experiences/uit-logo.png',
    start: 'Dec 2015',
    end: 'Dec 2019',
    title: 'Student',
    icon: 'man-technologist',
    event: 'career-qkit',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Get a good degree at <strong>School of Computer Science</strong>
          </li>
          <li>
            While most of my friends pursued careers in <strong> Data or AI Engineering </strong>, I
            found my passion in {''}
            <strong>Software Engineering</strong> , particularly in web and app development. This
            decision has shaped who I am today.
          </li>
        </ul>
      )
    },
  },
]

const CareerTimeline = () => (
  <ul className="m-0 list-none p-0">
    {EXPERIENCES.map((experience, idx) => (
      <li key={experience.url} className="m-0 p-0">
        <TimelineItem exp={experience} last={idx === EXPERIENCES.length - 1} />
      </li>
    ))}
  </ul>
)

export default CareerTimeline
