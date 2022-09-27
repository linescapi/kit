const KitsForms = () => {
  return (
    <div className="background-color">
      <div className="container">
        <div className="kits-forms container">
          <div className="kits-form-row">
            <div className="kits-form-item">
              <div className="more-information-kit">
                <p>Посмотреть анкету</p>
              </div>
              <div className="requests-to-kit-total">
                <h6>1</h6>
              </div>
            </div>
            <div className="kits-form-item">
              <div className="more-information-kit">
                <p>Посмотреть анкету</p>
              </div>
              <div className="requests-to-kit-total">
                <h6>3</h6>
              </div>
            </div>
            <div className="kits-form-item">
              <div className="more-information-kit">
                <p>Посмотреть анкету</p>
              </div>
              <div className="requests-to-kit-total">
                <h6>3</h6>
              </div>
            </div>
            <div className="kits-form-item">
              <div className="more-information-kit">
                <p>Посмотреть анкету</p>
              </div>
              <div className="requests-to-kit-total">
                <h6>3</h6>
              </div>
            </div>
          </div>
          <div className="selected-kit-form">
            <div className="kit-form"></div>
            <div className="send-request">
              <button>
                <h5>Выбрать кита</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitsForms;
