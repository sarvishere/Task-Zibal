import { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  Flex,
  Typography,
  Select,
  Radio,
  Divider,
  RadioChangeEvent,
  notification,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";

import "./form.css"; // Import your custom CSS

const CreateForm = () => {
  const [open, setOpen] = useState(false);
  const [paymentType, setPaymentType] = useState("account");
  const [form] = Form.useForm();
  const { Text } = Typography;

  const openNotification = () => {
    notification.success({
      message: "عملیات موفقیت آمیز بود",
      description: "تسویه حساب شما ثبت شد",
      placement: "topRight",
      style: {
        direction: "rtl",
      },
    });
  };

  const handleCreate = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setOpen(false);
        openNotification();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleChangePayment = (e: RadioChangeEvent) => {
    setPaymentType(e.target.value);
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
          <Text type="secondary" style={{ fontFamily: "BYekan" }}>
            اصلی زیب
          </Text>
        </div>

        <Form form={form} layout="vertical">
          <Form.Item>
            <Flex vertical style={{ marginTop: "10px" }}>
              <Text type="secondary"> موجودی فعلی :</Text>
              <Text
                style={{
                  fontSize: "20px",
                  fontFamily: "BYekan",
                  color: "#1677ff",
                }}
              >
                {" "}
                ۱۵.۰۰۰ ریال
              </Text>
            </Flex>
          </Form.Item>
          <Divider></Divider>
          <Form.Item
            name="selectOption"
            rules={[
              { required: true, message: "لطفا نوع تسویه حساب را وارد کنید" },
            ]}
          >
            <Radio.Group value={paymentType} onChange={handleChangePayment}>
              <Radio.Button className="radio" value="account">
                به حساب
              </Radio.Button>
              <Radio.Button className="radio" value="wallet">
                به کیف پول
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="مقصد تسویه"
            name="destination"
            rules={[
              {
                required: true,
                message: "لطفا مقصد تسویه را انتخاب کنید.",
              },
            ]}
          >
            <Select
              showSearch
              placeholder=""
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                { value: "1", label: "۶۲۱۹ ۸۶۱۰ ۱۲۳۴ ۱۲۳۴" },
                { value: "2", label: "۵۰۲۲ ۲۹۱۰ ۱۲۳۴ ۵۶۷۸" },
                { value: "3", label: "۶۱۰۳ ۹۹۷۱ ۱۲۳۴ ۵۶۷۸" },
              ]}
              style={{
                direction: "ltr",
                fontSize: "16px",
                fontFamily: "BYekan",
              }}
            />
          </Form.Item>

          <Form.Item
            label="مبلغ تسویه"
            name="amount"
            rules={[
              {
                required: true,
                message: "لطفا مبلغ تسویه را وارد کنید.",
              },
            ]}
          >
            <Input
              placeholder="ریال"
              style={{ direction: "ltr" }}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, "");
                const formattedValue = value.replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ","
                );
                form.setFieldsValue({ amount: formattedValue });
              }}
            />
          </Form.Item>
          <Form.Item name="description" label="توضیحات (بابت)">
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>

        <div className="custom-modal-footer">
          <Button onClick={() => setOpen(false)}>انصراف</Button>
          <Button type="primary" onClick={handleCreate}>
            <span style={{ fontFamily: "BYekan" }}>ثبت تسویه حساب</span>
            <PlusOutlined></PlusOutlined>
          </Button>
        </div>
      </Modal>
    </Flex>
  );
};

export default CreateForm;
