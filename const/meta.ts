export const SiteConfig = {
  title: 'CoW Protocol',
  description: 'Ethereums MetaDEX Aggregator built by Gnosis. It allows users to trade tokens with MEV protection while using ETH-less orders that are settled p2p among users or into the best on-chain liquidity pool.',
  descriptionShort: 'Ethereums MetaDEX Aggregator',
  url: { production: "https://cowswap.exchange" },
  social: {
    twitter: {label: 'Twitter', account: '@MEVprotection', url:'https://twitter.com/mevprotection'},
    discord: {label: 'Discord', url:'https://chat.cowswap.exchange/'},
    github: {label: 'GitHub', url:'https://github.com/gnosis/gp-v2-contracts'},
    forum: {label: 'Forum', url:'https://forum.gnosis.io/'},
  }
}

export const Meta = `
  <meta name="description" content=${SiteConfig.description}/>
  <meta name="theme-color" media="(prefers-color-scheme: light)" content="white" />
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#163861" />

  <link rel="shortcut icon" type="image/png" href="/favicon.png" />
  <link rel="apple-touch-icon" sizes="192x192" href="/images/logo-square-192.png" />
  <link rel="apple-touch-icon" sizes="512x512" href="/images/logo-square-512.png" />

  <meta property="og:type" content="website" />
  <meta property="og:title" content=${SiteConfig.title} />

  <meta property="og:description" content=${SiteConfig.description} />
  <meta property="og:image" content=${SiteConfig.url.production + "/images/og-meta-cowswap.png"} />
  <meta property="og:url" content=${SiteConfig.url.production} /> {/* TODO: Add URL */}

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content=${SiteConfig.social.twitter.account} />
  <meta name="twitter:title" content=${SiteConfig.title} />
  <meta name="twitter:image" content=${SiteConfig.url.production + "/images/og-meta-cowswap.png"} />
`