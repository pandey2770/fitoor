import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../ActionReducre/Action/User";
import { Link } from "react-router-dom";
import { ERROR_BLANK } from "../../ActionReducre/Constant/actiontype";
import "./RegisterStyle.css";
import {
  Divider,
  Input,
  notification,
  Button,
  Form,
  Row,
  Col,
  Modal
} from "antd";
const FormItem = Form.Item;

const Register = props => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { error, time, alert, success, loading } = useSelector(
    state => state.common
  );

  useEffect(() => {
    error == true &&
      notification.warning({ message: alert, placement: "bottomRight" });
    error == true && dispatch({ type: ERROR_BLANK, action: "" });
  }, [time]);

  useEffect(() => {
    success == true &&
      notification.success({ message: alert, placement: "bottomRight" });
    success == true && dispatch({ type: ERROR_BLANK, action: "" });
  }, [success]);

  const onRegister = values => {
    dispatch(signUp(values, props.history));
  };

  return (
    <div>
      <div className="login-register-container">
        <div className="login-register-main-content">
          <div className="login-content">
            <div className="login-header">Register</div>
            <Divider />
            <Form
              form={form}
              key={1}
              layout="vertical"
              name="basic"
              initialValues={{
                ["email"]: ""
              }}
              onFinish={onRegister}
            >
              <FormItem
                label="Email"
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!"
                  },
                  {
                    required: true,
                    message: "Please provide valid email"
                  }
                ]}
              >
                <Input placeholder="Email" />
              </FormItem>
              <FormItem
                label="Password"
                name="password"
                hasFeedback
                rules={[{ required: true, message: "Please provide Password" }]}
              >
                <Input type="password" placeholder="Password" />
              </FormItem>
              <FormItem
                label="Confirm Password"
                name="confirmPassword"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!"
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "Passwords that you entered do not match!"
                      );
                    }
                  })
                ]}
              >
                <Input type="password" placeholder="Confirm Password" />
              </FormItem>
              <FormItem className="text-center" shouldUpdate={true}>
                {() => (
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    htmlType="submit"
                    className="btn-bg-primary"
                    disabled={
                      // !form.isFieldsTouched(true) ||
                      form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    Register Now
                  </Button>
                )}
              </FormItem>
            </Form>
            <Link to="/" style={{ cursor: "pointer" }}>
              <p>Login</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Register);
