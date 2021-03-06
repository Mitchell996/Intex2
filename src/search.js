import React from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field, yupToFormErrors } from 'formik'
import * as Yup from 'yup';
//import axios from 'axios';
import AppContext from './context';
import { useHistory } from 'react-router-dom'
//import { RangeInput, SingleList, RangeSlider } from '@appbaseio/reactivesearch'

const SearchController = props => {
    const context = React.useContext(AppContext);

    const history = useHistory();
    let error = "none"
    return (
        <Formik
            initialValues={{

            }}
            validateOnChange={false}
            validateOnBlur={false}
            validationSchema={FormSchema}

            onSubmit={async (values, actions) => {

                console.log('actions', actions)
                console.log('submit', values)
                //const payment_intent =  
                //await axios.post('/api/sale/', values)


                await context.searchResults(values);


                history.push("/searchedCampaign")
                history.go(1)

            }}

        >
            {form => (
                <PaymentForm form={form} error={error} />
            )}</Formik>
    )
}

const FormSchema = Yup.object().shape({
    
    campaign_id: Yup.string()
        .min(6, 'We require full id on search')
        .max(6, 'We require full id on search'),
    Title: Yup.string()
        .max(50,"Your character search is too long"),
    user_first_name: Yup.string()
        .max(30,"Your character search is too long"),
    user_last_name: Yup.string()
        .max(30,"Your character search is too long"),
    
});

const PaymentForm = props => (
    <Form>
        <bs.Container>
            <bs.Row>
                <bs.Col>
                    <bs.Card.Header as="h5">Search for a Campaign</bs.Card.Header>
                    <bs.Card.Body>
                        <Input title="Title:" name="title" type="text" />
                        <Input title="Campaign ID:" name="campaign_id" type="text" />
                        <Input title="First Name:" name="user_first_name" type="text" />
                        <Input title="Last Name:" name="user_last_name" type="text" />
                        <p>Goal:</p>
                        <Field as="select" name="goal" placeholder="goal">
                            <option value={null}>Don't care</option>
                            <option value={1000}>Less than 1000</option>
                            <option value={10000}>1000-10000</option>
                            <option value={10001}>Greater than 10000</option>
                        </Field> 
                        <p></p> {/* Have an empty p tag to fix spacing because br tag wasn't doing anything */}
                        <p>Donation:</p>
                        <Field as="select" name="donations" placeholder="donations">
                            <option value={null}>Don't care</option>
                            <option value={1000}>Less than 1000</option>
                            <option value={10000}>1000-10000</option>
                            <option value={10001}>Greater than 10000</option>
                        </Field>
                        <p></p>
                        <p>Number of donators:</p>
                        <Field as="select" name="donators" placeholder="donators">
                            <option value={null}>Don't care</option>
                            <option value={10}>10 or less</option>
                            <option value={50}>less than 50</option>
                            <option value={51}>greater than 50</option>
                        </Field>
                        <p></p>
                        <p>Has beneficiary:</p>
                        <Field as="select" name="beneficiary" placeholder="beneficiary">
                            <option value={null}>Don't care</option>
                            <option value={true}>Has beneficiary</option>
                            <option value={false}>Doesn't have beneficiary</option>
                        </Field>
                        <p></p>
                        <p>Is charity:</p>
                        <Field as="select" name="charity" placeholder="charity">
                            <option value={null}>Don't care</option>
                            <option value={true}>is Charity</option>
                            <option value={false}>Not a charity</option>
                        </Field>
                        <p></p>
                        <p>Weekday:</p>
                        <Field as="select" name="weekday" placeholder="weekday">
                            <option value={null}>Don't care</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </Field>
                    </bs.Card.Body>

                    {props.error !== "none" ? (
                        <bs.Alert variant="danger">
                            {props.error}
                        </bs.Alert>) : <div></div>}
                    <bs.Button className="btn btn-success mx-2" type="submit" >
                        Search
                    </bs.Button>
                    <p></p>
                </bs.Col>
            </bs.Row>
        </bs.Container>
    </Form>

)

/**
 * The form layout/html.
 * This component needs finishing.
 */

const Input = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
            {props.title &&
                <bs.Form.Label>{props.title}</bs.Form.Label>
            }
            <bs.Form.Control
                type={props.type}
                disabled={props.disabled}
                placeholder={props.placeholder}
                {...rProps.field}
            />
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)
export default SearchController;