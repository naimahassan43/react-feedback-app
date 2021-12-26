import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is feedback item 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This item is feedback item 2",
      rating: 7,
    },
    {
      id: 3,
      text: "This item is feedback item 3",
      rating: 5,
    },
    {
      id: 4,
      text: "This item is feedback item 4",
      rating: 9,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  // Add item to feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  //update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };
  // Delete item
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
