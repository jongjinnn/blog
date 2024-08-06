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

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-[1.1rem] leading-[1.5]">
        <p>안녕하세요, 웹 프론트엔드 개발을 공부하고 있는 오종진입니다.</p>
      </section>
      <section className="pt-[1px] text-[1.2rem] leading-normal">
        <h2 className="leading-s[1.4] mx-0 mb-[0.5rem] mt-[2rem] text-[1.5rem] font-bold">
          Writing
        </h2>
        <div className="mb-[0.75rem] h-[1px] w-full bg-slate-300" />
        <ul className="m-0 list-none p-0">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mb-[1.25rem]" key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
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
