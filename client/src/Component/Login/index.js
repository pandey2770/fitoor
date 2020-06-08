import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../ActionReducre/Action/User";
import "./login.css";
import { Link } from "react-router-dom";
import { ERROR_BLANK } from "../../ActionReducre/Constant/actiontype";
import { Divider, Input, Button, Form, notification } from "antd";
const FormItem = Form.Item;

const Login = props => {
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

  const onLogin = values => {
    dispatch(login(values, props.history));
  };

  return (
    <div>
      <div className="login-register-container">
        <div className="login-register-main-content">
          <div className="login-content">
            <div className="login-header">Login</div>
            <Divider />
            <Form
              form={form}
              key={1}
              layout="vertical"
              name="basic"
              initialValues={{
                ["email"]: ""
              }}
              onFinish={onLogin}
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
                <Input />
              </FormItem>
              <FormItem
                label="Password"
                name="password"
                hasFeedback
                rules={[{ required: true, message: "Please provide Password" }]}
              >
                <Input type="password" />
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
                    Login Now
                  </Button>
                )}
              </FormItem>
            </Form>
            <Link to="/register" style={{ cursor: "pointer" }}>
              <p>Register</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
