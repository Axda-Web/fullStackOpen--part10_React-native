import SignInForm from "./SignInForm";
import { Formik } from "formik";

const SignIn = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = ({ username, password }) => {
    console.log({ username, password });
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
