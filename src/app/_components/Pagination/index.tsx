import { useState } from "react";
import { Advisor } from "@/app/types";
import ItmesList from "../ItemsList";
import useAdvisorsContext from "@/app/hooks/useAdvisorsContext";
import { useRouter } from "next/navigation";

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
    <article>
      <ItmesList data={currentItems} onClick={handleSeeDetails} />
      <div>
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </button>
        )}
        {paginationItems &&
          paginationItems.map((page) => (
            <button onClick={() => handlePageChange(page)} key={page + 1}>
              {page}
            </button>
          ))}
        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage - 1)}>
            Next
          </button>
        )}
      </div>
    </article>
  );
}
