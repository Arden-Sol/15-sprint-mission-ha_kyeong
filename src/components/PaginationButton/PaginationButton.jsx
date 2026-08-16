import styles from './PaginationButton.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function PaginationButton({ totalPages, currentPage, goToPage }) {
  const groupNum = Math.floor((currentPage - 1) / 5);
  const startNum = groupNum * 5 + 1;
  const endNum = Math.min(totalPages, startNum + 4);
  const makeButtonsArray = () => {
    const length = endNum - startNum + 1;
    return Array.from({ length }, (_, i) => i + startNum);
  };

  const handlePrevious = () => {
    goToPage(Math.max(currentPage - 1, 1));
  };

  const handleNext = () => {
    goToPage(Math.min(currentPage + 1, totalPages));
  };

  return (
    <div className={styles.PaginationButton}>
      <button onClick={handlePrevious} className={styles.previous}>
        <FaChevronLeft />
      </button>
      {makeButtonsArray().map((i) => (
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`${styles.number} ${i === currentPage ? styles.active : ''}`}
        >
          {i}
        </button>
      ))}
      <button onClick={handleNext} className={styles.nest}>
        <FaChevronRight />
      </button>
    </div>
  );
}
export default PaginationButton;
