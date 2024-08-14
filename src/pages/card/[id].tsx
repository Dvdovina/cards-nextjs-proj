import { useRouter } from "next/router";
import { useGetItemsQuery } from "../../redux/apiSlice";
import Head from "next/head";
import styles from "../../styles/CardDetail.module.css";
import Link from "next/link";

export default function CardDetail() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useGetItemsQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  const item = data?.find((item: any) => item._id === id);

  if (!item) return <div>Card not found</div>;

  return (
    <>
      <Head>
        <title>Cat Fact</title>
        <meta name="description" content="Cat Fact Detail" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Cat Fact</h1>
          <div className={styles.card}>
            <p className={styles.paragraph}>{item.text}</p>
          </div>
          <Link href="/view-all">
            <button type="button" className={styles.backButton}>
              Back to List
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
