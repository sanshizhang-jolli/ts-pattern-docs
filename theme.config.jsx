/** @type {import('nextra-theme-docs').DocsThemeConfig} */
export default {
  logo: <span style={{ fontWeight: 700 }}>TS-Pattern</span>,
  project: {
    link: 'https://github.com/gvergnaud/ts-pattern'
  },
  docsRepositoryBase: 'https://github.com/sanshizhang-jolli/ts-pattern-docs/blob/main',
  footer: {
    text: 'TS-Pattern Documentation · MIT License'
  },
  useNextSeoProps() {
    return { titleTemplate: '%s – TS-Pattern' }
  }
}
