import styled from 'styled-components';

import Head from 'next/head'
import Link from 'next/link'

import { PropsWithChildren } from 'react'

import { Trans } from '@lingui/macro'
import Header from './Header'
import Footer from './Footer'

export const SITE_TITLE = 'CoW Protocol'
export const URL_PRODUCTION = "https://cowswap.exchange"

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
  background: grey;
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
        <meta
          name="description"
          content="Ethereum's MetaDEX Aggregator that allows to trade with MEV protection while using ETH-less orders that are settled p2p among users or the best AMM."
        />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="white" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#163861" />

        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/images/logo-square-192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/images/logo-square-512.png" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={SITE_TITLE} />

        <meta property="og:description" content="Ethereums MetaDEX Aggregator built by Gnosis. It allows users to trade tokens with MEV protection while using ETH-less orders that are settled p2p among users or into the best on-chain liquidity pool." />
        <meta property="og:image" content={URL_PRODUCTION + "/images/og-meta-cowswap.png"} />
        <meta property="og:url" content={URL_PRODUCTION} /> {/* TODO: Add URL */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MEVprotection" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:image" content={URL_PRODUCTION + "/images/og-meta-cowswap.png"} />
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