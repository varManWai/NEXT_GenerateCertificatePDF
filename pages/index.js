import Image from "next/image";
import dynamic from "next/dynamic";
import { useRef } from "react";

import GeneratePDF from "../components/GeneratePDF";
import styles from "../styles/Home.module.css";
export default function Home() {
  // const GeneratePDF = dynamic(()=>import("./../src/components/GeneratePDF"),{ssr:false});

  const ref = useRef();

  return (
    <div className={styles.main}>
      <div className={styles.content} ref={ref}>
        <div>
          <div className={styles.subContent}>
            <h1 className={styles.userName}>Lai Man Wai</h1>
            {/* <img
          id="image"
          src="/example.jpg"
          width="50"
          height="50"
        /> */}
            <hr style={{ width: "100%" }} />
            <p id="text" className={styles.paragraph}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              animi!
            </p>
            <p id="text" className={styles.paragraph2}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              animi!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              animi!
            </p>
          </div>
          <div className={styles.subContent2}>
            <img src="/signature2.png" alt="this is the signature" className={styles.signature} />
            <hr style={{ width: "100%" }} />
            <img src="/logo.svg" alt="this is the credBLOCK logo" className={styles.logo} />
          </div>
        </div>
      </div>
      <GeneratePDF html={ref} />
    </div>
  );
}
