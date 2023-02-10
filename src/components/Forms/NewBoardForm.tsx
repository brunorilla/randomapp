import {FC} from "react";
import {Field, Formik} from "formik"
import * as Yup from 'yup';
import {Form} from "antd";

export const NewBoardForm: FC = () => {
    const onSubmit = (values: any, actions: any) => {
        console.log("On submit working")
        console.log(values, actions)
    }

    const validationSchema = Yup.object().shape({
        player1: Yup.string().required('Name is required'),
        player2: Yup.string().required('Name is required')
    })
    return (<>
        <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ handleSubmit, isSubmitting}) => (
                <Form>
                    <Field type="text" name="player1"/>
                    <Field type="text" name="player2"/>
                    <button type="submit" onSubmit={()=>handleSubmit()} disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>

    </>);
}
