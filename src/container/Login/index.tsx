import type { NextPage } from 'next'
import { Form, Input, Button, Col } from 'antd';
import styled from 'styled-components';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

const ColStyle = styled(Col)`
  height:300px;
  border:1px solid #ccc;
  padding:20px;
  border-radius:10px;
  `
const LoginContiner = styled.div`
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center
  `
const HeadingStyle = styled.h2`
  text-align:center;
  margin-bottom:20px;
  color:#1890ff
  `

const ButtonDivStyle = styled.div`
  display:flex;
  justify-content:flex-end
  `

export async function getServerSideProps() {
  //  const res = await fetch()
  setTimeout(() => { }, 1000)
  return {
    props: {
      data: [{
        id: 12,
        name: "121212121"
      }]
    }
  }

}
const LoginPage: React.FC = ({ data }: any) => {
  const router = useRouter()

  console.log(data);

  const [state, setState] = useState({
    username: "",
    password: ""
  })



  const onChangeHandler = (e: any) => {
    console.log(e);
    e.preventDefault()
    setState({ ...state, [e.target.name]: e.target.value })
  };

  const { username, password } = state;
  const onLogin = (login: any): void => {
    const payload = {
      username,
      password
    }

    axios.post('api/authentication/login', payload).then((res) => {
      router.push('/home')
    })
      .catch((err) => {
        console.log(">>>err", err);
      })
  }

  useEffect(() => {

  }, [])



  return (

    <LoginContiner>
      <ColStyle lg={8} md={18} sm={20} xs={24}>
        <HeadingStyle>Login Form</HeadingStyle>
        <Form
          name="basic"
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input name="username" onChange={onChangeHandler} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password type="password" name='password' onChange={onChangeHandler} />
          </Form.Item>


          <ButtonDivStyle>
            <Button type="primary" htmlType="submit" onClick={onLogin}>
              Submit
            </Button>
          </ButtonDivStyle>

        </Form>

      </ColStyle>

    </LoginContiner>


  )
}

export default LoginPage
