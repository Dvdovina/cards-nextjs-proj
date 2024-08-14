import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import Head from "next/head";
import { useGetItemsQuery } from "../redux/apiSlice";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  const { data, error, isLoading } = useGetItemsQuery(undefined);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <>
      <Head>
        <title>Cat Facts</title>
        <meta name="description" content="Cat Facts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Cat Facts</h1>
          <section className={styles.cards}>
            <Swiper
              spaceBetween={20} 
              slidesPerView={3} 
              loop={true} 
              style={{ width: '100%' }}
            >
              {data?.map((item: any, index: number) => (
                <SwiperSlide key={index}>
                  <div className={styles.card}>
                    <p className={styles.paragraph}>
                      {item.text.length > 100
                        ? item.text.substring(0, 100) + "..."
                        : item.text}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
          <Link href="/view-all">
            <button type="button" className={styles.viewAllButton}>
              View All
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}

