import React from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field} from 'formik'
import * as Yup from 'yup';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import AppContext from './context';
import { useHistory } from 'react-router-dom'
import {RangeInput} from '@appbaseio/reactivesearch'

const stripePromise = loadStripe('pk_test_pFSMf14g5cVZfleYCK0ftIaL00W2M6xQki')


function Search(props) {
    
    // we'll add Stripe's Elements component here later
    //console.log("henlo");
    return (
        <Elements stripe={stripePromise}>
        <SearchController />
        </Elements>
    )
}
export default Checkout


const FormSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),
    category: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),
    campaign_id: Yup.string()
    .min(6, 'Too Short!'),
    days_active: Yup.string(),
    user_first_name: Yup.string()
     .min(2, "Too short!"),
    user_last_name: Yup.string()
     .min(5, "Too Short!")
     .max(7, "Too Long!"),
  });

const SearchController = props => {
    const context = React.useContext(AppContext);
    const total = context.getCartTotal() // context.getCartTotal()
    const items = Object.keys(context.cart);
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
               
                
                
            }}
            
        >
            {form => (
            <PaymentForm form={form} total={total} error={error} />
        )}</Formik>
    )
}


/**
 * The form layout/html.
 * This component needs finishing.
 */
const PaymentForm = props => (
    <Form>
        <Input title="Title:" disabled={props.form.isSubmitting} name="title" type="text" />
        <Input title="category:"  disabled={props.form.isSubmitting}name="category" type="text" />
        <Input title="campaign id:" disabled={props.form.isSubmitting} name="campaign_id" type="text" />
        <Input title="days active:" disabled={props.form.isSubmitting} name="days_active" type="text" />
        <RangeInput
	    componentId="RangeInputComponent"
	    dataField="rating"
	    title="goal"
	    range={{
		start: 500,
		end: 50000,
	}}
/>
        <Input title="goal:" disabled={props.form.isSubmitting} name="goal" type="text" />
        <Input title="First Name:" disabled={props.form.isSubmitting} name="user_first_name" type="text" />
         <Input title="Last Name:" disabled={props.form.isSubmitting} name="user_last_name" type="text" />
        <CardElement />
        {props.error !== "none"?(
     <bs.Alert  variant="danger">
        {props.error}
        </bs.Alert>):<div></div>}
        <bs.Button className="btn btn-success" type="submit" disabled={props.form.isSubmitting}>
            {props.form.isSubmitting? (
                 <span className= "spinner-border spinner-border-sm"
            role= "status" aria-hidden="true"></span>):<div></div>
        }
        Search
        </bs.Button>
       
                    
    </Form>
)


/**
 * A form input.
 *   props.title - the title that shows above the input box
 *   props.type - the type of input (see React Bootstrap Form.Control)
 *   props.placeholder - placeholder text in the input.
 * This component is finished and doesn't need additional work.
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