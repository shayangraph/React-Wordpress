import React from "react";
import MainLayout from "../Layout/mainLayout";
import { Row, Col, Card, CardBody, CardHeader, CardImg } from "reactstrap";
import { Divider, Typography } from "antd";
import renderHTML from "react-render-html";

const { Paragraph } = Typography;

const Post = ({ post }) => {
  console.log(post, "is post");
  return (
    <MainLayout>
      <Row>
        <Col>
          <Card>
            <CardHeader className="text-center">
              {post.title.rendered}
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs={12} sm={12} md={5} lg={5} xl={4}>
                  <CardImg
                    alt={post.title.rendered}
                    className=""
                    src={
                      post.uagb_featured_image_src.medium[0]
                        ? post.uagb_featured_image_src.medium[0]
                        : "assets/img_not_found.png"
                    }
                    width="100%"
                    height="200px"
                  />
                </Col>

                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                  <Divider type="vertical" style={{ height: "100%" }} />
                </Col>
                <Col xs={11} sm={11} md={6} lg={6} xl={7}>
                  <Paragraph
                    ellipsis={{
                      rows: 10,
                      expandable: true,
                      symbol: "مشاهده کل مطلب",
                    }}
                  >
                    <div>{renderHTML(post.content.rendered)}</div>
                  </Paragraph>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Post;
