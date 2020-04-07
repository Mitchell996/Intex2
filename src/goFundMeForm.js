import React from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'


function GoFundMeForm(props) {

    return (
        <FormController />
    )
}
export default GoFundMeForm


const FormController = props => {
    return (
        <Formik
            initialValues={{
                category: "unknown",
                currencycode: "USD",
                goal: 5000.00,
                title: "Look! An interesting title.",
                description: "This is my fun description.",
                has_beneficiary: false,
                user_first_name: "Conrad",
                user_last_name: "Fox",
                location_city: "Provo, UT",
                location_zip: 84604,
                location_country: "US",
                is_charity: true,
                charity_name: 'Cadies Charity for Awesome People',
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validate={values => {
                const errors = {}
                console.log('validating', values)
                if (!values.category) {
                    errors.name = 'You must enter a category, such as unknown.'
                }
                else if (!values.currencycode) {
                    errors.address1 = 'You must enter a currency code, such as USD.'
                }
                else if (!values.goal) {
                    errors.city = 'You must enter your monetary goal.'
                }
                else if (!values.title) {
                    errors.state = 'You must enter a title for your campaign.'
                }
                else if (!values.description) {
                    errors.zipcode = 'You must enter a description for your campaign.'
                }
                else if (!values.has_beneficiary) {
                    errors.zipcode = 'You must enter true or false for if you have a beneficiary for your campaign.'
                }
                else if (!values.user_first_name) {
                    errors.zipcode = 'You must enter your first name.'
                }
                else if (!values.user_last_name) {
                    errors.zipcode = 'You must enter your last name.'
                }
                else if (!values.location_city) {
                    errors.zipcode = 'You must enter a city for your campaign, for example Provo, UT.'
                }
                else if (!values.location_country) {
                    errors.zipcode = 'You must enter a country for your campaign, such as US.'
                }
                else if (!values.location_zip) {
                    errors.zipcode = 'You must enter a zipcode for your campaign.'
                }
                else if (!values.is_charity) {
                    errors.zipcode = 'You must enter true or false for if you are a charity.'
                }
                else if (!values.charity_name) {
                    errors.zipcode = 'You must enter a name for your charity if applicable, otherwise type N/A.'
                }
                return errors
            }}
            onSubmit={async (values, actions) => {
                console.log('submit', values)
                const response = await axios.post('http://localhost:8000/campaign/',
                    {
                        category: values.category,
                        currencycode: values.currencycode,
                        goal: values.goal,
                        title: values.title,
                        description: values.description,
                        has_beneficiary: values.has_beneficiary,
                        user_first_name: values.user_first_name,
                        user_last_name: values.user_last_name,
                        location_city: values.location_city,
                        location_country: values.location_country,
                        location_zip: values.location_zip,
                        is_charity: values.is_charity,
                        charity_name: values.charity_name,
                    })
                console.log('response data: ', response)
                // const result = await stripe.confirmCardPayment(response.data['client_secret'], {
                //     payment_method: {
                //         card: elements.getElement(CardElement),
                //         billing_details: {
                //             name: values.name,
                //         },
                //     }
                // })
            }}
        >{form => (
            <CampaignForm form={form} total={total} /> //    Don't know what to do for total in this part... 
        )}</Formik>
    )
}


const CampaignForm = props => (
    <Form>
        <bs.Container>
            <bs.Row>
                <bs.Col>
                    <bs.Card.Header as="h5">Campaign Information</bs.Card.Header>
                    <bs.Card.Body>
                        <Input title="Category:" name="category" type="text" disabled={props.form.isSubmitting} />
                        <Input title="Type of Currency:" name="currencycode" type="text" disabled={props.form.isSubmitting} />
                        <Input title="Your Goal:" name="goal" type="number" disabled={props.form.isSubmitting} />
                        <Input title="Campaign Title:" name="title" type="text" disabled={props.form.isSubmitting} />
                        <Input title="Description:" name="description" type="text" disabled={props.form.isSubmitting} />
                        <Input title="Do you have a beneficiary? true or false:" name="has_beneficiary" type="text" disabled={props.form.isSubmitting} />
                        <Input title="First Name:" name="user_first_name" type="text" disabled={props.form.isSubmitting} />
                        <Input title="Last Name:" name="user_last_name" type="text" disabled={props.form.isSubmitting} />
                        <Input title="Campaign Location:" name="location_city" type="text" disabled={props.form.isSubmitting} />
                        <Input title="Campaign Country:" name="location_country" type="text" disabled={props.form.isSubmitting} />
                        <Input title="Campaign Zipcode:" name="location_zip" type="number" disabled={props.form.isSubmitting} />
                        <Input title="Are you a charity? true or false:" name="is_charity" type="text" disabled={props.form.isSubmitting} />
                        <Input title="Charity Name:" name="charity_name" type="text" disabled={props.form.isSubmitting} />
                    </bs.Card.Body>
                    <bs.Button
                        type="submit"
                        disabled={props.form.isSubmitting}
                        variant="success"
                        className="btn btn-success m-4">
                        {props.form.isSubmitting ?
                            <bs.Spinner animation="border"
                                variant="secondary"
                                size="sm" /> : null}
                        Create Campaign
                    </bs.Button>
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