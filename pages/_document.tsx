import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id="portal" /> //out portal is here...
          <NextScript />
        </body>
      </Html>
    );
  }
}
