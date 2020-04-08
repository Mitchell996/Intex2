import React from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'
//import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

function GoFundMeForm(props) {

    return (
        <FormController />
    )
}
export default GoFundMeForm

const FormController = props => {
    const history = useHistory()
    let error = 'none'
    return (
        <Formik
            initialValues={{
                category: "unknown",
                currencycode: "USD",
                goal: 5000,
                title: "Look! An interesting title.",
                description: "This is my fun description.",
                has_beneficiary: false,
                user_first_name: "Conrad",
                user_last_name: "Fox",
                location_city: "Provo, UT",
                location_zip: "84604",
                location_country: "US",
                is_charity: false,
                charity_name: '',
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validationSchema={FormSchema}
            
            onSubmit={async (values, actions) => {
                console.log('submit', values)
                console.log('actions', actions)
                
                history.push("/prediction")
                
            }}
        >{form => (
            <CampaignForm form={form} error={error} /> //Don't know what to do for total in this part (like in our sprint)... total={total}
        )}</Formik>
    )
}

const FormSchema = Yup.object().shape({
    category: Yup
        .string()
        .min(3, "Too Short!")
        .required("Please enter a category"),
    currencycode: Yup
        .string()
        .min(3, "Must be 3 characters")
        .max(3, "Must be 3 characters")
        .required("Please enter what currency you want, such as USD"),
    goal: Yup
        .number()
        .min(3, "Too Short!")
        .required("Please enter a goal (must be an integer)"), 
    title: Yup
        .string()
        .min(5, "Too Short!")
        .required("Please enter a title"),
    description: Yup
        .string()
        .min(20, "Too Short!")
        .max(100, "Too Long!")
        .required("Please enter a description"),
    user_first_name: Yup
        .string()
        .min(2, "Too Short!")
        .required("Please enter your first name"),
    user_last_name: Yup
        .string()
        .min(2, "Too Short!")
        .required("Please enter your last name"),
    location_city: Yup
        .string()
        .min(5, "Too Short!")
        .required("Please enter a location"),
    location_country: Yup
        .string()
        .min(1, "Too Short!")
        .max(2, "Too Long!")
        .required("Please enter a country"),
    location_zip: Yup
        .string()
        .required("Please enter a zipcode"),
})

const CampaignForm = props => (    
    <Form>
        <bs.Container>
            <bs.Row>
                <bs.Col>
                    <bs.Card.Header as="h5">Predict Your Campaign's Success</bs.Card.Header>
                    <bs.Card.Body>
                        <Input title="Category:" name="category" type="text" placeholder="Such as 'unknown'" disabled={props.form.isSubmitting} />
                        <Input title="Type of Currency:" name="currencycode" placeholder="USD" type="text" disabled={props.form.isSubmitting} />
                        <Input title="Your Goal:" name="goal" type="number" placeholder="1000" disabled={props.form.isSubmitting} />
                        <Input title="Campaign Title:" name="title" type="text" placeholder="I Need Financial Assistance" disabled={props.form.isSubmitting} />
                        <Input title="Description:" name="description" type="text" placeholder="Due to some recent health problems, I need financial assistance..." disabled={props.form.isSubmitting} />
                        <p>Do you have a beneficiary?</p>
                        <Field as="select" name="has_beneficiary" >
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </Field>
                        <p></p>
                        <Input title="First Name:" name="user_first_name" type="text" placeholder="John" disabled={props.form.isSubmitting} />
                        <Input title="Last Name:" name="user_last_name" type="text" placeholder="Doe" disabled={props.form.isSubmitting} />
                        <Input title="Campaign Location:" name="location_city" type="text" placeholder="Provo, UT" disabled={props.form.isSubmitting} />
                        <Input title="Campaign Country:" name="location_country" type="text" placeholder="US" disabled={props.form.isSubmitting} />
                        <Input title="Campaign Zipcode:" name="location_zip" type="number" placeholder="84606" disabled={props.form.isSubmitting} />
                        <p>Are you a charity?</p>
                        <Field as="select" name="is_charity" >
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </Field>
                        <p></p>
                        <Input title="Charity Name:" name="charity_name" type="text" disabled={props.form.isSubmitting} />
                    </bs.Card.Body>

                    {props.error !== "none" ? (
                        <bs.Alert variant="danger">
                            {props.error}
                        </bs.Alert>) : <div></div>}
                    <bs.Button className="btn btn-success mx-2" type="submit" >
                        Predict Campaign
                    </bs.Button>
                    {/* <Link className="btn btn-success" type="submit" to="/prediction">Predict Campaign</Link> */}
                </bs.Col>
            </bs.Row>
        </bs.Container>
    </Form>
)

const Input = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
            {props.title &&
                <bs.Form.Label>{props.title}</bs.Form.Label>
            }
            <bs.Form.Control
                type={props.type}
                placeholder={props.placeholder}
                disabled={props.disabled}
                {...rProps.field}
            />
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)