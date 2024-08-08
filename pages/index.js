import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import { getSortedPostData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/Date'

export async function getStaticProps() {
  const allPostsData = getSortedPostData()
  return {
    props: {
      allPostsData,
    },
  }
}

const portfolioLink = 'https://dev-jongjin.oopy.io'
const githubLink = 'https://github.com/jongjinnn.'
const email = 'ohjongjin051010@gmail.com'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col">
        <p className="text-[1rem] leading-[1.3]">
          <b>도전적인</b> 환경을 선호하며,
          <br />
          지금은 <b>Web Frontend</b>를 주력으로 열심히 개발을 공부하고 있습니다.
        </p>
        <div>
          <h2 className="mb-[0.5rem] mt-[1.75rem] text-[1.3rem] font-bold leading-[1.2] tracking-tighter">
            About ...
          </h2>
          <div className="flex flex-col text-[0.9rem]">
            <div>
              <b>📧 Email</b>: {email}
            </div>
            <div>
              <b>📄 Portfolio</b>:{' '}
              <Link href={portfolioLink}>{portfolioLink}</Link>
            </div>
            <div>
              <b>👨‍💻 Github</b>: <Link href={githubLink}>{githubLink}</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[1px] text-[1.2rem] leading-normal">
        <h2 className="leading-s[1.4] mx-0 mb-[0.5rem] mt-[2em] text-[1.5rem] font-bold">
          Writing
        </h2>
        <div className="mb-[1rem] h-[1px] w-full bg-slate-300" />
        <ul className="m-0 list-none p-0">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mb-[1.25rem] flex flex-col" key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <small className="text-[#666]">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
