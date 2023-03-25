import { Html, Main, NextScript, Head } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth ">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="urf-8" />
        <meta name="Description" content=""></meta>
      </Head>
      <body className="dark:bg-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
