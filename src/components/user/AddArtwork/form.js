import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, LinearProgress, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { TextField, Select } from 'formik-material-ui';

export default ({ artwork }) => {

    return (

        <Formik
            initialValues={{
                name: artwork ? artwork.title : '',
                description: '',
                availability: '',
                stil: '',
                price: '',
                medium: '',
                height: '',
                width: '',
                instaLink: ''
            }}
            validate={values => {
                const errors = {};
                if (!values.name) {
                    errors.name = 'Required';
                } else if (
                    values.name.length > 5
                ) {
                    errors.name = 'höchstens 5 Zeichen';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values)
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field
                        component={TextField}
                        type="text"
                        label="Title"
                        name="name"
                    />
                    <ErrorMessage name="title" component="div" />
                    <Field
                        component={TextField}
                        type="text"
                        label="Description"
                        name="description"
                        variant="outlined"
                        rows={4}
                    />
                    <Field
                        component={TextField}
                        type="number"
                        label="Preis"
                        name="price"
                    />
                    <Field
                        component={TextField}
                        type="number"
                        label="Höhe"
                        name="height"
                    />
                    <Field
                        component={TextField}
                        type="number"
                        label="Weite"
                        name="width"
                    />
                    <FormControl>
                        <InputLabel htmlFor="age-simple">Age</InputLabel>
                        <Field
                            component={Select}
                            name="age"
                            inputProps={{
                                id: 'age-simple',
                            }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Field>
                    </FormControl>;

                    <button type="submit" disabled={isSubmitting}>
                        Submit
                        </button>
                </Form>
            )}
        </Formik>

    )

}