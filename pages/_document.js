import { Html, Head, Main, NextScript } from "next/document";
// import Head from 'next/head'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Mexecution is a Swiss founded company based in Mexico, help you to diversify your portfolio"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0" />
        <meta name="theme-color" content="#fff" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <title>Top menu </title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
