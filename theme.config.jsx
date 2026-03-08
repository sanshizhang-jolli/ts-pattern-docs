export default {
  logo: <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>TS-Pattern</span>,
  project: {
    link: 'https://github.com/gvergnaud/ts-pattern'
  },
  docsRepositoryBase: 'https://github.com/sanshizhang-jolli/ts-pattern-docs/blob/main',
  footer: {
    text: <span>TS-Pattern Documentation · MIT License</span>
  },
  useNextSeoProps() {
    return { titleTemplate: '%s – TS-Pattern' }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="The exhaustive Pattern Matching library for TypeScript with smart type inference." />
    </>
  )
}
