import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TeacherCard from "../components/Layout/TeacherCard";
import CategoryBannner from "../components/Layout/CategoryBanner";
import HeroSection from "../components/Layout/HeroSection";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategoryBannner
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
      />

      <footer className={styles.footer}>
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
      </footer>
    </div>
  );
}
