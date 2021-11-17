import Link from 'next/link'

import { useRouter } from 'next/router'
import cn from 'classnames'
import { CONTRACTS_VERSION, WEB_VERSION } from '../../constants'

export default function Footer() {
  const { locale, asPath } = useRouter()

  return (
    <footer>
      Languages:
      <Link href={asPath} locale="en">
        <a className={cn({
          active: locale === "en"
        })}>English</a>
      </Link> | <Link href={asPath} locale="es">
        <a className={cn({
          active: locale === "es"
        })}>Español</a>
      </Link>
      <span className="version">Web v{WEB_VERSION}, Contracts v{CONTRACTS_VERSION}</span>
      <style jsx>{`
        .version {
          position: absolute;
          right: 1.5em;
          bottom: 1.5em;
          color: #5a5a5a;
          font-size: 0.75em;
        }
      `}</style>
    </footer>
  )
}