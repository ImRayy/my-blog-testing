import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/markdown.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { disableCache } from "@iconify/react";
disableCache("local");

function MyApp({ Component, pageProps, router }: AppProps) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    router.events.on("routeChangeStart", () => setProgress(40));
    router.events.on("routeChangeComplete", () => setProgress(100));
    router.events.on("routeChangeError", () => setProgress(100));
    return () => {
      router.events.off("routeChangeStart", () => setProgress(40));
      router.events.off("routeChangeComplete", () => setProgress(100));
      router.events.on("routeChangeError", () => setProgress(100));
    };
  }, [router.events]);
  return (
    <>
      {/* Theme provider is an easy approach to switch between light, dark and system theme */}
      <ThemeProvider attribute="class">
        <LoadingBar
          color="#dc1a1a"
          progress={progress}
          waitingTime={800}
          onLoaderFinished={() => setProgress(0)}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
