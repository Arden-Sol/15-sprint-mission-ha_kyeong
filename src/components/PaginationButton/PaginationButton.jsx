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
    <>
      <button onClick={handlePrevious}>이전</button>
      {makeButtonsArray().map((i) => (
        <button onClick={() => goToPage(i)}>{i}</button>
      ))}
      <button onClick={handleNext}>이후</button>
    </>
  );
}
export default PaginationButton;
