import Layout from '../../components/Layout'
import Date from '../../components/Date'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="mb-[0.5rem] mt-[1rem] text-[2rem] font-bold leading-[1.3] tracking-tighter">
          {postData.title}
        </h1>
        <div className="float-right text-[#666]">
          <Date dateString={postData.date} />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          className="mt-[3rem]"
        />
      </article>
    </Layout>
  )
}
