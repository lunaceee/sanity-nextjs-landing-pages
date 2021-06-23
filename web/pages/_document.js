import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import client from '../client'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return client.fetch('*[_id == "global-config"] {lang}.lang[0]').then(lang => {
      return { ...initialProps, lang }
    })
  }

  render() {
    return (
      <Html lang={this.props.lang || 'en'}>
        <Head />
        <body>
          <div id="om-itpt2mebuy3izdzynnb4-holder"></div>
          <Main />
          <NextScript />
          <script type="text/javascript" src="https://a.omappapi.com/app/js/api.min.js" data-account="139257" data-user="126907" async></script>
        </body>
      </Html>
    )
  }
}
