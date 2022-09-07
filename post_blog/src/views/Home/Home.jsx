import React, { useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { Request } from '../../request/Request';
import { setPost } from '../../store/postSlice/PostSlice';
import {Row,Col,Input,Button,Card} from "antd"
import moment from 'moment';
import { socket } from '../../socket/socket';

const Home = () => {
  const {posts} = useSelector( (state) => state.post);
  const dispatch = useDispatch()

  useEffect( () => {
    Request.get("/post/list").then((res) => {
      dispatch(setPost(res.data))
    })
  },[])

  useEffect(()=> {

    socket.on("new post",(data) => {
      const arr = [...posts]
      arr.unshift(data.payload)
      dispatch(setPost(arr))
    })

  },[posts])

  return (
    <>
      <Row>
        <Col span={24}>
            {posts && posts.map((item) => {
              return (
                <Card style={{marginBottom:"16px"}} 
                actions={[
                  <div>
                    {
                      moment().diff(moment(item.createdAt),"hour")===0 ? moment().diff(moment(item.createdAt),"minute")+"dk önce" :
                      moment().diff(moment(item.createdAt),"hour") + "saat önce"
                    }
                  </div>
                ]}
                key={item.id} title={item.userID?.full_name} >
                  {item.text}
                </Card>
              )
            })}
        </Col>
      </Row>
    </>
  )
}

export default Home