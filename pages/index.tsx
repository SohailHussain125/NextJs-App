import type { NextPage } from 'next'
import { Form, Input, Button, Col } from 'antd';
import styled from 'styled-components';
import axios from 'axios'
import { useEffect, useState } from 'react';
const Login: NextPage = () => {
  const [state, setState] = useState({
    username: "",
    password: ""
  })
  
  interface loginType {
    username: string,
    password: string
  }

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onChangeHandler = (e: any) => {
    console.log(e);
    e.preventDefault()
    // setState({ ...state, [e.target.name]: e.target.value })
  };

  const onLogin = (login: any): void => {
    axios.post("http://localhost:3000/login", { username: login.username, password: login.password })
  }
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
useEffect(()=>{
  axios.get('api/hello')
},[])
  const { username, password } = state;
  
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
            <input type="text" name="username"  onChange={onChangeHandler}/>
            {/* <Input name="username"  onChange={onChangeHandler}/> */}
          </Form.Item>
      {/* 

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password type="password" onChange={onChangeHandler}/>
          </Form.Item>

          <ButtonDivStyle>
            <Button type="primary" htmlType="submit" onClick={onLogin}>
              Submit
            </Button>
          </ButtonDivStyle>
        */}
        </Form>
   
   </ColStyle>

    </LoginContiner>


  )
}

export default Login
