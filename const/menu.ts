import { siteConfig } from './meta'

export const mainMenu = [
  { id: 0, title: 'Developers', url: '/' },
  { id: 1, title: 'About', url: '/' },
  { id: 2, title: 'Community', url: '/' },
  { id: 3, title: 'Analytics', url: '/' },
]

export const footerMenu = [
  {
    id: 0, title: 'CoW Protocol', links: [
      { title: 'About', url: '/' },
      { title: 'Analytics', url: '/' },
      { title: 'Sitemap', url: '/' },
    ]
  },
  {
    id: 1, title: 'Developers', links: [
      { title: 'API Documentation', url: '/' },
      { title: 'GitHub', url: '/' },
      { title: 'Audit', url: '/' },
      { title: 'Bug bounty', url: '/' },
    ]
  },
  {
    id: 2, title: 'Support', links: [
      { title: 'Discord', url: siteConfig.social.discord.url },
      { title: 'Terms of service', url: '/' },
      { title: 'Privacy Policy', url: '/' },
    ]
  },
]

