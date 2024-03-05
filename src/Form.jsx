import Button from "./Button";
const Form = ({ requestType, setRequestType }) => {
  // {
  //   console.log("INSIDE FORM reqType is", requestType);
  // }
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Button
        buttonText="users"
        requestType={requestType}
        setRequestType={setRequestType}
      />
      <Button
        buttonText="posts"
        requestType={requestType}
        setRequestType={setRequestType}
      />
      <Button
        buttonText="comments"
        requestType={requestType}
        setRequestType={setRequestType}
      />
    </form>
  );
};
export default Form;
