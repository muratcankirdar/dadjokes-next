import { useRouter } from 'next/router'
import styles from '../styles/Pagination.module.css'

const Pagination = ({ totalPages }) => {
  const router = useRouter()
  const loadPage = (page) => {
    const isFirstPage = +router.query.page + page === 0
    const isLastPage = totalPages === +router.query.page

    if ((!isFirstPage && page === -1) || (!isLastPage && page === 1)) {
      const nextPage = Number(router.query.page) + page
      router.push(`/jokes?page=${nextPage}`)
    }
  }

  return (
    <div className={styles.pagination}>
      <button onClick={() => loadPage(-1)}>Previous Page</button>

      <button onClick={() => loadPage(1)}>Next page</button>
    </div>
  )
}

export default Pagination
