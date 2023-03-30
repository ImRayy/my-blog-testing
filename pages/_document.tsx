import { Html, Main, NextScript, Head } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth ">
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <body className="dark:bg-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
