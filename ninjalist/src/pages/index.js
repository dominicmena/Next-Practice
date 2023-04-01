import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../../comps/Navbar";
import Footer from "../../comps/footer";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas'/>
      </Head>

      <div>
        <h1 className={styles.title}>Homepage</h1>

        <p className={styles.text}> latin </p>
        <p className={styles.text}> latin </p>
        <p className={styles.text}> latin </p>

        <Link href="/ninjas">
          <p>See Ninja Listing</p>
        </Link>
      </div>
    </>
  );
}
