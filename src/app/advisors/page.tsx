"use client";
import useFetch from "../hooks/useFetch";
import { useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Modal from "../_components/Modal";
import { Advisor } from "../types";
import CreateAdvisorForm from "../_components/CreteAdvisorForm";
import Pagination from "../_components/Pagination";

const url = process.env.NEXT_PUBLIC_SERVER_URL;

export default function Advisors() {
  const [showModal, setShowModal] = useState(false);
  const { data, refetch } = useFetch<Advisor[]>(url as string);
  const searchParams = useSearchParams();

  const incomeParam = searchParams.get("income_value");
  const parsedIncome = incomeParam !== null ? parseInt(incomeParam) : 0;

  // Removed absolute values & additional (-)
  const minIncome = parsedIncome - 10000;
  const maxIncome = parsedIncome + 10000;

  const filteredData = data?.filter(
    (item: Advisor) => item.income >= minIncome && item.income <= maxIncome
  );

  const handleOpenModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <section>
      <div>
        <h1>Advisors</h1>
        <button onClick={handleOpenModal}>Create advisor</button>

        <Pagination
          items={filteredData as Array<Advisor>}
          itemsPerPage={10}
          length={filteredData?.length as number}
        />
      </div>
      {showModal ? (
        <Modal isOpen={showModal} closeModal={handleCloseModal}>
          <CreateAdvisorForm onAdvisorCreated={refetch} />
        </Modal>
      ) : (
        <></>
      )}
    </section>
  );
}
