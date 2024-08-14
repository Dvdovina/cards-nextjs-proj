import { useGetItemsQuery } from '../redux/apiSlice';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function ViewAllPage() {
  const { data, error, isLoading } = useGetItemsQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <div className={styles.grid}>
        {data?.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.imageUrl} alt={item.title} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <Link href="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}