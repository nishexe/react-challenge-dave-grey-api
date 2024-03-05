const Button = ({ buttonText, requestType, setRequestType }) => {
  // console.log("BUTTON TEXT IS:", buttonText);
  // console.log("REQUEST TYPE IS:", requestType);
  // {
  //   console.log("INSIDE Button reqType is", requestType);
  // }
  return (
    <button
      className={buttonText === requestType ? "selected" : null}
      // className="selected"
      type="button"
      onClick={() => setRequestType(buttonText)}
    >
      {buttonText}
    </button>
  );
};
export default Button;
