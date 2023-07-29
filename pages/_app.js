//for google font
import { Roboto } from "@next/font/google";
//for local font
// import localFont from '@next/font/local'
import "../src/styles/common.scss";

const fontPrimary = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

// const locFont = localFont({
//   src: [
//     {
//       path: './Roboto-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './Roboto-Italic.woff2',
//       weight: '400',
//       style: 'italic',
//     },
//     {
//       path: './Roboto-Bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: './Roboto-BoldItalic.woff2',
//       weight: '700',
//       style: 'italic',
//     },
//   ],
// })

function MyApp({ Component, pageProps }) {

  return (
    <>
      <style jsx global>{`
        html,
        body {
          font-family: ${fontPrimary.style.fontFamily};
          --bs-body-font-family: ${fontPrimary.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
