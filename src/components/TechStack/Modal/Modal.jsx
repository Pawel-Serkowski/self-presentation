import "./modal.scss";

const Modal = ({ stackData, selectedId }) => {
  const actualTech = stackData.filter((tech) => tech.id === selectedId)[0];
  console.log(actualTech);

  return (
    <div className="modal">
      <h3>{actualTech.text}</h3>
      <hr />
      <div className="textContainer">
        <ul>
          {actualTech.content.map((tense) => (
            <li>{tense}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
