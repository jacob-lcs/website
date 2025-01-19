import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { SkipNavLink } from "@reach/skip-nav";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7669803939408201"
            crossorigin="anonymous"
          ></script>
        </Head>
        <body>
          <SkipNavLink />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
