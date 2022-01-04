import Head from 'next/head'
import { GetStaticProps } from 'next'

import { ExternalLink } from '@/const/styles/global'
import { siteConfig } from '@/const/meta'
import metrics from '@/const/metrics'
import { GET_QUOTE } from '@/const/api'

import Layout from '@/components/Layout'
import { ButtonWrapper } from '@/components/Button'
import CowSlider from '@/components/CowSlider'
import { Section, SubTitle, ScrollDownButton, SectionImage, IconList, IconListItem, Metrics, CheckList, ApiTool, ApiCurlCommand, ApiOutput, ApiParams } from '../const/styles/pages/index'
import SocialList from '@/components/SocialList'
import Button from '@/components/Button'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { default as dark } from 'react-syntax-highlighter/dist/esm/styles/prism/coldark-dark';

export default function Home({ metricsData, siteConfigData }) {
  const { title, descriptionShort, social, url } = siteConfigData

  return (
    <Layout>

      <Head>
        <title>{title} - {descriptionShort}</title>
      </Head>

      {/* Hero/1st section */}
      <Section hero>
        <div>
          <h1>DeFi liquidity protocol with
            MEV protection</h1>
          <SubTitle lineHeight={2}>COW Protocol enables top DeFi rates with MEV protection by settling orders using batch settlements and leverages P2P (CoW) orders in combination with fallback liquidity from AMMs and DEX aggregators.</SubTitle>

          <ButtonWrapper>
            <Button href={url.docs} target="_blank" label="Documentation" />
            <Button variant='white' href={url.analytics} label='Analytics' target="_blank" rel="noopener nofollow" />
          </ButtonWrapper>
        </div>
        <div>
          <CowSlider />
        </div>
        <ScrollDownButton>Scroll down</ScrollDownButton>
      </Section>

      {/* 2nd section */}
      <Section flow={'column'}>
        <div>
          <SectionImage margin={'0 auto -18rem'} height={'68rem'}><img loading="lazy" src="/images/cowBelt.jpg" alt="A fast growing protocol" /></SectionImage>
          <h2>A fast growing protocol</h2>
          <SubTitle align="center">Getting you better prices, zero revert rates, <br />MEV protection and gas costs savings. <ExternalLink href="#">View analytics</ExternalLink></SubTitle>
          <Metrics>
            {metricsData.map(({ label, value }, i) =>
              <div key={i}>
                <b>{value}</b>
                <i>{label}</i>
              </div>
            )}
          </Metrics>
        </div>
      </Section>

      {/* 3rd section */}
      <Section flow={'column'} fullWidth id="about">
        <div>
          <SectionImage margin={'0 auto -6rem'}><img loading="lazy" src="/images/barn.jpg" alt="Meta DEX Aggregator" /></SectionImage>
          <h3>More than a meta DEX aggregator</h3>
          <IconList>

            <IconListItem icon="images/icons/equal.svg">
              <span>
                <b>Uniform clearing prices</b>
                <p>Using <a href="https://docs.cowswap.exchange/overview-1/batch-auctions" target="_blank" rel="noreferrer">batch auctions</a>, all trades within the same block are guaranteed to receive the same price regardless of their execution order.</p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/puzzle.svg">
              <span>
                <b>Superior on-chain DeFi liquidity</b>
                <p>All on-chain liquidity sources are continiously integrated which allows for getting the best on-chain prices.</p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/relation.svg">
              <span>
                <b>P2P Trades (CoW)</b>
                <p>Direct P2P liquidity matching improves prices while adding fairness for the users.</p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/timeMoney.svg">
              <span>
                <b>JIT (Just in time) Price</b>
                <p>Trades without ETH are made possible by having the solvers use either your sell or buy token, to pay for the transaction fees.</p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/trading.svg">
              <span>
                <b>Professional trading experience</b>
                <p>Avoid gas overhead and failed transactions with signed meta transactions.  Free signed order cancellations. </p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/gas.svg">
              <span>
                <b>Gas efficient batch orders</b>
                <p>By using batch auctions, trades are bundled together making them much more gas efficient.</p>
              </span>
            </IconListItem>

          </IconList>
        </div >
      </Section >

      {/* 4th section */}
      < Section flow={'column'} >
        <div>
          <h3>The life cycle of a CoW order</h3>
          <SubTitle align='center'>The protocol improves prices for users by batching trades, finding coincidence of wants (CoWs) <br />and tapping into all on chain liquidity - including aggregators.
            {' '}<a href="https://docs.cowswap.exchange/overview-1/coincidence-of-wants" target="_blank" rel="noreferrer">Read More</a></SubTitle>
          <SectionImage margin={'0'}>
            <a href="/images/how-it-works.jpg" target="_blank" rel="nofollow noopener"><img loading="lazy" src="/images/how-it-works.jpg" alt="How it works" /></a>
            <ButtonWrapper className="mobileOnly"><Button label={'View Full Image'} href="/images/how-it-works.jpg" target="_blank" rel="nofollow noopener" /></ButtonWrapper>
          </SectionImage >
        </div >
      </Section >

      {/* 5th section */}
      <Section mobileSwitchOrder id="developers">
        <div>
          <ApiTool>
            <h4>Get a price quote</h4>
            <p>Example, how to get a price and fee quotes for selling 10 ETH for USDC.</p>

            <ApiParams>
              <span><b>WETH</b><small>sellToken</small></span>
              <span><b>USDC</b><small>buyToken</small></span>
              <span><b>10</b><small>sellAmountBeforeFee</small></span>
            </ApiParams>

            <ApiCurlCommand>
              <SyntaxHighlighter language="json" style={dark}>
                {GET_QUOTE}
              </SyntaxHighlighter>
            </ApiCurlCommand>

            {/* <ApiOutput>
              <b>Quoted order response:</b>
              <div>
                <span>curl</span> -X &apos;POST&apos; \ <br />
                &apos;https://protocol-mainnet.dev.gnosisdev.com/api/v1/quote&apos; \<br />
                -H &apos;accept: application/json&apos; \<br />
                -H &apos;Content-Type: application/json&apos; \<br />
                -d &apos;{'{'} <br />
                <span>&ldquo;sellToken&ldquo;:</span> &ldquo;0x6810e776880c02933d47db1b9fc05908e5386b96&ldquo;,<br />
                <span>&ldquo;buyToken&ldquo;:</span> &ldquo;0x6810e776880c02933d47db1b9fc05908e5386b96&ldquo;,<br />
                <span>&ldquo;receiver&ldquo;:</span> &ldquo;0x6810e776880c02933d47db1b9fc05908e5386b96&ldquo;,<br />
                <span>&ldquo;validTo&ldquo;:</span> 0,<br />
                <span>&ldquo;appData&ldquo;:</span> &ldquo;0x0000000000000000000000000000000000000000000000000000000000000000&ldquo;,<br />
                <span>&ldquo;partiallyFillable&ldquo;:</span> true,<br />
                <span>&ldquo;sellTokenBalance&ldquo;:</span> &ldquo;erc20&ldquo;,<br />
                <span>&ldquo;buyTokenBalance&ldquo;:</span> &ldquo;erc20&ldquo;,<br />
                <span>&ldquo;from&ldquo;:</span> &ldquo;0x6810e776880c02933d47db1b9fc05908e5386b96&ldquo;,<br />
                <span>&ldquo;kind&ldquo;:</span> &ldquo;sell&ldquo;,<br />
                <span>&ldquo;sellAmountBeforeFee&ldquo;:</span> &ldquo;1234567890&ldquo;<br />
                {'}'}
              </div>

            </ApiOutput> */}
          </ApiTool>
        </div>
        <div>
          <SectionImage margin={"0 0 -4rem -1rem"} width={"10rem"} height={"10rem"}>
            <img loading="lazy" src="/images/icons/plug.svg" alt="Plug-n-play" />
          </SectionImage >

          <h3>Plug-n-play trading protocol with just a few lines of code</h3>
          <SubTitle>Directly interact with the COW protocol to place, manage and settle your orders through a documented API interface.</SubTitle>

          <CheckList>
            <li>Fetch Quotes</li>
            <li>Create and cancel limit orders</li>
            <li>Manage orders across Ethereum, Rinkeby and Gnosis Chain.</li>
          </CheckList>

          <ButtonWrapper>
            <Button href={url.apiDocs} label='Explore API Docs' target="_blank" rel="noopener nofollow" />
            <Button href={url.docs} label="Documentation" target="_blank" rel="noopener nofollow" variant='white' />
          </ButtonWrapper>
        </div >
      </Section >

      {/* 6th section */}
      < Section flow={'column'} fullWidth >
        <div>
          <SectionImage margin={'0 0 -7rem'} height={'78rem'}>
            <img loading="lazy" src="/images/cow-dark-forest.jpg" alt="Guardian in the dark forest" />
          </SectionImage >
        </div >

        <div>
          <h3>Your guardian in the dark forest</h3>

          <IconList>
            <IconListItem icon="images/icons/equal.svg">
              <span>
                <b>Uniform clearing prices</b>
                <p>Using <a href="https://docs.cowswap.exchange/overview-1/batch-auctions" target="_blank" rel="noreferrer">batch auctions</a>, all trades within the same block are guaranteed to receive the same price regardless of their execution order.</p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/puzzle.svg">
              <span>
                <b>Superior on-chain DeFi liquidity</b>
                <p>All on-chain liquidity sources are continiously integrated which allows for getting the best on-chain prices.</p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/relation.svg">
              <span>
                <b>P2P Trades (CoW)</b>
                <p>Direct P2P liquidity matching improves prices while adding fairness for the users.</p>
              </span>
            </IconListItem>

            <IconListItem icon="images/icons/relation.svg">
              <span>
                <b>P2P Trades (CoW)</b>
                <p>Direct P2P liquidity matching improves prices while adding fairness for the users.</p>
              </span>
            </IconListItem>
          </IconList>
        </div>
      </Section >

      {/* 7th section */}
      < Section flow={'column'} id="community" >
        <div>
          <h3>Join the community</h3>
          <SubTitle align={'center'} maxWidth={62}>Learn more about COW Protocol, chat with the team, others in the community, and have your say in shaping the future of decentralized finance.</SubTitle>
          <SocialList social={social} />
        </div>
      </Section >

    </Layout >
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const siteConfigData = siteConfig
  const { social } = siteConfig
  const metricsData = metrics

  return {
    props: { metricsData, siteConfigData, social }
  }
}