import React from 'react'
import { Card ,Form,Row,Col, Input, Select, DatePicker, Button} from 'antd'
import Logo from "../../assets/logos/logo.png"
import "./SignUp.css"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Request } from '../../request/Request'

const SignUp = () => {

  const navigate = useNavigate()
  const [form] = Form.useForm()

  const [isExistUsername,setIsExistUsername] = useState(false)
  const [isExistEmail,setIsExistEmail] = useState(false)

  const handleUserNameExit = (userName) => {
    setIsExistUsername(true)
    Request.post("/user/isExitUserName",{
      userName
    }).then( (res) => {
      setIsExistUsername(false)
      if(res.data.isExit){
        form.setFields([{
          name:"username",
          errors : ["Kullanıcı Adı Mevcut"]
        }])
      }
    })
  }

  const handleEmailExit = (email) => {
    setIsExistEmail(true)
    Request.post("/user/setIsExistEmail",{
      email
    }).then( (res) => {
      setIsExistEmail(false)
      if(res.data.isExit){
        form.setFields([{
          name:"email",
          errors : ["Email Mevcut"]
        }])
      }
    })
  }

  const registerUser = () => {
    Request.post("/user/signup/",{
      name:form.getFieldValue("name"),
      surname : form.getFieldValue("surname"),
      user_name : form.getFieldValue("username"),
      email : form.getFieldValue("email"),
      password : form.getFieldValue("password"),
    }).then((res) => {
      if(res.data){
        navigate("/auth/sign-in")
      }
    })
  }


  const handleValidate = () => {
    form.setFields([
      {
        name:"name",
        errors : form.getFieldValue("name") ? [] : ["Ad Giriniz !"]
    },
      {
        name:"surname",
        errors : form.getFieldValue("surname") ? [] : ["Soyad Giriniz !"]
    },
      {
        name:"username",
        errors : form.getFieldValue("username") ? [] : ["Kullanıcı Adı Giriniz !"]
    },
    {
      name:"email",
      errors : form.getFieldValue("email") ? [] : ["Email Giriniz !"]
    },
    {
      name:"password",
      errors : form.getFieldValue("password") ? [] : ["Parola Giriniz"]
    }
    ])
    
    const errors = form.getFieldError()
    let isExitError = false ;
    for (let i = 0; i < errors.length; i++) {

      if(errors[i].errors.length > 0) {
        isExitError = true;
        break
      }
      isExitError = false;
    }

    if(!isExitError){
      registerUser()
    }

}





  return (
    <Card className='sign-up-card'>

      <div className='sign-up-logo-wrapper'>

          <img src={Logo} alt="logo" />

      </div>
{/* form={form} */}
      <Form  layout="vertical" autoComplete='off' form={form} initialValues={{
        name: "",
        surname : "",
        username : "",
        email : "",
        city : "Ankara", 
        gender : "unknown",
        birthdate : "",
        password : ""
      }} >

        <Row gutter={16}>
            <Col span={8}>
                <Form.Item label="Ad" required name="name" rules={[{required : true,message: "Lütfen Ad Giriniz !"}]}  >
                    <Input placeholder='Adınız.' />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item label="Soyad" required name="surname" rules={[{required : true,message: "Lütfen Soyad Giriniz !"}]}  >
                    <Input placeholder='Soyadınız.' />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item label="Cinsiyet" required name="gender" rules={[{required : true,message: "Lütfen Cinsiyet Seçiniz !"}]}  >
                    <Select> 
                        <Select.Option>Erkek</Select.Option>
                        <Select.Option>Kadın</Select.Option>
                    </Select>
                </Form.Item>
            </Col>
        </Row>

        <Row gutter={16}>
            <Col span={12}>
                <Form.Item label="Kullanıcı Adı" required name="username" rules={[{required : true,message: "Lütfen Kullanıcı Adı Giriniz !"},{min:3,message:"Min 3 Karakter Giriniz"}]}  >
                    <Input.Search onChange={(e) => {handleUserNameExit(e.target.value)}} placeholder='Kullanıcı Adı.' loading={isExistUsername} />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item label="Email" required name="email" rules={[{required : true,type:"email",message: "Lütfen Geçerli Bir Email Giriniz !"}]}  >
                    <Input.Search onChange={(e) => {handleEmailExit(e.target.value)}} placeholder='Email' loading={isExistEmail} />
                </Form.Item>
            </Col>
          </Row>
        
          <Row gutter={16}>
            <Col span={12}>
                <Form.Item label="Doğum Tarihi" required name="birthdate" rules={[{required : true, message: "Lütfen Tarih Seçiniz"}]}  >
                  <DatePicker placeholder='YYYY-MM-DD' />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item label="Şehir" required name="city" rules={[{required : true,message: "Lütfen Şehir Seçiniz !"}]}  >
                <Select> 
                  <Select.Option>İstanbul</Select.Option>
                  <Select.Option>Tokat</Select.Option>
                </Select>
                </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
                <Form.Item label="Password" required name="password" rules={[{required : true, message: "Lütfen Parola Giriniz"},{
                  min:8,
                  message:"Lütfen En Az 8 Karakterli Bir Parola Giriniz. "
                }]}  >
                    <Input.Password placeholder='Parola.' />
                </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
                <Button onClick={handleValidate} className='w-full' type='primary' >Kayıt Ol !</Button>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
                <Button className='w-full' type='link' onClick={()=>{
                  navigate("/auth/sign-in")
                }} >Giriş Yapınız</Button>
            </Col>
          </Row>
      </Form>

    </Card>

  )
}

export default SignUp