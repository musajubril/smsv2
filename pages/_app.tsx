import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['400'],
  subsets: ['latin'],
});



const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
    <QueryClientProvider client={queryClient}>
     <Component {...pageProps} />
    </QueryClientProvider>
    </div>
  )
}
