import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Card, Modal, message } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { deleting, put } from "../../api/commonAPI";
import EditForm from "./EditForm";
// import Blog from "../Blog/Blog";
import { useHistory } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Blog from "../Blog/Blog";


const { Meta } = Card;

const Cards = ({ cardData }) => {
  const history = useHistory();
  const [selectedCardId, setSelectedCardId] = useState(0);
  const [deleteModelVisibility, setDeleteModelVisibility] = useState(false);
  const [editModelVisibility, setEditModelVisibility] = useState(false);
  const [formTitle, setFormTitle] = useState();
  const [formDescription, setDescription] = useState();

  const handleOk = () => {
    setDeleteModelVisibility(false);
    deleting("posts", selectedCardId)
      .then(message.success("Post Deleted Successfully"))
      .catch((err) => {
        message.error("Post not deleted");
        throw err;
      });
  };

  const handleCancel = () => {
    setDeleteModelVisibility(false);
    setEditModelVisibility(false);
  };

  const deleteCard = (postId) => {
    setSelectedCardId(postId);
    setDeleteModelVisibility(true);
    console.log(postId);
  };

  const handleFormEdit = (postId) => {
    setSelectedCardId(postId)
    setEditModelVisibility(true);
  };

  const handleSubmit = () => {
    setEditModelVisibility(false);

    put('posts/', { id: selectedCardId, title: formTitle.title,body: formDescription.description, userId: 1})
  };

  const handleTitle = (data) => {
    setFormTitle(data);
  };

  const handleDescription = (data) => {
    setDescription(data);
  };

  const handleClick = () => history.push('/blog-post');

  return (
    <>
      <Card
        hoverable
        style={{ width: 270 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            width="262px"
            height="159px"
          />
        }
        onClick={handleClick}
        actions={[
          <EditOutlined
            key="edit"
            onClick={() => handleFormEdit(cardData.id)}
          />,
          <DeleteOutlined
            key="setting"
            onClick={() => deleteCard(cardData.id)}
          />,
        ]}
      >
        <Meta
          title={cardData.title}
          description={cardData.body.substr(0, 30) + "..."}
        />
      </Card>

      <div>
        <Modal
          title="DELETE POST"
          visible={deleteModelVisibility}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Are you sure want to delete the post "{cardData.title}" ?</p>
        </Modal>
      </div>

      <div>
        <EditForm
          visibility={editModelVisibility}
          modelTitle="EDIT FORM"
          onClose={handleCancel}
          onSubmit={handleSubmit}
          formDescription={handleDescription}
        formTitle={handleTitle}
        />
      </div>
    </>
  );
};

export default Cards;
