import React, { useEffect, useState } from "react";
import { Row, Col, Space, Spin } from "antd";
import "../../assets/homePage.css";
import Cards from "../Card/Card";
import { get } from "../../api/commonAPI";

const CardGridView = () => {
  const [response, setResponse] = useState();
  const [loader, setLoader] = useState(true)
  const cols = [];

  const getPostData = () => {
      get("posts")
      .then(res => {
          setResponse(res)
          setLoader(false)          
      }).catch(err => {
        setLoader(true) 
        throw err;
      });
  }

  useEffect(() => {
    getPostData();
  },[]);

  const createGrid = (response) => {
    for (let i = 0; i < response.length; i++) {
        cols.push(

            <Col key={i.toString()} span={24 / 4}>
                <div><Cards cardData={response[i]}/></div>
            </Col>

        );
      }
      return cols;
  }

  return (
    <>
      <div>
        <Row gutter={[20, 20]}>
            {
            response? 
            createGrid(response?.data)
            : 
            <Space>
              <Spin className="load-spinner" size="middle" spinning={loader}/>
            </Space>
            }
            
        </Row>
      </div>
    </>
  );
};

export default CardGridView;
