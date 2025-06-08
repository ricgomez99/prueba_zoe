import { useState } from "react";
import { Advisor } from "@/app/types";
import ItmesList from "../ItemsList";
import useAdvisorsContext from "@/app/hooks/useAdvisorsContext";
import { useRouter } from "next/navigation";
import styles from "./pagination.module.css";
import PaginationButton from "../PaginationButton";

interface Params {
  items: Advisor[];
  itemsPerPage: number;
  length: number;
}

export default function Pagination({ itemsPerPage, length, items }: Params) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items?.slice(indexOfFirstItem, indexOfLastItem);
  const paginationItems = [];
  const { saveAdvisorId } = useAdvisorsContext();
  const router = useRouter();

  for (let i = 1; i <= Math.ceil(length / itemsPerPage); i++) {
    paginationItems.push(i);
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSeeDetails = (id: string) => {
    saveAdvisorId(id);
    router.push(`/advisors/${id}`);
  };

  return (
    <article className={styles.paginate_container}>
      <ItmesList data={currentItems} onClick={handleSeeDetails} />
      <div className={styles.paginate_controllers}>
        <PaginationButton
          iconAlt="left arrow"
          iconSrc="./prev.svg"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
        />

        {paginationItems &&
          paginationItems.map((page) => (
            <button
              onClick={() => handlePageChange(page)}
              key={page}
              className={
                page === currentPage
                  ? styles.active_page_button
                  : styles.inactive_page_button
              }>
              {page}
            </button>
          ))}
        <PaginationButton
          iconAlt="right arrow"
          iconSrc="./next.svg"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
        />
      </div>
    </article>
  );
}
