import Layout from '../../components/Layout'
import Date from '../../components/Date'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw' // 추가된 부분
import 'highlight.js/styles/a11y-dark.css'

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
        <div className="post-content mt-[4rem]">
          <ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeRaw]}>
            {postData.content}
          </ReactMarkdown>
        </div>
      </article>
    </Layout>
  )
}
