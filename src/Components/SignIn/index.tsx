import React, { useState, useContext } from "react";
import { Form, Input, Button } from "antd";
import { Link, useHistory, withRouter } from "react-router-dom";

import { signin } from "../../API/user";
import { getBasketByUserId } from "../../API/basket";
import { AppContext } from "../../Context";
import { CountContext } from "../../Context/CountContext";
import jwtDecode from 'jwt-decode';

import { MailOutlined, LockOutlined } from "@ant-design/icons";
import useStyles from "./style";
interface IUser {
  email: string;
  password: string;
}

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();

  const { setAuth } = useContext(AppContext);
  const { setCount } = useContext(CountContext);

  const [user, setUser] = useState<IUser>({
    email: "",
    password: "",
  });

  const login = () => {
    signin(user)
      .then((res) => {
        const decode: any = jwtDecode(res.data.token);
        localStorage.setItem("jwt", res.data.token);
        localStorage.setItem("userId", decode._id);


        getBasketByUserId(decode._id)
          .then(async (basket) => {
            const count = await basket.data[0].goods.reduce((sum: number, curr: any) => {
              return sum += curr.count;
            }, 0)            
            setCount(count);
          })

        setAuth(true);
        history.push('/account')
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  return (
    <div className={classes.root}>
      <div className="signInForm_wrapper">
        <Form name="nest-messages" className="signInForm">
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input correct email!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              className="form_item-input"
              placeholder="Email"
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </Form.Item>
          <Form.Item>
            <Form.Item
              name={["user", "password"]}
              label="Пароль"
              rules={[{ required: true, message: "Please input password!" }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Пароль"
                className="form_item-input"
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </Form.Item>
          </Form.Item>
          <div className="signInForm_btns">
            <Button
              type="primary"
              htmlType="submit"
              className="signInForm_signInBtn"
              onClick={login}
            >
              Войти
            </Button>
            <div className="signInForm_btns_isSignIn">
              <p>Ещё нет аккаунта?</p>
              <Button type="primary">
                <Link to="/signup">Регистрация</Link>
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default withRouter(SignIn);
