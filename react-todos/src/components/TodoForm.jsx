import React from 'react';
import {Form,Row,Col,Button,Input} from 'antd';
import {PlusCircleFilled} from '@ant-design/icons';

// components two types: class, function
// components properties stored in state
// const : declare a variable

const TodoForm = ({onFormSubmit}) => {    // other component will pass ? {onFormSubmit} prop?  props are like function arguments  {} can include a react variable, property,or valid JS expression
    const [form] = Form.useForm();  //hook?

    const onFinish = () => {
        onFormSubmit({
        title: form.getFieldValue('title'),
        completed: false
    });
    console.log(form.getFieldValue('title'));

    form.resetFields();
}
    return(
        <Form
        form={form}  //property
        onFinish={onFinish}
        layout="horizontal"
        className="todo-form">
        <Row gutter={20}>
            <Col xs={24} sm={24} md={17} lg={19} xl={20}>
                <Form.Item
                    name={'title'}
                    rules={[{required:true,message:'This field is required'}]}>
                    <input placeholder = "what needs to be done?"></input>
                </Form.Item>
                </Col> 
            <Col xs={24} sm={24} md={7} lg={5} xl={4}>
                <Button type="primary" htmlType="submit" block>
                    <PlusCircleFilled/>
                    Add Todo
                </Button>
                </Col> 
        </Row>
        </Form>
    )

}

export default TodoForm;