import { useState } from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../const/styles/global'
import { Color, Font } from '../const/styles/variables'
import { transparentize } from 'polished'

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  height: 100%;
  background: ${Color.black};
  border: 0.1rem solid ${Color.border};
  backdrop-filter: blur(6rem);
  border-radius: 7rem;
  max-height: 64rem;
  padding: 4.8rem;
  font-size: ${Font.sizeDefault};
  color: ${Color.grey};
`

export const CowTop = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;

  > span {
    display: flex;
    flex-flow: column wrap;
    flex: 1 1 50%;
  }

  > span > b {
    font-size: 1.8rem;
    line-height: 1;
    color: ${Color.white};
  }

  > span > ol {
    display: flex;
    list-style-type: none;
    flex-flow: row;
    font-size: 1.3rem;
    padding: 0;
    gap: 2rem;
  }

  > span > ol > li {

  }

  > span > ol > li > i {
    color: ${Color.orange};
    font-style: normal;
  }
`

export const CowTabs = styled.div`
  flex: 1 1 50%;
  display: flex;
  font-size: 1.4rem;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid ${Color.border};
  color: ${Color.grey};
  padding: 0;
  border-radius: 4rem;
  gap: 0;
`

export const CowTabItem = styled.div<{ active?: boolean, position?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
  cursor: pointer;
  border-radius: 4rem;
  background: ${({ active }) => active ? transparentize(0.8, Color.orange) : 'transparent'};
  color: ${({ active }) => active ? Color.orange : 'inherit'};
  order: ${({ position }) => position ? position : '0'};
  line-height: 1;
  transition: background 0.2 ease-in-out, color 0.2 ease-in-out;
`

export const CowSliderDescription = styled.div`
  width: 100%;
  display: block;
  line-height: 1.2;
  font-size: 1.3rem;
  margin: 1.2rem 0 0;

  > a {
    display: inline;
  }
`

export const CowVisual = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;

  > img {
    width: 100%;
    object-fit: contain;
    height: 36.8rem;
  }
`

export const CowBarWrapper = styled.div`
  display: flex;
  width: 100%;
`

export const CowBar = styled.div<{ position?: number, percent?: number, network?: string }>`
  display: inline-block;
  width: ${({ percent }) => percent ? `${percent}%` : '0%'};
  height: 0.3rem;
  order: ${({ position }) => position ? position : '0'};

  &::after {
    content: attr(data-label);
    display: block;
  }
`

function getNetworkLabel(networkID) {
  switch (networkID) {
    case 'UNIV3':
      return 'Uniswap V3'
      break;
    case 'UNIV2':
      return 'Uniswap V2'
      break;
    case '0X':
      return '0x'
      break;
    case 'PSP':
      return 'ParaSwap'
      break;
    case 'BAL':
      return 'BALANCER'
      break;
    case 'COW':
      return 'CoW Protocol (P2P)'
      break;
    default:
      return 'Unkown Network'
  }
}

export default function CowSlider({ batches }) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Wrapper>
      <CowTop>
        <span>
          <b>Batch Settlement Example</b>
          <ol>
            <li>Orders: <i>12</i></li>
            <li>Gas per order: <i>~$30</i></li>
          </ol>
        </span>

        {Object.keys(batches).length > 0 && <CowTabs>
          {Object.keys(batches).map((item) =>
            <CowTabItem
              key={batches[item].id || 0}
              position={batches[item].id || 0}
              active={batches[item].id === activeTab || false}
              onClick={() => { setActiveTab(batches[item].id) }}
            >
              {batches[item].label}
            </CowTabItem>
          )}
        </CowTabs>}
      </CowTop>

      <CowSliderDescription>For some orders a CoW was found. Users saved both on individual gas costs and LP fees. <ExternalLink href="/" target="_blank" rel="noopener nofollow">View on Etherscan</ExternalLink>
      </CowSliderDescription>

      <CowVisual>
        <img src="images/cow-graph-partialCow.png" alt="Partial CoW" />
      </CowVisual>

      {Object.keys(batches).length > 0 && <CowBarWrapper>
        {Object.keys(batches).map(item =>
          batches[item].bars.map(bar => {
            { console.log(JSON.stringify(getNetworkLabel(bar.network))) }
            {
              bar.network && <CowBar
                key={bar.id || 0}
                position={bar.id}
                percent={bar.percent}
                network={bar.network}
                data-label={getNetworkLabel(bar.network)}
              />
            }
          })
        )}
      </CowBarWrapper>}
    </Wrapper>
  )
}