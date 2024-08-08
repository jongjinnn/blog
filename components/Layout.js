import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const introduce = '안녕하세요, 오종진입니다.'
export const siteTitle = 'Jinny-Log'

export default function Layout({ children, home }) {
  return (
    <div className="mx-auto mb-[6rem] mt-[3rem] max-w-[36rem] px-[1rem] py-0">
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
      <header className="flex flex-col">
        {home && (
          <>
            <Image
              priority
              src="/images/profile.png"
              className="mx-auto h-[144px] items-center rounded-full object-cover"
              height={144}
              width={144}
              alt="profile image"
            />
            <h1 className="mb-[0.6rem] mt-[2rem] text-[1.5rem] font-bold leading-[1.2] tracking-tighter">
              👋 &nbsp; {introduce}
            </h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-[3rem]">
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
