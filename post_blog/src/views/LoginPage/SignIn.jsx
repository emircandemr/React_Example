import React from 'react'
import {Button, Card,Form, Input} from "antd"
import Logo from "../../assets/logos/logo.png"
import { useNavigate } from 'react-router-dom'
import "./SignIn.css"
import { Request } from '../../request/Request'
import { useDispatch } from 'react-redux/es/exports'
import { setUser } from '../../store/authSlice/AuthSlice'
  
const SignIn = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form] = Form.useForm()
  const onFinish = (values) =>{
    console.log(values)
    Request.post("/user/signIn", {
      user_name : values.username,
      password : values.password,
    }).then((res) => {
      dispatch(setUser(res.data))
      navigate("/")
    } )
  }
  return (
    <div>
      <Card className='sign-in-card' >
        <div className='sign-in-logo'>
          <img src={Logo} alt="logo"/>
        </div>
        <Form form={form} 
        name="login-form"
        labelCol={{span:8}}
        wrapperCol={{span:16}}
        autoComplete="off"
        onFinish={onFinish}
        >
          <Form.Item label="Kullanıcı Adı" name="username" rules={[{required : true , message : "Kullanıcı Adı Gir !"}]} >
            <Input autoFocus placeholder="Kullanıcı Adı." />
          </Form.Item>
          <Form.Item label="Parola" name="password" rules={[{required : true , message : "Parola Giriniz !"}, {min:8,message:"Parola 8 Karakter Olmalı!"}]} >
            <Input.Password autoFocus placeholder="********" />
          </Form.Item>
          <Form.Item wrapperCol={{offset:8,span:16}} >
            <Button type='primary' htmlType='submit' className='w-full' > Giriş Yap </Button>
          </Form.Item>
          <Form.Item wrapperCol={{offset:8,span:16}} >
            <Button type='link' htmlType='submit' className='w-full' onClick={() => {
              navigate("/auth/sign-up")
            }} > Kayıt Ol </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default SignIn