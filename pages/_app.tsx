import type { AppProps } from 'next/app'
import type { NextraThemeLayoutProps } from 'nextra'

export default function App({ Component, pageProps }: AppProps) {
  const { themeConfig, ...props } = pageProps as NextraThemeLayoutProps
  return <Component {...props} />
}
