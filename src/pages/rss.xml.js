import rss, {pagesGlobToRssItems} from '@astrojs/rss'

export async function get() {
  return rss({
    title: 'My Blog',
    description: 'My blog description',
    site: 'https://danny.is',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-gb</language>`,
  })
}
