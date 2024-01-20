import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-sea_green text-seasalt " >
        <div className="p-6 max-w-sm mx-auto">
        <div className="flex justify-between items-center">
        <Link href='/dashboard'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
    </Link>
    <Link href='/dashboard'>
    <img src="/assets/LogoImg.png" width={50} height={50}/>
    </Link>  
    </div>
    <div className='mt-6'>
          <Main />
          </div>
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
