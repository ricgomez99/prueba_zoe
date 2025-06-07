"use client";
import useAdvisorsContext from "@/app/hooks/useAdvisorsContext";
import Modal from "@/app/_components/Modal";
import { useState } from "react";
import EditForm from "@/app/_components/EditForm";
import useFetch from "@/app/hooks/useFetch";
import useDeleteAdvisor from "@/app/hooks/useDeleteAdvisor";
import { useRouter } from "next/navigation";
import styles from "./details.module.css";
import DeleteButton from "@/app/_components/DeleteButton";

const url = process.env.NEXT_PUBLIC_SERVER_URL;

export default function AdvisorDetails() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { remove } = useDeleteAdvisor();
  const { refetch } = useFetch(url as string);
  const { getAdvisorId, getAdvisorById } = useAdvisorsContext();
  const advId = getAdvisorId();
  const advisor = getAdvisorById(advId);
  const profilePicture = advisor?.avatar
    ? advisor.avatar
    : "/default-profile.svg";

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteAdvisor = async () => {
    try {
      await remove(advId);
      refetch();
      router.back();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className={styles.details_container}>
        <div className={styles.details_card}>
          <aside className={styles.details_header}>
            <div className={styles.details_header_content}>
              <img
                src={profilePicture}
                alt={`${advisor?.name ?? "Advisor"} profile picture`}
                width={112}
                height={112}
                className={styles.details_header_image}
              />
              <div className={styles.details_header_buttons}>
                <DeleteButton
                  buttonText="Delete"
                  iconAlt="Can"
                  iconSrc="./deleteCan.svg"
                  onClick={handleDeleteAdvisor}
                />
                <button type="button" onClick={handleOpenModal}>
                  Edit Advisor
                </button>
              </div>
            </div>
          </aside>
          <div className={styles.details_informartion}>
            <h3>{advisor?.name}</h3>
            <span>{advisor?.address}</span>
          </div>
          <aside className={styles.details_main_data}>
            <div className={styles.details_contact}>
              <span className={styles.details_contact_title}>E-mail</span>
              <span className={styles.details_contact_info}>
                {advisor?.email}
              </span>
            </div>
            <div className={styles.details_contact}>
              <span className={styles.details_contact_title}>Income</span>
              <span className={styles.details_contact_info}>
                {advisor?.income}
              </span>
            </div>
            <div className={styles.details_contact}>
              <span className={styles.details_contact_title}>Telefono</span>
              <span className={styles.details_contact_info}>
                {advisor?.phone}
              </span>
            </div>
          </aside>
        </div>
      </section>
      {showModal ? (
        <Modal
          modalTitle="Edit Advisor Information"
          closeModal={handleCloseModal}
          isOpen={showModal}>
          <EditForm id={advId} refetch={refetch} />
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
}
