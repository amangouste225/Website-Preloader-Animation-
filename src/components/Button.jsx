export const Button = ({ children, active }) => {
  return (
    <>
      <button className={`${active ? "btn btn_active" : "btn"}`}>
        {" "}
        {children}{" "}
      </button>
    </>
  );
};
