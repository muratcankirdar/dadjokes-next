import {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import Joke from '../../components/Joke'
import Pagination from '../../components/Pagination';
import styles from '../../styles/Home.module.css'
import {useRouter} from 'next/router';

export default function Jokes() {
  const [jokes, setJokes] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (!router.query.page) {
      router.push('/jokes?page=1');
    }
  }, [router.isReady]);

  const getJokes = useCallback(() => {
    axios.get(`https://icanhazdadjoke.com/search?page=${router.query.page}`)
      .then(({data}) => {
        const {total_pages: totalPages, results} = data;
        setJokes(results);
        setTotalPages(totalPages);
      });
  }, [router.isReady, router.query.page]);

  useEffect(() => {
    getJokes();
  }, [getJokes]);

  return (
    <div className={styles.container}>
      {jokes.map(joke => (
        <Joke joke={joke.joke} id={joke.id} key={joke.id}/>
      ))}
      <Pagination totalPages={totalPages}/>
    </div>
  )
}
