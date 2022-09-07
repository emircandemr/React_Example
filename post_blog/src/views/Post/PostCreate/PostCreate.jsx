import React, { useState } from 'react'
import {Row,Col,Input,Button} from "antd"
import { Request } from '../../../request/Request'
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

const PostCreate = () => {
  const [text,setText] = useState("")
  const {user} = useSelector((state) => state.auth)
  const {socketID} = useSelector((state) => state.socketIO)
  const navigate = useNavigate()

  const createPost = () => {
    Request.post("/post/create",{
      text,
      userId:user.user._id,
      socketId : socketID 
    }).then(()=>{
      setText("")
      navigate("/")
    })
  }

  return (
    <div>
      <Row>
        <Col span={24} >
          <label>Bir şeyler Yaz</label>
          <Input.TextArea value={text} onChange={(e) => {setText(e.target.value)}} style={{marginTop:"8px",height:"300px"}} />
        </Col>
      </Row>
      <Row style={{marginTop:"24px"}}>
        <Col span={24} >
          <Button type='primary' className='w-full' onClick={() => {
            createPost()
          }} >Gönder Gelsin</Button>
        </Col>
      </Row>
    </div>
  )
}

export default PostCreate