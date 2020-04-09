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
                donators: 18,
                currencycode: "USD",
                current_amount: 1000,
                goal: 5000,
                days_active: 21,
                title: "Look! An interesting title.",
                description: "This is my fun description.",
                description_length: 100,
                has_beneficiary: false,
                user_first_name: "Some",
                user_last_name: "Dude",
                visible_in_search: true,
                campaign_hearts: 200,
                social_share_total: 201,
                auto_fb_post_mode: false,
                weekday: "Monday",
                time_of_day: "2:05pm",
                is_charity: false,
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
    donators: Yup
        .number()
        .min(1, "Too Short!")
        .required("Please enter how many donators there are"),
    currencycode: Yup
        .string()
        .min(3, "Must be 3 characters")
        .max(3, "Must be 3 characters")
        .required("Please enter what currency you want, such as USD"),
    current_amount: Yup
        .number()
        .min(1, "Too Short!")
        .required("Please enter what the current amount donated is"),
    goal: Yup
        .number()
        .min(3, "Too Short!")
        .required("Please enter a goal (must be an integer)"),
    days_active: Yup
        .number()
        .min(1, "Too Short!")
        .required("Please enter how long this campaign has been active for"),
    title: Yup
        .string()
        .min(5, "Too Short!")
        .required("Please enter a title"),
    description: Yup
        .string()
        .min(20, "Too Short!")
        .max(100, "Too Long!")
        .required("Please enter a description"),
    description_length: Yup
        .number()
        .min(20, "Too Short!")
        .required("Please enter how many characters long the description is"),
    user_first_name: Yup
        .string()
        .min(2, "Too Short!")
        .required("Please enter a first name"),
    user_last_name: Yup
        .string()
        .min(2, "Too Short!")
        .required("Please enter a last name"),
    campaign_hearts: Yup
        .number()
        .min(1, "Too Short!")
        .required("Please enter a how many hearts this campaign has received"),
    social_share_total: Yup
        .number()
        .min(1, "Too Short!")
        .required("Please enter the total number of people who have shared the campaign through social media"),
    weekday: Yup
        .string()
        .required("Please enter the day of the week of the launch of this campaign"),
    time_of_day: Yup
        .string()
        .required("Please enter the time of day of the launch of this campaign"),
})

const CampaignForm = props => (
    <Form>
        <bs.Container>
            <bs.Row>
                <bs.Col>
                    <bs.Card.Header as="h5">Predict Your Campaign's Success</bs.Card.Header>
                    <bs.Card.Body>
                        <Input title="Donators:" name="donators" type="number" placeholder="0" />
                        <Input title="Type of Currency:" name="currencycode" placeholder="USD" type="text" />
                        <Input title="Current Amount:" name="current_amount" placeholder="0" type="number" />
                        <Input title="Your Goal:" name="goal" type="number" placeholder="1000" />
                        <Input title="Campaign Title:" name="title" type="text" placeholder="I Need Financial Assistance" />
                        <Input title="Description:" name="description" type="text" placeholder="Due to some recent health problems, I need financial assistance..." />
                        <Input title="Description Length:" name="description_length" type="number" placeholder="0" />
                        <Input title="First Name:" name="user_first_name" type="text" placeholder="John" />
                        <Input title="Last Name:" name="user_last_name" type="text" placeholder="Doe" />
                        <Input title="Campaign Hearts:" name="campaign_hearts" type="number" placeholder="0" />
                        <Input title="Social Share Total:" name="social_share_total" type="number" placeholder="0" />
                        <Input title="Day of Week Launched:" name="weekday" type="text" placeholder="Monday" />
                        <Input title="Time of Day Launched:" name="time_of_day" type="text" placeholder="12:00pm" />

                    </bs.Card.Body>
                </bs.Col>
                <bs.Col>
                    {/* <bs.Card.Header as="h5"></bs.Card.Header> */}
                    <bs.Card.Body>
                        <p>Are updates automatically posted to FaceBook?</p>
                        <Field as="select" name="auto_fb_post_mode" >
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </Field>
                        <p></p>
                        <p>Is it visible in search?</p>
                        <Field as="select" name="visible_in_search" >
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </Field>
                        <p></p>
                        <p>Do you have a beneficiary?</p>
                        <Field as="select" name="has_beneficiary" >
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </Field>
                        <p></p>
                        <p>Are you a charity?</p>
                        <Field as="select" name="is_charity" >
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </Field>
                    </bs.Card.Body>
                    {props.error !== "none" ? (
                        <bs.Alert variant="danger">
                            {props.error}
                        </bs.Alert>) : <div></div>}
                    <bs.Button className="btn btn-success mx-2" type="submit" >
                        Predict Campaign
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