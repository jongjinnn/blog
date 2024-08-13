import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import { getSortedPostData } from '../lib/posts'
import Post from '../components/Post'

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
      <section className="flex flex-col">
        <p className="text-[17px] leading-[1.3] text-gray-500">
          수준 높은 글은 아니지만, 좋은 글을 전달하기 위해 열심히 글을 고칩니다.
          <br />
          주로 프론트엔드 관련 내용을 다루며 누군가에게 도움이 되었으면 하는
          목적으로 운영 중입니다.
        </p>
      </section>
      <section className="pt-[1px] text-[1.2rem] leading-normal">
        <h2 className="mx-0 mb-[0.5rem] mt-[3rem] text-[1.5rem] font-bold leading-[1.4]">
          Writing
        </h2>
        <div className="mb-[1rem] h-[1px] w-full bg-slate-300" />
        <ul className="m-0 list-none p-0">
          {allPostsData.map(({ id, title, description, date }) => (
            <Post
              key={id}
              id={id}
              title={title}
              description={description}
              date={date}
            />
          ))}
        </ul>
      </section>
    </Layout>
  )
}
