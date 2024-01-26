import { alertError } from "../../services/alertFunctions";
import { Field, FormikProvider, useFormik } from "formik";
import { FunctionComponent } from "react";
import * as yup from "yup"

interface FormRegisterProps {

}

const FormRegister: FunctionComponent<FormRegisterProps> = () => {
    // Regex for password : min 1 uppercase, min 1 lowercase, min 1 symbol, min 1 number, min 8 characters, max 30 characters
    const regexValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/

    function clientRegister() {
        alertError("Backend closed! This feature is not included in the demo version. Find the full version at: https://github.com/MKonstantini/InstantOcean")
    }

    let formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            accountType: "",
            favorites: []
        },
        validationSchema: yup.object({
            firstname: yup.string().required("first name is a required field"),
            lastname: yup.string().required("last name is a required field"),
            email: yup.string().email().required(),
            password: yup.string().required().matches(regexValidation, "Password must contain at least 8 characters, one uppercase, one number and one symbol"),
            accountType: yup.string().required(),
            favorites: yup.array()
        }),
        onSubmit: (values, { resetForm }) => {
            clientRegister()
            resetForm()
        }
    })

    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit} className="d-flex flex-column justify-content-around align-items-center">
                {/* Firstname */}
                <div className="d-flex flex-column m-2">
                    <div className="form-floating m-1">
                        <input
                            className="form-control"
                            id="firstname"
                            placeholder="john"
                            type="text"
                            name="firstname"
                            onChange={formik.handleChange}
                            value={formik.values.firstname}
                            onBlur={formik.handleBlur}
                        />
                        <label htmlFor="firstname">First Name</label>

                    </div>
                    {
                        formik.touched.firstname &&
                        formik.errors.firstname &&
                        <small className="text-center">{formik.errors.firstname}</small>
                    }
                </div>

                {/* Lastname */}
                <div className="d-flex flex-column m-2">
                    <div className="form-floating m-1">
                        <input
                            className="form-control"
                            id="lastname"
                            placeholder="doe"
                            type="text"
                            name="lastname"
                            onChange={formik.handleChange}
                            value={formik.values.lastname}
                            onBlur={formik.handleBlur}
                        />
                        <label htmlFor="lastname">Last Name</label>

                    </div>
                    {
                        formik.touched.lastname &&
                        formik.errors.lastname &&
                        <small className="text-center">{formik.errors.lastname}</small>
                    }
                </div>

                {/* Email */}
                <div className="d-flex flex-column m-2">
                    <div className="form-floating m-1">
                        <input
                            className="form-control"
                            id="email"
                            placeholder="name@example.com"
                            type="text"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                        />
                        <label htmlFor="email">Email Address</label>

                    </div>
                    {
                        formik.touched.email &&
                        formik.errors.email &&
                        <small className="text-center">{formik.errors.email}</small>
                    }
                </div>

                {/* Password */}
                <div className="d-flex flex-column m-2">
                    <div className="form-floating m-1">
                        <input
                            className="form-control"
                            id="password"
                            placeholder="password"
                            type="password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                        />
                        <label htmlFor="password">Password</label>

                    </div>
                    {
                        formik.touched.password &&
                        formik.errors.password &&
                        <small className="text-center" style={{ maxWidth: "210px" }}>{formik.errors.password}</small>
                    }
                </div>

                {/* Account Type */}
                <div className="my-3">
                    <p className="mb-1">Account Type:</p>
                    <div role="group" aria-labelledby="accountType">
                        <label>
                            <Field
                                type="radio"
                                name="accountType"
                                value="regular"
                                className="me-2"
                            />
                            Regular
                        </label>
                        <label>
                            <Field
                                type="radio"
                                name="accountType"
                                value="admin"
                                className="me-2 ms-3"
                            />
                            Admin
                        </label>
                    </div>
                </div>

                {/* Button */}
                <button
                    type="submit"
                    disabled={!formik.isValid || !formik.dirty}
                    className="btn btn-outline-secondary mt-3 mb-5" style={{ width: "8rem" }}>
                    Register
                </button>
            </form>
        </FormikProvider>
    );
}

export default FormRegister;