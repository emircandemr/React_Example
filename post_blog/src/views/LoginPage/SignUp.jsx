import React from 'react'
import { Card ,Form,Row,Col, Input, Select, DatePicker, Button} from 'antd'
import Logo from "../../assets/logos/logo.png"
import "./SignUp.css"
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const navigate = useNavigate()
  const form = Form.useForm()


  return (
    <Card className='sign-up-card'>

      <div className='sign-up-logo-wrapper'>

          <img src={Logo} alt="logo" />

      </div>
{/* form={form} */}
      <Form  layout="vertical" autoComplete='off' initialValues={{
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
                    <Input.Search placeholder='Kullanıcı Adı.' loading />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item label="Email" required name="email" rules={[{required : true,type:"email",message: "Lütfen Geçerli Bir Email Giriniz !"}]}  >
                    <Input.Search placeholder='Email' loading />
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
                <Button className='w-full' type='primary' >Kayıt Ol !</Button>
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