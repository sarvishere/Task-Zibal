import React, { useState } from "react";
import { Button, Modal, Form, Input, Flex, Typography } from "antd";

import "./form.css"; // Import your custom CSS

const CreateForm = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const { Text } = Typography;

  const handleCreate = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setOpen(false);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Flex justify="center">
      <Button type="dashed" size="large" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        title={null}
        footer={null}
        onCancel={() => setOpen(false)}
        className="custom-modal"
      >
        <div className="custom-modal-header">
          <h2>تسویه کیف پول</h2>
          <Text type="secondary">اصلی زیب</Text>
        </div>

        <Form form={form} layout="vertical">
          <Form.Item>
            <Flex vertical style={{ marginTop: "10px" }}>
              <Text type="secondary"> موجودی فعلی :</Text>
              <Text>۱۵.۰۰۰ ریال</Text>
            </Flex>
          </Form.Item>
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input the title of collection!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input the title of collection!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input type="textarea" />
          </Form.Item>
        </Form>

        <div className="custom-modal-footer">
          <Button onClick={() => setOpen(false)}>انصراف</Button>
          <Button type="primary" onClick={handleCreate}>
            ثبت درخواست تسویه
          </Button>
        </div>
      </Modal>
    </Flex>
  );
};

export default CreateForm;
