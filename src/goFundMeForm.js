import React from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import axios from 'axios'
import AppContext from './context'

function GoFundMeForm(props) {

    return (
        <FormController />
    )
}
export default GoFundMeForm

const FormController = props => {
    const history = useHistory()
    const context = React.useContext(AppContext)
    let error = 'none'
    return (
        <Formik
            initialValues={{
                currencyCode: "USD",
                goal: 5000,
                has_beneficiary: false,
                visible_in_search: true,
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

                const picked = (({auto_fb_post_mode, goal, has_beneficiary, is_charity}) => ({ auto_fb_post_mode, goal, has_beneficiary, is_charity}))(values);
                picked["current_amount"] = values.goal
                picked["days_active"] = 0

                let dateObj = new Date();
                picked["time_of_day"] = (dateObj.getHours() * 60) + dateObj.getMinutes()
                var weekday=new Array(7);
                    weekday[1]="Monday";
                    weekday[2]="Tuesday";
                    weekday[3]="Wednesday";
                    weekday[4]="Thursday";
                    weekday[5]="Friday";
                    weekday[6]="Saturday";
                    weekday[0]="Sunday";

                picked["weekday"] = weekday[dateObj.getDay()]

                //TEST-------------------------------------------------------------

                //TEST-------------------------------------------------------------
             
                var data = {
                    "Inputs": {
                        "input1": {
                            "ColumnNames": ["auto_fb_post_mode", "current_amount", "goal", "has_beneficiary", "days_active", "is_charity", "weekday", "time_of_day"],
                            "Values": [ [ picked.auto_fb_post_mode, picked.current_amount, picked.goal, picked.has_beneficiary, picked.days_active, picked.is_charity, picked.weekday, picked.time_of_day ], ]
                        },
                    },
                    "GlobalParameters": {}
                }


                const apiurl = "https://cors-anywhere.herokuapp.com/https://ussouthcentral.services.azureml.net/workspaces/f357ec8488c34df99f7afe6f78ea5034/services/90b48bc3dd3f46929360866e23440201/execute?api-version=2.0";
                const apiKey = "Bearer Sl8BPuoOEPA6OSWOOMWE4rsQnHY4y64TVAkAqvnsxJWvOBXVdbs8Ws+7UcRXETrB9hguakOB1NfKJtwJj5Gzug==";

                const resp = await axios.post(apiurl, data, 
                    { headers: {
                        'Content-Type': 'application/json',
                        'Authorization': apiKey,
                        }
                    })
                    .catch(function (error){
                        console.log(error.response);
                    });
                
                let respData = resp.data
                let predictionValue = respData.Results.output1.value.Values[0][8]
                let predictionSTDev = respData.Results.output1.value.Values[0][9]
                console.log(predictionValue)
                console.log(predictionSTDev)
                
                context.currentEstimate = predictionValue

                history.push("/prediction", { predictionValue: predictionValue })

            }}
        >{form => (
            <CampaignForm form={form} error={error} /> //Don't know what to do for total in this part (like in our sprint)... total={total}
        )}</Formik>
    )
}

const FormSchema = Yup.object().shape({
    currencyCode: Yup
        .string()
        .min(3, "Too Short!")
        .max(3, "Too Long!")
        .required("Please enter the currency, such as EUR or USD"),
    goal: Yup
        .number()
        .min(3, "Too Short!")
        .required("Please enter a goal (must be an integer)"),
    weekday: Yup
        .string()
        .required("Please enter the day of the week of the launch of this campaign"),
    time_of_day: Yup
        .string()
        .required("Please enter the time of day of the launch of this campaign"),
    has_beneficiary: Yup
        .bool()
        .required("Please choose if there is a beneficiary"),
    auto_fb_post_mode: Yup
        .bool()
        .required("Please choose if automatic FaceBook updates are enabled"),
    is_charity: Yup
        .bool()
        .required("Please choose if the campaign is run by a charity"),
})

const CampaignForm = props => (
    <Form>
        <bs.Container>
            <bs.Row>
                <bs.Col>
                    <bs.Card.Header as="h5">Predict Your Campaign's Success</bs.Card.Header>
                    <bs.Card.Body>
                        <Input title="Type of Currency:" name="currencycode" placeholder="USD" type="text" />
                        <Input title="Your Goal:" name="goal" type="number" placeholder="1000" />
                        <Input title="Day of Week Launched:" name="weekday" type="text" placeholder="Monday" />
                        <Input title="Time of Day Launched:" name="time_of_day" type="text" placeholder="12:00pm" />
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
                        <p></p>
                        {props.error !== "none" ? (
                        <bs.Alert variant="danger">
                            {props.error}
                        </bs.Alert>) : <div></div>}
                        <bs.Button className="btn btn-success my-2" type="submit" >
                            Predict Campaign
                        </bs.Button>
                    </bs.Card.Body>
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