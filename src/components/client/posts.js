import React, { useState } from "react";
import MainLayout from "../Layout/mainLayout";
import { Row, Col, Card, CardImg, CardBody } from "reactstrap";
import { Divider, Typography } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import clientConfig from "../../clientConfig";
import renderHTML from "react-render-html";
const { Paragraph } = Typography;

const Posts = () => {
  const [data, setData] = useState([]);

  axios
    .get(`${clientConfig.siteUrl}/wp-json/wp/v2/posts`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => console.error(err, "is error!"));

  return (
    <MainLayout>
      <Row>
        {data.map((post) => {
          return (
            <Col className="mb-2" sm={12} xs={12} md={6} xl={3} lg={4}>
              <Card>
                <Link to={`/${post.id}`}>
                  <CardImg
                    alt={post.title.rendered}
                    className="posts-img"
                    src={
                      post.uagb_featured_image_src.medium[0]
                        ? post.uagb_featured_image_src.medium[0]
                        : "assets/img_not_found.png"
                    }
                    width="100%"
                    height="200px"
                  />
                </Link>
                <CardBody>
                  {post.title.rendered}
                  <Divider />
                  <Paragraph
                    ellipsis={{
                      rows: 2,
                      expandable: false,
                      symbol: "ادامه مطلب",
                    }}
                  >
                    <p>{renderHTML(post.content.rendered)}</p>
                  </Paragraph>
                  <span>ادامه مطلب...</span>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </MainLayout>
  );
};

export default Posts;
