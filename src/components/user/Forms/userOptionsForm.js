import React, { useContext } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { MenuItem, InputLabel, FormControl } from "@material-ui/core"
import { TextField, Select, SimpleFileUpload } from "formik-material-ui"
import formStyle from "./formstyle.module.scss"
import UserContext from "../userContext/userContext"

export default ({ artwork, type }) => {
  const context = useContext(UserContext)
  const { userOptions, editUserOptions, setSlider } = context

  const handleSubmit = (NewArtwork, setSubmitting) => {
    editUserOptions(NewArtwork, setSubmitting)
  }

  const getOptions = type => {
    if (options) {
      return options[type].map(option => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))
    }
  }

  return (
    <div className={formStyle.root}>
      <Formik
        initialValues={{
          name: userOptions ? userOptions.name : "",
          anzeigeName: userOptions ? userOptions.anzeigeName : "",
          description: userOptions ? userOptions.description : "",
          instagramLink: userOptions ? userOptions.instagramLink : "",
        }}
        validate={values => falidation(values)}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting)

          // setTimeout(() => {
          //     alert(JSON.stringify(values, null, 2));
          //     setSubmitting(false);
          // }, 400);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <Field
              component={TextField}
              type="text"
              label="Name"
              name="name"
              fullWidth={true}
              margin={"normal"}
            />

            <Field
              component={TextField}
              type="text"
              label="Anzeige Name"
              name="anzeigeName"
              fullWidth={true}
              margin={"normal"}
            />
            <Field
              component={TextField}
              type="text"
              label="Description"
              name="description"
              variant="outlined"
              multiline={true}
              fullWidth={true}
              margin={"normal"}
              rows={6}
            />
            <Field
              component={TextField}
              type="text"
              label="Instagram Link"
              name="instagramLink"
              fullWidth={true}
              margin={"normal"}
            />

            <ErrorMessage name="description" component="div" />

            <button
              className={`${formStyle.button} ${
                isValid ? "" : formStyle.diabled
              } `}
              type="submit"
              disabled={!isValid}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

const falidation = values => {
  const errors = {}

  if (!values.anzeigeName) {
    errors.anzeigeName = "Required"
  } else if (values.anzeigeName.length > 20) {
    errors.anzeigeName = "höchstens 20 Zeichen"
  }

  // description
  if (!values.description) {
    errors.description = "Required"
  } else if (values.description.length > 400) {
    errors.description = "höchstens 400 Zeichen"
  }

  return errors
}
