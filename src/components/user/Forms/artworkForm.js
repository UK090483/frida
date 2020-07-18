import React, { useContext } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import {
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@material-ui/core"
import { TextField, Select, SimpleFileUpload } from "formik-material-ui"
import formStyle from "./formstyle.module.scss"
import UserContext from "../userContext/userContext"

export default ({ artwork, type }) => {
  const context = useContext(UserContext)
  const { createArtwork, updateArtwork, options } = context

  const handleSubmit = (NewArtwork, setSubmitting) => {
    if (type === "add") {
      createArtwork(NewArtwork)
    }
    if (type === "edit") {
      console.log(NewArtwork)
      const NextArtwork = { ...artwork, ...NewArtwork }
      updateArtwork(NextArtwork, artwork.id, setSubmitting)
    }
  }

  const getOptions = type => {
    if (options) {
      return options[type].map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))
    }
  }

  return (
    <div className={formStyle.root}>
      <Formik
        initialValues={{
          title: artwork ? artwork.title : "",
          description: artwork ? artwork.description : "",
          picture: artwork ? { ...artwork.picture } : "",
          stil: artwork ? artwork.stil : "",
          price: artwork ? artwork.price : "",
          medium: artwork ? artwork.medium : "",
          height: artwork ? artwork.height : "",
          width: artwork ? artwork.width : "",
          instaLink: artwork ? artwork.instaLink : "",
        }}
        validate={values => falidation(values)}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting)
        }}
      >
        {({ isSubmitting, isValid, errors }) => (
          <Form>
            <Field name="picture">
              {({ field /* { name, value, onChange, onBlur } */ }) => {
                if (field.value.src) {
                  return <img src={field.value.src}></img>
                } else {
                  return (
                    <input {...field} type="text" placeholder="firstName" />
                  )
                }
              }}
            </Field>

            <Field
              component={SimpleFileUpload}
              name="file"
              label="Simple File Upload"
            />

            <Field
              component={TextField}
              type="text"
              label="Title"
              name="title"
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
              name="instaLink"
              margin={"normal"}
              fullWidth={true}
            />
            <Field
              component={TextField}
              type="number"
              label="Preis"
              name="price"
              margin={"normal"}
              fullWidth={true}
            />

            <Field
              component={TextField}
              type="number"
              label="Höhe"
              name="height"
              margin={"normal"}
              size={"small"}
            />
            <Field
              component={TextField}
              type="number"
              label="Weite"
              name="width"
              margin={"normal"}
            />

            {/* <FormControl fullWidth={true} margin={'normal'} error={!!errors.stil}>
                            <InputLabel htmlFor="age-simple">Style</InputLabel>
                            <Field
                                component={Select}
                                name="stil"
                                inputProps={{
                                    id: 'age-simple',
                                }}
                            >

                                {getOptions('stil')}
                            </Field>
                            <FormHelperText>{errors.stil}</FormHelperText>
                        </FormControl> */}
            <div style={{ width: "100%" }}>
              <p style={{ padding: 0, margin: 10 }}> Stil</p>
              <Field as="select" name="stil" label={"stil"}>
                {getOptions("stil")}
              </Field>
            </div>
            <div style={{ width: "100%" }}>
              <p style={{ padding: 0, margin: 10 }}> Stil</p>
              <Field as="select" name="medium">
                {getOptions("medium")}
              </Field>
            </div>

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

  if (!values.title) {
    errors.title = "Required"
  } else if (values.title.length > 20) {
    errors.title = "höchstens 20 Zeichen"
  }

  // description
  if (!values.description) {
    errors.description = "Required"
  } else if (values.description.length > 400) {
    errors.description = "höchstens 400 Zeichen"
  }

  // price
  if (!values.price) {
    errors.price = "Required"
  } else if (values.price > 5000 || values.price < 100) {
    errors.price = "Der Preis muss zwischen 100 und 5000 Euro liegen "
  }

  // height
  if (!values.height) {
    errors.height = "Required"
  }
  // width
  if (!values.width) {
    errors.width = "Required"
  }
  //style
  if (!values.stil) {
    errors.stil = "Required"
  }
  //medium
  if (!values.medium) {
    errors.medium = "Required"
  }
  if (!values.instaLink) {
    errors.instaLink = "Required"
  }

  return errors
}
