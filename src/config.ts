export const router: SiteRouter = {
  path(...args) {
    return args.join('/');
  },
  params: {
    home: '',
    blog: 'blog',
    published: 'published',
    tags: 'tags',
    about: 'about',
    images: 'images',
  },
  ROOT: import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL,
  get HOME() {
    return this.path(this.ROOT, this.params.home);
  },
  get BLOG() {
    return this.path(this.ROOT, this.params.blog);
  },
  get PUBLISHED() {
    return this.path(this.ROOT, this.params.published);
  },
  get TAGS() {
    return this.path(this.ROOT, this.params.tags);
  },
  get ABOUT() {
    return this.path(this.ROOT, this.params.about);
  },
  get IMAGES() {
    return this.path(this.ROOT, this.params.images);
  },
};

export const site: SiteConfig = {
  title: '霍尔勒斯的营地',
  homeTitle: {
    colorPart: '@霍尔勒斯',
    normalPart: ' 的营地',
  },
  author: 'Horace Liu',
  lang: 'zh-CN',
  description: "Horace's Campsite (霍尔勒斯的营地)",
  keywords: ['horace', 'hora', 'chiyu', 'blog', 'campsite', 'astro'],
  profile: {
    avatar: [router.path(router.IMAGES, 'avatar', 'avatar_001_x256.webp'), '(～￣▽￣)～'],
    description:
      '你好呀(o゜▽゜)o☆~ 霍尔勒斯，一名前端技术 & 游戏开发爱好者，喜欢到捣鼓新奇玩意儿，容易掉入意想不到的脑洞中，从此沉沦白日梦境（bushi）；不时会在此营地记录一些经验所得、心境感受以及各类脑洞设定，欢迎交流讨论 yoヾ(≧ ▽ ≦)ゝ',
    email: 'hora.liu@outlook.com',
    socialLink: [
      { iconName: 'chat-private', link: 'https://matrix.to/#/@liuhq:gitter.im' },
      { iconName: 'github', link: 'https://github.com/liuhq' },
      { iconName: 'bilibili', link: 'https://www.bilibili.com' },
      { iconName: 'twitter', link: 'https://twitter.com' },
      { iconName: 'reddit', link: 'https://www.reddit.com' },
    ],
  },
  navigator: [
    { name: '文章', link: router.PUBLISHED },
    { name: '标签', link: router.TAGS },
    { name: '关于', link: router.ABOUT },
  ],
  latestBlogs: 5,
  pageSize: 10,
  footer: {
    since: 2022,
    authorLink: 'https://qoqyir.com',
  },
  breadCrumbsMap: {
    published: '文章',
    tags: '标签',
  },
  breadCrumbs: {
    pagePrefix: '(第 ',
    pageSuffix: ' 页)',
  },
  allCategories: '全部',
  uncategorized: '其它',
};
