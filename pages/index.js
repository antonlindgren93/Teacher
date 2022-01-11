import { useState, useEffect, useMemo, createContext } from "react";
import Head from "next/head";
import Image from "next/image";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import styles from "../styles/Home.module.css";
import TeacherCard from "../components/Layout/TeacherCard";
import CategoryBannner from "../components/Layout/CategoryBanner";
import HeroSection from "../components/Layout/HeroSection";
import Footer from "../components/Layout/Footer";
import Link from "next/link";
import Header from "../components/Layout/Header";
import { UserContext } from "../components/Layout/UserContext";

export const auth = getAuth();
export default function Home({ loggedIn }) {
  // const [user, setUser] = useState(null);

  // const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user: " + user.email + " is logged in");
      } else {
        console.log("no user is logged in");
      }
    });
  }, []);

  return (
    <div>
      <UserContext.Provider value={loggedIn}>
        <Header />
        <HeroSection />
        {/* <CategoryBannner
          categoryTitle="Most Popular"
          cards={[
            <TeacherCard
              title="Stock trader"
              image="/testImage.jpeg"
              totalReviewers="24k"
            />,
            <TeacherCard
              title="Hair stylist"
              image="/image2.jpeg"
              totalReviewers="2k"
            />,
            <TeacherCard
              title="IG expert"
              image="/image5.jpeg"
              totalReviewers="99.66k"
            />,
            <TeacherCard
              title="Carpenter"
              image="/image4.jpeg"
              totalReviewers="35.23k"
            />,
            ,
            <TeacherCard
              title="Programmer"
              image="/image3.jpeg"
              totalReviewers="76.23k"
            />,
          ]}
        /> */}

        <Footer />
      </UserContext.Provider>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
