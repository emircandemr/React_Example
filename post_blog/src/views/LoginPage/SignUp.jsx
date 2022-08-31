import React from 'react'
import { Card ,Form,Row,Col} from 'antd'
import Logo from "../../assets/logos/logo.png"

const SignUp = () => {

  const form = Form.useForm()

  return (
    <Card className='sign-up-card'>

      <div className='sign-up-logo-wrapper'>

          <img src={Logo} alt="logo" />

      </div>

      <Form form={form} layout="vertical" autoComplete='off' initialValues={{
        name: "",
        surname : "",
        username : "",
        email : "",
        city : "Ankara", 
        gender : "unknown",
        birthdate : "",
        password : ""
      }} >

      </Form>

    </Card>

  )
}

export default SignUp