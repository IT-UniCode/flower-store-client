import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";

import { addNewUser } from "../../API/user";

import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  PhoneOutlined,
  HomeOutlined,
} from "@ant-design/icons";

import useStyles from "./style";

interface IUser {
  name: string;
  surname: string;
  lastname: string;
  phone: string;
  address: string;
  email: string;
  password: string;
  checkPass: string;
}

const SignUp = () => {
  const classes = useStyles();

  const [user, setUser] = useState<IUser>({
    name: "",
    surname: "",
    lastname: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    checkPass: "",
  });

  const onSubmit = () => {
    const newUser = {
      name: user.name,
      surname: user.surname,
      lastname: user.lastname,
      phone: user.phone,
      address: user.address,
      email: user.email,
      password: user.password,
    };

    addNewUser(newUser)
      .then((res) => {
        console.log(res.data);
        setUser({
          name: "",
          surname: "",
          lastname: "",
          phone: "",
          address: "",
          email: "",
          password: "",
          checkPass: "",
        });
      })
      .catch((err) => console.log(`Error: ${err}`));
  };
  console.log(user);

  const formItemsArgs = [
    {
      name: "name",
      required: true,
      label: "Введите имя",
      message: "Please input your name!",
      prefixComponent: <UserOutlined className="site-form-item-icon" />,
      placeholder: "Имя",
      value: user.name,
      onChange(value: string) {
        setUser((prev) => ({ ...prev, name: value }));
      },
    },
    {
      name: "surname",
      required: true,
      label: "Введите фамилию",
      message: "Please input your surname!",
      prefixComponent: <UserOutlined className="site-form-item-icon" />,
      placeholder: "Фамилия",
      value: user.surname,
      onChange(value: string) {
        setUser((prev) => ({ ...prev, surname: value }));
      },
    },
    {
      name: "lastname",
      required: true,
      label: "Введите отчество",
      message: "Please input your lastname!",
      prefixComponent: <UserOutlined className="site-form-item-icon" />,
      placeholder: "Фамилия",
      value: user.lastname,
      onChange(value: string) {
        setUser((prev) => ({ ...prev, lastname: value }));
      },
    },
    {
      name: "phone",
      required: true,
      label: "Введите телефон",
      message: "Please input your phone number!",
      prefixComponent: <PhoneOutlined className="site-form-item-icon" />,
      placeholder: "Телефон",
      value: user.phone,
      onChange(value: string) {
        setUser((prev) => ({ ...prev, phone: value }));
      },
    },
    {
      name: "address",
      required: false,
      label: "Введите адрес",
      message: "Please input your address!",
      prefixComponent: <HomeOutlined className="site-form-item-icon" />,
      placeholder: "Адрес",
      value: user.address,
      onChange(value: string) {
        setUser((prev) => ({ ...prev, address: value }));
      },
    },
    {
      name: "email",
      required: true,
      label: "Введите email",
      message: "Please input your email!",
      prefixComponent: <MailOutlined className="site-form-item-icon" />,
      placeholder: "Email",
      value: user.email,
      onChange(value: string) {
        setUser((prev) => ({ ...prev, email: value }));
      },
    },
    {
      name: "password",
      required: true,
      label: "Введите пароль",
      message: "Please input your password!",
      prefixComponent: <LockOutlined className="site-form-item-icon" />,
      placeholder: "Пароль",
      value: user.password,
      onChange(value: string) {
        setUser((prev) => ({ ...prev, password: value }));
      },
    },
    {
      name: "checkPass",
      required: true,
      label: "Повторите пароль",
      message: "Please input your password!",
      prefixComponent: <LockOutlined className="site-form-item-icon" />,
      placeholder: "Пароль",
      value: user.checkPass,
      onChange(value: string) {
        setUser((prev) => ({ ...prev, checkPass: value }));
      },
    },
  ];

  return (
    <div className={classes.root}>
      <div className="signUpForm_wrapper">
        <Form name="nest-messages" className="signUpForm">
          {formItemsArgs.map((item, index) => (
            <Form.Item
              key={index}
              label={item.label}
              name={item.name}
              rules={[{ required: item.required, message: item.message }]}
            >
              <Input
                prefix={item.prefixComponent}
                placeholder={item.placeholder}
                value={item.value}
                onChange={(e) => item.onChange(e.target.value)}
              />
            </Form.Item>
          ))}

          <div className="signUpForm_btns">
            <Button
              type="primary"
              htmlType="submit"
              className="signUpForm_signUpBtn"
              onClick={onSubmit}
            >
              Регистрация
            </Button>
            <div className="signUpForm_btns_isSignUp">
              <p>Уже есть аккаунт?</p>
              <Button type="primary">
                <Link to="/sign-in">Войти</Link>
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
