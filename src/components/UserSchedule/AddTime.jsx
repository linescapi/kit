const AddTime = () => {
  return (
    <div className="add-time-container">
      <input type="time" defaultValue={"13:00"} id="add-time" />
      <div className="buttons">
        <button>
          <p>Отмена</p>
        </button>
        <button>
          <p>Ок</p>
        </button>
      </div>
    </div>
  );
};

export default AddTime;
