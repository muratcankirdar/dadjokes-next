import {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import Joke from '../../components/Joke'
import Pagination from '../../components/Pagination';
import styles from '../../styles/Home.module.css'
import {useRouter} from 'next/router';

export default function Jokes() {
  const [jokes, setJokes] = useState([])
  const router = useRouter();

  useEffect(() => {
    if (!router.query.page) {
      router.push('/jokes?page=1');
    }
  }, [router.isReady]);

  const getJokes = useCallback(() => {
    axios.get(`https://icanhazdadjoke.com/search?page=${router.query.page}`)
      .then(({data}) => {
        setJokes(data.results);
      });
  }, [router.isReady, router.query.page]);

  useEffect(() => {
    getJokes();
  }, [getJokes]);


  useEffect(() => {
    console.log(router.query.page);
  }, [router.isReady, router.query.page]);

  return (
    <div className={styles.container}>
      {jokes.map(joke => (
        <Joke joke={joke.joke} id={joke.id} key={joke.id}/>
      ))}
      <Pagination/>
    </div>
  )
}
