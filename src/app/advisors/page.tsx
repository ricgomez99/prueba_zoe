"use client";
import useFetch from "../hooks/useFetch";
import { useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Modal from "../_components/Modal";
import { Advisor } from "../types";
import CreateAdvisorForm from "../_components/CreteAdvisorForm";
import Pagination from "../_components/Pagination";
import styles from "./advisors.module.css";
import Input from "../_components/Input";
import useInputChange from "../hooks/useInputChange";
import DashboardLayout from "../layouts/DashboardLayout";

const url = process.env.NEXT_PUBLIC_SERVER_URL;

export default function Advisors() {
  const inputValues = {
    query: "",
  };
  const [showModal, setShowModal] = useState(false);
  const { data, refetch } = useFetch<Advisor[]>(url as string);
  const searchParams = useSearchParams();
  const { onChange, values } = useInputChange(inputValues);

  const incomeParam = searchParams.get("income_value");
  const parsedIncome = incomeParam !== null ? parseInt(incomeParam) : 0;

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
    <DashboardLayout>
      <section className={styles.advisors_section}>
        <aside className={styles.advisors_header}>
          <h1>Advisors</h1>
          <button
            onClick={handleOpenModal}
            className={styles.advisors_create_button}>
            <img
              src="./plus-sign.svg"
              alt="plus sign"
              className={styles.create_button_icon}
            />
            Add New Advisor
          </button>
        </aside>
        <aside className={styles.advisors_table}>
          <div className={styles.advisors_table_header}>
            <h3>Advisors Found</h3>
            <Input
              inputValue={values.query}
              name="query"
              type="text"
              placeholder="Search..."
              onChange={onChange}
              className={styles.advisors_search}
            />
          </div>
          <Pagination
            items={filteredData as Array<Advisor>}
            itemsPerPage={10}
            length={filteredData?.length as number}
          />
        </aside>
        {showModal ? (
          <Modal
            isOpen={showModal}
            closeModal={handleCloseModal}
            modalTitle="Crate Advisor">
            <CreateAdvisorForm onAdvisorCreated={refetch} />
          </Modal>
        ) : (
          <></>
        )}
      </section>
    </DashboardLayout>
  );
}
