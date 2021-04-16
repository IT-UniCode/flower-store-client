import React from "react";
import { Form, Input, Button } from "antd";

import { MailOutlined , LockOutlined } from "@ant-design/icons";

import useStyles from "./style";
import { Link } from "react-router-dom";

const SignIn = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="signInForm_wrapper">
        <Form name="nest-messages" className="signInForm">
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[{ type: "email", required: true, message: 'Please input email!' }]}
          >
            <Input prefix={<MailOutlined  className="site-form-item-icon" />} className="form_item-input" placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <Form.Item
              name={["user", "password"]}
              label="Пароль"
              rules={[
                { required: true, message: "Please input password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Пароль"
                className="form_item-input"
              />
            </Form.Item>
          </Form.Item>
          <div className="signInForm_btns">
            <Button
              type="primary"
              htmlType="submit"
              className="signInForm_signInBtn"
            >
              Войти
            </Button>
            <div className="signInForm_btns_isSignIn">
              <p>Ещё нет аккаунта?</p>
              <Button type="primary">
                <Link to='/sign-up'>Регистрация</Link>
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
