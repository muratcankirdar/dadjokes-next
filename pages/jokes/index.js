import axios from 'axios'
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import Joke from '../../components/Joke'
import Pagination from '../../components/Pagination'
import Search from '../../components/Search'
import styles from '../../styles/Home.module.css'

export default function Jokes() {
  const [jokes, setJokes] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (!router.query.page) {
      router.push('/jokes?page=1')
    }
  }, [router.isReady])

  const getJokes = useCallback(() => {
    const { page } = router.query

    axios
      .get(`https://icanhazdadjoke.com/search?page=${page}`)
      .then(({ data }) => {
        const { total_pages: totalPages, results } = data
        setJokes(results)
        setTotalPages(totalPages)
      })
  }, [router.isReady, router.query.page])

  const handleInputChange = (e) => {
    const { value } = e.target
    setSearchTerm(value)
  }

  const handleSearch = () => {
    const url = `https://icanhazdadjoke.com/search?&term=${searchTerm}`
    axios.get(url).then(({ data }) => {
      setJokes(data.results)
    })
  }

  useEffect(() => {
    if (searchTerm === '') {
      router.push('/jokes?page=1')
    }
  }, [searchTerm, router.isReady])

  useEffect(() => {
    getJokes()
  }, [getJokes])

  return (
    <div className={styles.container}>
      <Search
        handleInputChange={handleInputChange}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />
      {jokes.map((joke) => (
        <Joke joke={joke.joke} id={joke.id} key={joke.id} />
      ))}
      {searchTerm === '' && <Pagination totalPages={totalPages} />}
    </div>
  )
}
