import Head from 'next/head'
import Link from 'next/link'
import Header from './Header'

const introduce = '블로그 방문을 환영합니다.'
export const siteTitle = "Jongjin's Log"

export default function Layout({ children, home }) {
  return (
    <div className="mx-auto mb-[6rem] max-w-[40rem] px-[1rem] py-0">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="프론트엔드 개발자 오종진의 개인 블로그"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <section>
        {home && (
          <h1 className="mb-[0.6rem] mt-[2rem] text-[1.5rem] font-bold leading-[1.2] tracking-tighter">
            👋&nbsp;{introduce}
          </h1>
        )}
      </section>
      <main>{children}</main>
      {!home && (
        <div className="mt-[3rem]">
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
