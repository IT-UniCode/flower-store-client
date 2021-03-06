import React, { useState, useContext } from 'react';
import { Form, Input, Button } from 'antd';
import { Link, useHistory, withRouter } from 'react-router-dom';

import { signin, getUserById } from '../../API/user';
import { getBasketByUserId } from '../../API/basket';
import { AppContext } from '../../Context';
import jwtDecode from 'jwt-decode';

import { MailOutlined, LockOutlined } from '@ant-design/icons';
import useStyles from './style';
interface IUser {
  email: string;
  password: string;
}

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();

  const { setUserContext } = useContext(AppContext);

  const [user, setUser] = useState<IUser>({
    email: '',
    password: '',
  });

  const login = () => {
    signin(user)
      .then(async (res) => {
        const decode: any = jwtDecode(res.data.token);
        localStorage.setItem('jwt', res.data.token);

        await getBasketByUserId(decode._id).then(async (basket) => {
          let count: number = 0;

          if (basket.data.length !== 0) {
            count = await basket.data[0].goods.reduce(
              (sum: number, curr: any) => {
                return (sum += curr.count);
              },
              0
            );
          }

          await getUserById(decode._id).then((res) => {
            setUserContext({
              userId: decode._id,
              email: res.data.email,
              userName: res.data.name,
              userSurName: res.data.surname,
              userLastName: res.data.lastname,
              phone: res.data.phone,
              address: res.data.address,
              role: decode.role,
              goodsCount: count,
              auth: true,
            });
          });
        });

        history.push('/account');
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  return (
    <div className={classes.root}>
      <div className="signInForm_wrapper">
        <Form name="nest-messages" className="signInForm">
          <Form.Item
            name={['user', 'email']}
            label="Email"
            rules={[
              {
                type: 'email',
                required: true,
                message: 'Please input correct email!',
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
              name={['user', 'password']}
              label="????????????"
              rules={[{ required: true, message: 'Please input password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="????????????"
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
              ??????????
            </Button>
            <div className="signInForm_btns_isSignIn">
              <p>?????? ?????? ?????????????????</p>
              <Button type="primary">
                <Link to="/signup">??????????????????????</Link>
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default withRouter(SignIn);
