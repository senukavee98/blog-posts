import React, { useEffect, useState, useRef, useCallback } from "react";
import { Button, Input, Modal } from "antd";
import Form from "antd/lib/form/Form";
import TextArea from "antd/lib/input/TextArea";


const EditForm = ({ visibility, onClose, onSubmit, modelTitle, formTitle, formDescription }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const ref = useRef(null);

  return (
    <>
      <Modal
        title={modelTitle}
        visible={visibility}
        footer={[
          <Button key="back" onClick={onClose}>
            Return
          </Button>,
          <Button key="submit" type="primary" onClick={onSubmit}>
            Submit
          </Button>,
        ]}
        onOk={onSubmit}
        onCancel={onClose}
      >
        <Form layout="horizontal">
          <label> Title: </label>
            <Input 
              ref={ref}
              placeholder="Enter the Title" 
              onChange={(e) => formTitle({ title: e.target.value })}/> 
          <label> Description: </label> 
            <TextArea 
              ref={ref}
              placeholder="Enter the Description" 
              onChange={e => formDescription({ description: e.target.value })}
            /> 
        </Form>
      </Modal>
    </>
  );
};

export default EditForm;
