import React, { useState } from "react";
import { Layout, Menu, message } from "antd";
import { FileAddOutlined } from "@ant-design/icons";
import "../../assets/homePage.css";
import CardGridView from "./cardGridView";
import EditForm from "../Card/EditForm";
import { post } from "../../api/commonAPI";
const { Header, Content, Footer } = Layout;

const HomePage = () => {
  const [createModelVisibility, setCreateModelVisibility] = useState(false);
  const [formTitle, setFormTitle] = useState();
  const [formDescription, setDescription] = useState();

  const handleSubmit = () => {
    console.log(formTitle, formDescription);
    setCreateModelVisibility(false);

    post("posts", { title: formTitle.title, body: formDescription.description, userId: 1 })
      .then((res) => {
        message.success("You have successfully created a post !");
        console.log(res);
      })
      .catch((err) => {
        message.error("Create post failed !");
        throw err;
      });
  };

  const handleTitle = (data) => {
    setFormTitle(data);
  };

  const handleDescription = (data) => {
    setDescription(data);
  };
  
  return (
    <>

        <Content style={{ padding: "0 50px" }}>
          <div className="content-bar">
            <span className="blog-heading"> My Blog </span>
            <FileAddOutlined
              className="creat-post-icon"
              onClick={() => setCreateModelVisibility(true)}
            />
          </div>

          <div className="site-layout-content">
            <CardGridView />
          </div>
        </Content>

      <EditForm
        visibility={createModelVisibility}
        modelTitle="CREATE A POST"
        onSubmit={handleSubmit}
        onClose={() => setCreateModelVisibility(false)}
        formDescription={handleDescription}
        formTitle={handleTitle}
      />
    </>
  );
};

export default HomePage;
