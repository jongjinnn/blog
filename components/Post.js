import Link from 'next/link'
import Date from './Date'
import Image from 'next/image'

// test

export default function Post({ id, title, description, date }) {
  return (
    <>
      <div className="mb-[1.5rem] flex justify-between">
        <div className="flex flex-col">
          <Link href={`/posts/${id}`} className="text-[1.3rem]">
            {title}
          </Link>
          <p className="mt-[0.3rem] text-[0.8rem] text-[#666]">{description}</p>
          <small className="mt-[1.7rem] text-[#5f5f5f]">
            <Date dateString={date} />
          </small>
        </div>
        <Image
          priority
          src={`/images/` + id + '.png'}
          className="h-[120px] items-center rounded-sm object-cover"
          width={145}
          height={120}
          alt="post thumbnail"
        />
      </div>
      <div className="mb-[1rem] h-[1px] w-full bg-slate-300" />
    </>
  )
}
