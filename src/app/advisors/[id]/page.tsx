"use client";
import useAdvisorsContext from "@/app/hooks/useAdvisorsContext";
import Modal from "@/app/_components/Modal";
import { useState } from "react";
import EditForm from "@/app/_components/EditForm";
import useFetch from "@/app/hooks/useFetch";
import useDeleteAdvisor from "@/app/hooks/useDeleteAdvisor";

const url = process.env.NEXT_PUBLIC_SERVER_URL;

export default function AdvisorDetails() {
  const [showModal, setShowModal] = useState(false);
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <aside>
          <div>
            <img
              src={profilePicture}
              alt={`${advisor?.name ?? "Advisor"} profile picture`}
              width={112}
              height={112}
            />
            <div>
              <button type="button" onClick={handleDeleteAdvisor}>
                Delete
              </button>
              <button type="button" onClick={handleOpenModal}>
                Edit Advisor
              </button>
            </div>
          </div>
          <div>
            <h3>{advisor?.name}</h3>
            <span>{advisor?.address}</span>
          </div>
        </aside>
        <aside>
          <span>{advisor?.email}</span>
          <span>{advisor?.income}</span>
          <span>{advisor?.phone}</span>
        </aside>
      </section>
      {showModal ? (
        <Modal closeModal={handleCloseModal} isOpen={showModal}>
          <EditForm id={advId} refetch={refetch} />
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
}
