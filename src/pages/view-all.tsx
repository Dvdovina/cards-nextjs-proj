import Head from "next/head";
import { useGetItemsQuery } from "../redux/apiSlice";
import styles from "../styles/ViewAll.module.css";
import Link from "next/link";

export default function ViewAll() {
  const { data, error, isLoading } = useGetItemsQuery(undefined);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <>
      <Head>
        <title>All Cat Facts</title>
        <meta name="description" content="View All Cat Facts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>All Cat Facts</h1>
          <section className={styles.cards}>
            {data?.map((item: any, index: number) => (
              <Link href={`/card/${item._id}`} key={index}>
                <div className={styles.card}>
                  <p className={styles.paragraph}>
                    {item.text.length > 100
                      ? item.text.substring(0, 100) + "..."
                      : item.text}
                  </p>
                </div>
              </Link>
            ))}
          </section>
          <Link href="/">
            <button type="button" className={styles.backButton}>
              Back to Home
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
