import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/markdown.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Theme provider is an easy approach to switch between light, dark and system theme */}
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
