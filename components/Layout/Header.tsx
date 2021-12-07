import Image from 'next/image'
import Link from 'next/link'

import { LayoutProps, SITE_TITLE } from '.'

export default function Header(props: LayoutProps) {
  const { home = false } = props

  return (
    <header className="header">
      {home ? (
        <>
          <Image
            priority
            src="/favicon.png"
            height={144}
            width={144}
            alt={SITE_TITLE}
          />
          <h1>{SITE_TITLE}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <Image
                priority
                src="/favicon.png"

                height={108}
                width={108}
                alt={SITE_TITLE}
              />
            </a>
          </Link>
          <h2>
            <Link href="/">
              <a>{SITE_TITLE}</a>
            </Link>
          </h2>
        </>
      )}
      <style jsx>{`
        .header {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </header>
  )
}