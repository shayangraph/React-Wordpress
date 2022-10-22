import React, { useState } from "react";
import MainLayout from "../Layout/mainLayout";
import { Row, Col } from "reactstrap";
import { Card } from "antd";
import axios from "axios";
import clientConfig from "../../clientConfig";
import renderHTML from "react-render-html"
const { Meta } = Card;
const Posts = () => {
  const [data, setData] = useState([]);

  axios
    .get(`${clientConfig.siteUrl}/wp-json/wp/v2/posts`)
    .then((res) => {
      setData(res.data);
      // console.log(res.data, "is response");
    })
    .catch((err) => console.error(err, "is error!"));

  return (
    <MainLayout>
      <Row>
        {data.map((post) => {
          return (
            <Col sm={12} xs={12} md={6} xl={3} lg={4}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="" />}
              >
                <Meta
                  title={post.title.rendered}
                  description={renderHTML(post.content.rendered)}
                />
              </Card>
            </Col>
          );
        })}
      </Row>
    </MainLayout>
  );
};

export default Posts;
