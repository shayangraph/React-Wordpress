import React, { useState } from "react";
import MainLayout from "../Layout/mainLayout";
import { Row, Col, Card, CardImg, CardBody } from "reactstrap";
import { Typography, Divider } from "antd";
import axios from "axios";
import clientConfig from "../../clientConfig";
import renderHTML from "react-render-html";
import { Link } from "react-router-dom";
import Loader from "../../loader.gif";
import { useSelector, useDispatch } from "react-redux";
import { change_loader } from "../../redux/actions";

const { Paragraph } = Typography;

const Posts = () => {
  const loader = useSelector((state) => state.loader);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  axios
    .get(`${clientConfig.siteUrl}/wp-json/wp/v2/posts`)
    .then((res) => {
      setData(res.data);
      dispatch(change_loader(true));
      // console.log(res.data, "is response");
    })
    .catch((err) => console.error(err, "is error!"));
  // console.log(data);
  // console.log(data);
  return loader === false ? (
    <img className="loader" src={Loader} alt="درحال بارگذاری ..." />
  ) : (
    <MainLayout activePage="main">
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
                    ellipsis={{ rows: 2, expandable: false }}
                    title="..."
                  >
                    <div>{renderHTML(post.content.rendered)}</div>
                  </Paragraph>
                  <Link to={`/${post.id}`}>
                    <span>... ادامه مطلب</span>
                  </Link>
                  <Divider />
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
