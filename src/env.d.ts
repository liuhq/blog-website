/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type SiteRouter = Readonly<{
  params: Readonly<{
    home: string
    blog: string
    published: string
    tags: string
    about: string
    images: string
  }>
  ROOT: string
  HOME: string
  BLOG: string
  PUBLISHED: string
  TAGS: string
  ABOUT: string
  IMAGES: string
  path: (...args) => string
}>

type SiteConfig = Readonly<{
  title: string
  homeTitle: Readonly<{
    colorPart: string
    normalPart: string
  }>
  author: string
  lang: string
  description: string
  keywords: ReadonlyArray<string>
  profile: Readonly<{
    avatar: ReadonlyArray<string>
    description: string
    email: string
    socialLink: ReadonlyArray<{ iconName: string; link: string }>
  }>
  navigator: ReadonlyArray<{ name: string; link: string }>
  latestBlogs: number
  pageSize: number
  footer: Readonly<{
    since: number
    authorLink: string
  }>
  breadCrumbsMap: Record<string, string>
  breadCrumbs: {
    pagePrefix: string
    pageSuffix: string
  }
  allCategories: string
  uncategorized: string
}>
