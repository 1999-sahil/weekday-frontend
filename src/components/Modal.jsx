import { AiTwotoneThunderbolt } from "react-icons/ai";

function Modal({ onClose, title, location, link, children }) {
  const handleOverlayClick = (e) => {
    // Close the modal only if the overlay (outside the dialog) is clicked
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center" onClick={handleOverlayClick}>
        <div className="bg-white p-8 rounded-lg border max-w-lg w-full relative z-50">
          <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>Close</button>
          <h2 className="text-center font-bold text-lg mb-4">Job Description</h2>
          <div className="mb-4">
            <span className="flex gap-2 font-medium font-dmsans text-sm">
              Job Title:
              <h2 className="capitalize font-semibold">{title}</h2>
            </span>
            <span className="flex gap-2 font-medium font-dmsans text-sm">
              Job Location:
              <h2 className="capitalize font-semibold">{location}</h2>
            </span>
            <span className="flex gap-2 font-medium font-dmsans text-sm">
              Apply Link:
              <h2>{link}</h2>
            </span>
          </div>
          {children}
          <button className="w-full mt-4 flex items-center gap-2 justify-center border rounded-lg py-3 font-semibold font-dmsans bg-emerald-400 hover:bg-emerald-500">
            <AiTwotoneThunderbolt className="w-6 h-6 text-orange-500" />
            Easy Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
