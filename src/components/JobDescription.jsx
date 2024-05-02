import { useState } from 'react';
import Modal from './Modal'; // Import the Modal component

function JobDescription({ desc, title, location, link }) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const handleViewMoreClick = () => {
    setModalContent(desc);
    toggleModal();
  };

  return (
    <div className="">
      <div className="w-full h-auto">
        <span className="flex gap-2 items-center mb-2 font-medium font-ubuntu text-[#333]">
          About Company
        </span>
        <div className='flex flex-col gap-2'>
            <p className="flex gap-2 items-center font-dmsans text-sm text-wrap whitespace-nowrap">
                {desc.substr(0, 300) + "......."}
            </p>
            <button className="text-blue-600 hover:underline text-sm" onClick={handleViewMoreClick}>
                View More
            </button>
        </div>
        {showModal && (
          <Modal 
            onClose={toggleModal}
            title={title}
            location={location}
            link={link}
          >
            <p className='font-dmsans text-base'>
              <h2 className='mb-2 font-semibold text-lg'>Overview</h2>
              {modalContent}
            </p>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default JobDescription;
