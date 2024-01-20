import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-sea_green text-seasalt " >
        <div className="p-6 max-w-sm mx-auto">
        <Link href='/dashboard'>
    <img src="/assets/LogoImg.png" width={50} height={50}/>
    </Link> 
    <div className='mt-6'>
          <Main />
          </div>
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
