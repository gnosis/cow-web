import styled from 'styled-components';

import Head from 'next/head'

import { PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'

export type LayoutProps = PropsWithChildren<{
}>

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
`

const Content = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
`

export default function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <>
      <Head>

      </Head>

      <Wrapper>
        <Header />

          <Content>{children}</Content>
          <Footer />

      </Wrapper>
    </>
  )
}