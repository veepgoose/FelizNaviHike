import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-sea_green text-seasalt " >
        <div className="p-6 container mx-auto">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
