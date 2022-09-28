export const Input = ({ labelTitle, inputId, inputType }) => {
  return (
    <>
      <label htmlFor={inputId}>{labelTitle}</label>
      <input type={inputType} id={inputId} />
    </>
  );
};
