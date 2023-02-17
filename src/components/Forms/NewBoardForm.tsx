import {FC} from "react";
import {Field, Formik, Form, FormikValues} from "formik"
import * as Yup from 'yup';
import {Form as AntdForm, Input, Button} from "antd";
import styled from "styled-components";

type NewBoardFormProps = {
    onNewBoard: (values: FormikValues) => void;
}


export const NewBoardForm: FC<NewBoardFormProps> = (props) => {
    const onSubmit = (values: FormikValues, setSubmitting: any, resetForm: any) => {
        console.log("On submit working")
        console.log(values)
        props.onNewBoard(values)
        setSubmitting(false);
        resetForm()
    }



    const validationSchema = Yup.object().shape({
        player1: Yup.string().required('Name is required'),
        player2: Yup.string().required('Name is required')
    })
    return (<StyledNewBoardForm>
        {/*
        <Formik
            initialValues={{player1: '', player2: ''}}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ handleSubmit, isSubmitting, resetForm}) => (
                <Form onSubmit={handleSubmit}>
                    <Field type="text" name="player1"/>
                    <Field type="text" name="player2"/>
                    <button type="submit">
                        Submit
                    </button>
                    <button type={"reset"} onClick={()=>resetForm()}>
                        Reset
                    </button>
                </Form>
            )}
        </Formik>
        */}
        <Formik initialValues={{player1: '', player2: ''}}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting, resetForm}) => onSubmit(values, setSubmitting, resetForm)}>
            {(formikProps) => (
                <AntdForm onFinish={formikProps.handleSubmit} onReset={() => formikProps.resetForm()}>
                    <AntdForm.Item
                        label="Player 1">
                        <Input name="player1" value={formikProps.values.player1} onChange={formikProps.handleChange}
                               onBlur={formikProps.handleBlur}/>
                    </AntdForm.Item>
                    <AntdForm.Item
                        label="Player 2"
                    >
                        <Input name="player2" value={formikProps.values.player2} onChange={formikProps.handleChange}
                               onBlur={formikProps.handleBlur}/>
                    </AntdForm.Item>
                    <StyledButtonsWrapper>
                        <AntdForm.Item>
                            <Button type="default" htmlType="submit" disabled={formikProps.isSubmitting}>
                                Submit
                            </Button>
                        </AntdForm.Item>
                        <AntdForm.Item>
                            <Button type="default" htmlType="reset" disabled={formikProps.isSubmitting}>
                                Reset
                            </Button>
                        </AntdForm.Item>
                    </StyledButtonsWrapper>
                </AntdForm>
            )}
        </Formik>
    </StyledNewBoardForm>);
}

const StyledNewBoardForm = styled.div`
  width: 30%;
  margin: 20px auto;
  display: flex;

  label {
    color: white !important;
    font-weight: bold;
  }`

const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
