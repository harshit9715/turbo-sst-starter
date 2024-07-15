import { Button } from "@repo/ui/button";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Welcome to the Docs</h1>
      <p>This is a Next.js app deployed with Serverless Stack (SST).</p>
      <Button appName="docs">Click me</Button>
      <Image src="/vercel.svg" alt="Vercel Logo" width={200} height={200} />
    </div>
  );
}
