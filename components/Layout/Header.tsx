import styled from 'styled-components';
// import Image from 'next/image'
import Link from 'next/link'
import { transparentize } from 'polished'

import { LayoutProps } from '.'
import { mainMenu } from '../../const/menu'
import Button from '../Button'
import { Color, Font } from '../../const/styles/variables'

const LogoImage = 'images/logo.svg'

const Wrapper = styled.header`
  z-index: 10;
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background: ${transparentize(0.4, Color.black)};
  backdrop-filter: blur(60px);
  padding: 2.4rem 5.6rem;
  margin: 0 auto;
`

const Menu = styled.ol`
  display: flex;
  list-style: none;
  font-size: ${Font.sizeDefault};
  color: ${Color.grey};
  padding: 0;
  margin: 0;

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
  width: 14rem;
  height: 5.7rem;
  background: url(${LogoImage}) no-repeat center/contain;
  cursor: pointer;
`

export default function Header(props: LayoutProps) {

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

      <Button paddingLR={2.4}><Link href="/">Trade on CowSwap</Link></Button>

    </Wrapper>
  )
}