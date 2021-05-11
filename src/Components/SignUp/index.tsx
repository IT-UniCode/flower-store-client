import React, { FC, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

import { signup } from '../../API/user';

import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  PhoneOutlined,
  HomeOutlined,
} from '@ant-design/icons';

import useStyles from './style';

const SignUp: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const [user, setUser] = useState<IUser>({
    name: '',
    surname: '',
    lastname: '',
    phone: '',
    address: '',
    email: '',
    password: '',
    checkPass: '',
    basketId: '',
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
      basketId: '',
    };

    signup(newUser)
      .then(() => {
        setUser({
          name: '',
          surname: '',
          lastname: '',
          phone: '',
          address: '',
          email: '',
          password: '',
          checkPass: '',
          basketId: '',
        });
        history.push('/signin');
      })
      .catch((err) => console.log(`Error: ${err}`));
  };

  const formItemsArgs = [
    {
      name: 'name',
      required: true,
      label: 'Введите имя',
      message: 'Please input your Name!',
      prefixComponent: <UserOutlined className="site-form-item-icon" />,
      placeholder: 'Имя',
      value: user.name,
      pattern: /^([A-ZА-я]{1}[a-zа-я]*)$/,
      onChange(value: string) {
        setUser((prev) => ({ ...prev, name: value }));
      },
    },
    {
      name: 'surname',
      required: true,
      label: 'Введите фамилию',
      message: 'Please input your Surname!',
      prefixComponent: <UserOutlined className="site-form-item-icon" />,
      placeholder: 'Фамилия',
      value: user.surname,
      pattern: /^([A-ZА-я]{1}[a-zа-я]*)$/,
      onChange(value: string) {
        setUser((prev) => ({ ...prev, surname: value }));
      },
    },
    {
      name: 'lastname',
      required: true,
      label: 'Введите отчество',
      message: 'Please input your Lastname!',
      prefixComponent: <UserOutlined className="site-form-item-icon" />,
      placeholder: 'Отчество',
      value: user.lastname,
      pattern: /^([A-ZА-я]{1}[a-zа-я]*)$/,
      onChange(value: string) {
        setUser((prev) => ({ ...prev, lastname: value }));
      },
    },
    {
      name: 'phone',
      required: true,
      label: 'Введите телефон',
      message: 'Please input correct phone number!',
      prefixComponent: <PhoneOutlined className="site-form-item-icon" />,
      placeholder: '380XXXXXXXXX',
      value: user.phone,
      pattern: /^(\d{9,12})$/,
      onChange(value: string) {
        setUser((prev) => ({ ...prev, phone: value }));
      },
    },
    {
      name: 'address',
      required: false,
      label: 'Введите адрес',
      message: 'Please input your delivery address!',
      prefixComponent: <HomeOutlined className="site-form-item-icon" />,
      placeholder: 'Адрес доставки',
      value: user.address,
      onChange(value: string) {
        setUser((prev) => ({ ...prev, address: value }));
      },
    },
    {
      name: 'email',
      required: true,
      label: 'Введите email',
      message: 'Please input correct email!',
      prefixComponent: <MailOutlined className="site-form-item-icon" />,
      placeholder: 'Email',
      value: user.email,
      pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/,
      onChange(value: string) {
        setUser((prev) => ({ ...prev, email: value }));
      },
    },
    {
      name: 'password',
      required: true,
      label: 'Введите пароль',
      message: 'Please input your password!',
      prefixComponent: <LockOutlined className="site-form-item-icon" />,
      placeholder: 'Пароль',
      value: user.password,
      pattern: /(.){6}/,
      onChange(value: string) {
        setUser((prev) => ({ ...prev, password: value }));
      },
    },
    {
      name: 'checkPass',
      required: true,
      label: 'Повторите пароль',
      message: 'Please repeat the password!',
      prefixComponent: <LockOutlined className="site-form-item-icon" />,
      placeholder: 'Пароль',
      value: user.checkPass,
      pattern: /(.){6}/,
      onChange(value: string) {
        if (user.password !== user.checkPass) {
          setUser((prev) => ({ ...prev, checkPass: value }));
        }
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
              rules={[
                {
                  required: item.required,
                  message: item.message,
                  pattern: item.pattern,
                },
              ]}
            >
              {item.name === 'password' || item.name === 'checkPass' ? (
                <Input.Password 
                  prefix={item.prefixComponent}
                  placeholder={item.placeholder}
                  value={item.value}
                  onChange={(e) => item.onChange(e.target.value)}
                />
              ) : (
                <Input
                  prefix={item.prefixComponent}
                  placeholder={item.placeholder}
                  value={item.value}
                  onChange={(e) => item.onChange(e.target.value)}
                />
              )}
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
                <Link to="/signin">Войти</Link>
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
