import "../styles/Pagination.css"
import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled } from "react-icons/tb";

function Pagination({page, totalPages, onPrev, onNext, setPage}) {
  return (
    <div className="pagination">
      <button onClick={onPrev} disabled={page === 1}><TbPlayerTrackPrevFilled /></button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={page === i + 1 ? "active-page" : ""}
        >
          {i + 1}
        </button>
      ))}
      <button onClick={onNext} disabled={page === totalPages}><TbPlayerTrackNextFilled /></button>
    </div>
  )
}

export default Pagination