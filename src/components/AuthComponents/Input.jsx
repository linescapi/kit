export const Input = ({ labelTitle, inputId }) => {
  return (
    <>
      <label htmlFor={inputId}>{labelTitle}</label>
      <input type="text" id={inputId} />
    </>
  );
};
