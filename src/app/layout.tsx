import type { Metadata } from "next";
import "./globals.css";
import { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ContextMenu } from "@/components/contextMenu";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>
type Page = {
  id:number;
  title:string;
  body:string;
}
export default async function RootLayout({
  children,
}: RootLayoutProps) {
  const option = {
    next: {
      revalidate:0
    }
  }
  
  const resp = await fetch('http://localhost:9999/pages', option);
  const data:Page[] = await resp.json();
  console.log('data', data);
  const liTags = data.map((item)=>{
    return <li key={item.id}><Link href={`/read/${item.id}`}>{item.title}</Link></li>
  });
  return (
    <html lang="en">
      <body>
        <input type="text" placeholder="검색" />
        <h1><Link href="/">WEB</Link></h1>
        <ol>
          {liTags}
        </ol>
        {children}
        <ul>
          <li><Link href="/create">Create</Link></li>
          <ContextMenu />
        </ul>
      </body>
    </html>
  );
}
