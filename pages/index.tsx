import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components';

import Layout from '../components/Layout'
import { transparentize } from 'polished'

// import { Trans } from '@lingui/macro'
import { SiteConfig } from '../const/meta'
import metrics from '../const/metrics'
import Button from '../components/Button'
import { Defaults, Color, Font } from '../const/styles/variables'

const { title, descriptionShort, social } = SiteConfig

const Section = styled.section<{ hero?: boolean, flow?: string, fullWidth?: boolean }>`
  display: flex;
  width: 100%;
  max-width: ${({ fullWidth }) => fullWidth ? '100vw' : '148rem'};
  min-height: 100vh;
  flex-flow: ${({ flow }) => flow === 'column' ? 'column wrap' : 'row'};
  gap: 8rem;
  margin: 10rem auto;

  // Hero specific styling
  ${({ hero }) => hero && `
    margin: 0 auto;
    min-height: calc(100vh - 8.1rem);
  `}

  > div {
    display: flex;
    flex-flow: ${({ flow }) => flow === 'column' ? 'column wrap' : 'row wrap'};
    flex: ${({ flow }) => flow === 'column' ? '1 1 auto' : '1 1 50%'};
    justify-content: ${({ flow }) => flow === 'column' ? 'center' : 'flex-start'};
    align-items: center;
    align-content: center;
    gap: 5rem;
  }

   h1, h2, h3 {
    font-size: ${({ hero }) => hero ? "6.8rem" : "5.4rem"};
    line-height: 1.2;
    font-weight: ${Font.weightBold};
    margin: 0;
  }
`

const SubTitle = styled.p<{ maxWidth: number, align: string }>`
  display: inline-block;
  font-size: 1.7rem;
  color: ${Color.grey};
  font-weight: ${Font.weightNormal};
  line-height: 2;
  text-align: ${({ align }) => align ? align : "left"};
  max-width: ${({ maxWidth }) => maxWidth && `${maxWidth}rem`};
`

const SectionImage = styled.div<{ margin?: string, height?: string }>`
  width: 100%;
  height: ${({ height }) => height ? height : '100%'};
  margin: ${({ margin }) => margin ? margin : '0 auto'};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  position: relative;

    > img {
      object-fit: cover;
      width: 100%;
      height: inherit;
    }
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
`

const CowSlider = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: black;
  border: 1px solid grey;
  backdrop-filter: blur(60px);
  border-radius: 70px;
  max-height: 64rem;
`

const ScrollDownButton = styled.button`
  display: flex;
  width: 14rem;
  margin: 0 auto;
  left: 0;
  right: 0;
  flex: 0;
  position: absolute;
  bottom: 3.2rem;
  justify-content: center;
  align-items: center;
  background: none;
  border: 0;
  color: ${Color.grey};
  gap: 1rem;
  font-size: 1.6rem;
  animation: floating 2s linear 1s infinite alternate;

  &::before {
    content: "";
    display: block;
    width: 2rem;
    height: 2rem;
    background: url('images/icons/handDown.svg') no-repeat center/contain;
  }

  @keyframes floating {
    from {transform: translateY(0)}
    to {transform: translateY(-1rem)}
  }
`

const Metrics = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center;
  gap: 12rem;

  > div {
    flex: 0 1 auto;
    justify-content: center;
    align-items: flex-start;
    display: flex;
    flex-flow: column wrap;
    gap: 1.6rem;
  }

  > div > b {
    font-size: 7.4rem;
    font-weight: ${Font.weightNormal};
  }

  > div > i {
    font-style: normal;
    font-size: 1.5rem;
    color: ${transparentize(0.2, Color.grey)};
  }
`

const IconList = styled.ol`
  display: grid;
  max-width: 110rem;
  grid-template-columns: 1fr 1fr; 
  width: 100%;
  margin: 5.6rem auto 0;
  padding: 0;
  gap: 7rem 10rem;
`

const IconListItem = styled.li<{ icon?: string }>`
  display: grid;
  grid-template-columns: 6.5rem 1fr; 
  flex-flow: row;
  align-items: flex-start;
  justify-content: flex-start;
  justify-items: flex-start;
  align-content: flex-start;

  &::before {
    ${({ icon }) => icon && `
      content: "";
      height: 100%;
      width: 4.2rem;
      display: block;
      margin: -1rem 0 0;
      background: url(${icon}) no-repeat top/contain;
    `};
  }

  > span {
    display: flex;
    flex-flow: column wrap;
    flex: 1 1 auto;
    gap: 1.2rem;
  }

  > span > b {
    font-size: 2.4rem;
  }
  
  > span > p {
    font-size: 1.6rem;
    line-height: 1.6;
    color: ${Color.grey};
  }
`

const SocialList = styled.ol`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 110rem;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  gap: 7rem;
  list-style-type: none;
  color: ${Color.grey};
  font-weight: ${Font.weightNormal};

  > li > a {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 1.6rem;
    line-height: 1;
    text-decoration: none;
    color: inherit;
    font-weight: inherit;
    padding: 2rem;
    border-radius: 2rem;
    border: 0.1rem solid transparent;
    transition: color 0.2s ease-in-out, background 0.2s ease-in-out, border-color 0.2s ease-in-out;

    &:hover {
      background: ${transparentize(0.9, Color.orange)};
      border: 0.1rem solid ${Color.orange};
      color: ${Color.orange};
    }
  }

  > li > a > b {
    font-weight: inherit;
  }
`

export default function Home() {
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
          <SubTitle>COW Protocol enables top DeFi rates with MEV protection by settling orders using batch settlements and leverages P2P (CoW) orders in combination with fallback liquidity from AMMs and DEX aggregators.</SubTitle>

          <ButtonWrapper>
            <Button><Link href="/">API Docs</Link></Button>
            <Button variant='white'><Link href="/">Analytics</Link></Button>
          </ButtonWrapper>
        </div>
        <div>
          <CowSlider>
          </CowSlider>
        </div>
        <ScrollDownButton>Scroll down</ScrollDownButton>
      </Section>

      {/* 2nd section */}
      <Section flow={'column'}>
        <div>
          <SectionImage margin={'0 auto -15rem'}><img loading="lazy" src="/images/cowPrinter.jpg" /></SectionImage>
          <h2>A fast growing protocol</h2>
          <SubTitle align="center">Getting you better prices, zero revert rates, <br />MEV protection and gas costs savings. <Link href="/">View analytics</Link></SubTitle>
          <Metrics>
            {metrics.map(({ label, value }) =>
              <div>
                <b>{value}</b>
                <i>{label}</i>
              </div>
            )}
          </Metrics>
        </div>
      </Section>

      {/* 3rd section */}
      <Section flow={'column'}>
        <div>
          <SectionImage margin={'0 auto -6rem'}><img loading="lazy" src="/images/barn.jpg" /></SectionImage>
          <h3>More than a meta DEX aggregator</h3>
          <IconList>

            <IconListItem icon="images/icons/equal.svg">
              <span>
                <b>Uniform clearing prices</b>
                <p>Using <Link href="/">batch auctions</Link>, all trades within the same block are guaranteed to receive the same price regardless of their execution order.</p>
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
        </div>
      </Section>

      {/* 4th section */}
      <Section flow={'column'}>
        <div>
          <h3>The life cycle of a CoW order</h3>
          <SubTitle align='center'>The protocol improves prices for users by batching trades, finding coincidence of wants (CoWs) <br />and tapping into all on chain liquidity - including aggregators. <Link href="#">Read More</Link></SubTitle>
          <SectionImage margin={'0'}><img loading="lazy" src="/images/how-it-works.jpg" /></SectionImage>
        </div>
      </Section>

            {/* Dev section */}
            <Section hero>
        <div>
          <h1>DeFi liquidity protocol with
            MEV protection</h1>
          <SubTitle>COW Protocol enables top DeFi rates with MEV protection by settling orders using batch settlements and leverages P2P (CoW) orders in combination with fallback liquidity from AMMs and DEX aggregators.</SubTitle>

          <ButtonWrapper>
            <Button><Link href="/">API Docs</Link></Button>
            <Button variant='white'><Link href="/">Analytics</Link></Button>
          </ButtonWrapper>
        </div>
        <div>
          <CowSlider>
          </CowSlider>
        </div>
        <ScrollDownButton>Scroll down</ScrollDownButton>
      </Section>

      {/* 5th section */}
      <Section flow={'column'} fullWidth>
        <div>
          <SectionImage margin={'0 0 -7rem'} height={'78rem'}>
            <img loading="lazy" src="/images/cow-dark-forest.jpg" />
          </SectionImage>
        </div>

        <div>
          <h3>Your guardian in the dark forest</h3>

          <IconList>
            <IconListItem icon="images/icons/equal.svg">
              <span>
                <b>Uniform clearing prices</b>
                <p>Using <Link href="/">batch auctions</Link>, all trades within the same block are guaranteed to receive the same price regardless of their execution order.</p>
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
      </Section>

      {/* 6th section */}
      <Section flow={'column'}>
        <div>
          <h3>Join the community</h3>
          <SubTitle align={'center'} maxWidth={62}>Learn more about COW Protocol, chat with the team, others in the community, and have your say in shaping the future of decentralized finance.</SubTitle>
          <SocialList>
            {Object.keys(social).map((item) =>
              <li>
                <a href={social[item].url} target="_blank" rel="noopener nofollow">
                  <img src={`images/icons/${social[item].label.toLowerCase()}.svg`}></img>
                  <b>{social[item].label}</b>
                </a>
              </li>
            )}
          </SocialList>
        </div>
      </Section>


    </Layout>
  )
}