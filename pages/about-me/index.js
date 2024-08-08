import Link from 'next/link'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Head from 'next/head'

const portfolioLink = 'https://dev-jongjin.oopy.io'
const githubLink = 'https://github.com/jongjinnn.'
const email = 'ohjongjin051010@gmail.com'

export default function AboutMe() {
  return (
    <Layout>
      <Head>
        <title>About Me!</title>
      </Head>
      <main className="flex flex-col gap-y-[4rem]">
        <Image
          priority
          src="/images/profile.png"
          className="mx-auto h-[144px] items-center rounded-full object-cover"
          height={144}
          width={144}
          alt="profile image"
        />
        <section>
          <h2 className="text-[1.5rem] font-bold leading-[1.2] tracking-tighter">
            Channel
          </h2>
          <div className="my-[0.5rem] h-[1px] w-full bg-slate-300" />
          <div className="flex flex-col text-[0.9rem]">
            <div>
              <b>📧 Email</b>: {email}
            </div>
            <div>
              <b>📄 Portfolio</b>:
              <Link href={portfolioLink}>{portfolioLink}</Link>
            </div>
            <div>
              <b>👨‍💻 Github</b>: <Link href={githubLink}>{githubLink}</Link>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-[1.5rem] font-bold leading-[1.2] tracking-tighter">
            Certificate
          </h2>
          <div className="my-[0.5rem] h-[1px] w-full bg-slate-300" />
          <p className="text-[0.9rem]">
            <b>📝 정보처리산업기사</b> 취득 / 2022.09
          </p>
          <p className="text-[0.9rem]">
            <b>📝 정보처리기능사</b> 취득 / 2022.09
          </p>
        </section>
        <section>
          <h2 className="text-[1.5rem] font-bold leading-[1.2] tracking-tighter">
            Education
          </h2>
          <div className="my-[0.5rem] h-[1px] w-full bg-slate-300" />
          <p className="text-[0.9rem]">
            <b>🎓 광주 소프트웨어마이스터고등학교</b> 졸업 / 2024.01
          </p>
        </section>
      </main>
    </Layout>
  )
}
