import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Button from "../components/Button/Button";
import Layout from "../components/Layout";
import ErrorMessage from "../components/ErrorMessage";
import Label from "../components/Label";
import Input from "../components/Input";
import Check from "../components/icons/Check";

function IndexPage() {
  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last name is required"),
    euResident: Yup.string().required("euResident is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    org: Yup.string(),
    fieldName: Yup.bool().oneOf([true], "Advances is required"),
    alerts: Yup.bool(),
    other: Yup.bool(),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    // display form data on success
    alert(
      "Thank you. You are now subscribed.\n\n" + JSON.stringify(data, null, 4)
    );
    return false;
  }

  return (
    <Layout>
      <div className="card-body">
        <h1 className="title">Sign up for email updates</h1>
        <p className="sub-title">*Indicates Required Field</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <div className="row">
              <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
              <Label>First Name*</Label>
              <Input
                name="firstName"
                type="text"
                isInvalid={errors.firstName?.invalid}
                {...register("firstName")}
              />
            </div>
            <div className="row">
              <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
              <Label>Last Name*</Label>
              <Input
                name="lastName"
                type="text"
                isInvalid={errors.lastName?.invalid}
                {...register("lastName")}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
              <Label>Email*</Label>
              <Input
                name="email"
                type="text"
                isInvalid={errors.email}
                {...register("email")}
              />
            </div>
            <div className="row">
              <Label>Organization</Label>
              <Input
                name="org"
                type="text"
                isInvalid={errors.org}
                {...register("org")}
              />
            </div>
          </div>
          <div className="row">
            <ErrorMessage>{errors.euResident?.message}</ErrorMessage>
            <Label>EU resident*</Label>
            <select
              name="title"
              {...register("title")}
              className={`form-field ${errors.title ? "is-invalid" : ""}`}
            >
              <option value="">- SELECT ONE -</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group form-check">
            <ErrorMessage>{errors.fieldName?.message}</ErrorMessage>
            <Input
              name="fieldName"
              type="checkbox"
              id="fieldName"
              isInvalid={errors.fieldName?.message}
              {...register("fieldName")}
            />
            <label htmlFor="fieldName" className="form-check-label">
              Advances
            </label>
            <Input
              name="alerts"
              type="checkbox"
              id="alerts"
              isInvalid={errors.alerts?.message}
              {...register("alerts")}
            />
            <label htmlFor="alerts" className="form-check-label">
              Alerts
            </label>
            <Input
              name="other"
              type="checkbox"
              id="other"
              isInvalid={errors.other?.message}
              {...register("other")}
            />
            <label htmlFor="other" className="form-check-label">
              Other communications
            </label>
          </div>
          <div className="form-group">
            <Button type="submit" children="Submit" onClick={handleSubmit} />
            <Button type="button" children="Reset" onClick={reset} />
            <button
              type="button"
              onClick={() => reset()}
              className="btn btn-secondary"
            >
              Reset
            </button>
            <Check />
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default IndexPage;
