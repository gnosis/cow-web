import styled from 'styled-components';
import Image from 'next/image'
import Link from 'next/link'

import { LayoutProps } from '.'
import { SiteConfig } from '../../const/meta'
import { mainMenu } from '../../const/menu'
import Button from '../Button'
import { Color, Font } from '../../const/styles/variables'

const LogoImage = 'images/logo.svg'
const { title } = SiteConfig

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  margin: 2.4rem auto 5.6rem;
`

const Menu = styled.ol`
  display: flex;
  list-style: none;
  font-size: ${Font.sizeDefault};
  color: ${Color.grey};

  > li:not(:last-of-type) {
    margin: 0 3.6rem 0 0;
  }

  > li > a {
    font-size: inherit;
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${Color.white};
    }
  }
`

const Logo = styled.div`
  width: 17rem;
  height: 5.7rem;
  background: url(${LogoImage}) no-repeat center/contain;
  cursor: pointer;
`

export default function Header(props: LayoutProps) {
  const { home = false } = props

  return (
    <Wrapper>
      <Link href="/">
        <Logo />
      </Link>

      <Menu>
        {mainMenu.map(({ id, title, url }) => (
          <li key={id}>
            <Link href={url}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </Menu>

      <Button><Link href="/">Trade on CowSwap</Link></Button>

    </Wrapper>
  )
}