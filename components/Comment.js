import { useEffect, useRef } from 'react'

export default function Comment() {
  const commentsEl = useRef(null)

  useEffect(() => {
    const scriptEl = document.createElement('script')
    scriptEl.async = true
    scriptEl.src = 'https://utteranc.es/client.js'
    scriptEl.setAttribute('repo', 'jongjinnn/blog')
    scriptEl.setAttribute('issue-term', 'pathname')
    scriptEl.setAttribute('theme', 'github-light')
    scriptEl.setAttribute('crossorigin', 'anonymous')
    commentsEl.current?.appendChild(scriptEl)
  }, [])

  return (
    <>
      <hr className="mb-[1rem] mt-[3rem]" />
      <section ref={commentsEl} />
    </>
  )
}
