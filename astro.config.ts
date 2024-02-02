import type { AstroUserConfig } from 'astro/config';
import AstroCompress from 'astro-compress';
import sitemap from '@astrojs/sitemap';
import { ChangeFreqEnum } from '@astrojs/sitemap';
import AstroRobotsTxt from 'astro-robots-txt';
import rehypeExternalLinks from 'rehype-external-links';
import type { Options as rehypeExternalLinksOptions } from 'rehype-external-links';
import { Features, browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';
import reduceRemixicon from './lib/ReduceRemixicon';
import usedIcon from './lib/UsedIcon';

const domain = 'https://blog.qoqyir.com';

export default {
  site: domain,
  base: '/',
  trailingSlash: 'never',
  redirects: {},
  output: 'static',
  root: '.',
  srcDir: './src',
  publicDir: './public',
  outDir: './dist',
  cacheDir: './node_modules/.astro',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: page => page !== domain + '/404',
      serialize: item => {
        if (domain + '/' === item.url) {
          item.changefreq = ChangeFreqEnum.MONTHLY;
          item.lastmod = new Date().toISOString();
          item.priority = 1.0;
        }
        return item;
      },
    }),
    AstroRobotsTxt(),
    AstroCompress(),
  ],
  build: {
    format: 'file',
    assets: '_astro',
    inlineStylesheets: 'auto',
  },
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      experimentalThemes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: false,
    },
    smartypants: true,
    remarkRehype: {
      footnoteLabel: '注释',
      footnoteBackLabel: (referenceIndex, rereferenceIndex) =>
        '返回引用 ' + (referenceIndex + 1) + (rereferenceIndex > 1 ? '-' + rereferenceIndex : ''),
      footnoteBackContent: (referenceIndex, rereferenceIndex) => ({
        type: 'element',
        tagName: 'i',
        properties: {
          className: 'ri-arrow-go-back-line',
        },
        children: [],
      }),
    },
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          rel: ['nofollow', 'noopener', 'noreferrer'],
          target: '_blank',
          // append to the end of the a-tags
          // content: { type: 'raw', value: '<i class="ri-external-link-line"></i>' },
        } satisfies rehypeExternalLinksOptions,
      ],
    ],
  },
  vite: {
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        targets: browserslistToTargets(browserslist('> 0.25%')),
        include: Features.VendorPrefixes | Features.Nesting | Features.Colors,
        unusedSymbols: reduceRemixicon(usedIcon),
      },
    },
    build: {
      target: 'modules',
      cssCodeSplit: true,
      minify: 'esbuild',
      assetsInlineLimit: 4096,
      // cssMinify: 'lightningcss',
      cssMinify: 'esbuild',
    },
  },
  devToolbar: {
    enabled: false,
  },
} satisfies AstroUserConfig;
