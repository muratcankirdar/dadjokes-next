import {useEffect} from 'react';
import {useRouter} from 'next/router';
import styles from '../styles/Home.module.css';

const Pagination = () => {
  const router = useRouter();
  const loadPage = (page) => {
    const nextPage = Number(router.query.page) + page;

    router.push(`/jokes?page=${nextPage}`);
  };

  return (
    <div className={styles.pagination}>
      <button onClick={() => loadPage(-1)}>
        Previous Page
      </button>

      <button onClick={() => loadPage(1)}>
        Next page
      </button>
    </div>
  );
};

export default Pagination;
