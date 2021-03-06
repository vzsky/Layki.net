import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { Global, css } from '@emotion/core'
import { CSSReset, ThemeProvider, ColorModeProvider } from '@chakra-ui/core'
import { theme } from '../config/config'

// codemirror import
import 'codemirror/lib/codemirror.css'

// carousel import
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

import '../codetheme/darkcode.css'
import '../codetheme/lightcode.css'

if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  require('codemirror/mode/clike/clike.js')
  require('codemirror/mode/python/python.js')
  require('codemirror/mode/xml/xml.js')
  require('codemirror/mode/javascript/javascript.js')
  require('codemirror/mode/css/css.js')
  require('codemirror/mode/django/django.js')
  require('codemirror/mode/shell/shell.js')
  require('codemirror/mode/jsx/jsx.js')
  require('codemirror/mode/haskell/haskell.js')

  require('codemirror/addon/selection/active-line.js')
  require('codemirror/addon/fold/foldgutter.css')
  require('codemirror/addon/fold/foldgutter.js')
  require('codemirror/addon/fold/brace-fold.js')
  require('codemirror/addon/fold/indent-fold.js')
}
//

import '../app.css'

const Full = () => (
  <Global
    styles={css`
      html,
      body,
      #__next {
        height: 100%;
        margin: 0;
      }
    `}
  />
)
export default ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <Head>
          <title>my99n</title>
        </Head>
        <CSSReset />
        <Component {...pageProps} />
        <Full />
      </ColorModeProvider>
    </ThemeProvider>
  )
}
