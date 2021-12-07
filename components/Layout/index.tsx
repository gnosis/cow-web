import styled from 'styled-components';

import Head from 'next/head'
import Link from 'next/link'

import { PropsWithChildren } from 'react'

import { Trans } from '@lingui/macro'
import Header from './Header'
import Footer from './Footer'

export type LayoutProps = PropsWithChildren<{
  home?: boolean
}>

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
`

const WrapperInner = styled.div`
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 148rem;
`

const Content = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
`

export default function Layout(props: LayoutProps) {
  const { children, home = false } = props

  return (
    <>
      <Head>

      </Head>

      <Wrapper>
        <WrapperInner>
          <Header home={home} />
          <Content>{children}</Content>
          <Footer />
        </WrapperInner>
      </Wrapper>
    </>
  )
}