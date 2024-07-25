import React, { useState } from "react";
import { Button, Input, Table, TableColumnsType, message } from "antd";
import { mockData, MockData } from "../../data/mock";
import { SearchOutlined, CopyOutlined } from "@ant-design/icons";
import "./TableSection.css"; // Make sure to import your CSS file

const toFarsiNumber = (num: number | string): string => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
};

const formatAmount = (amount: string): string => {
  const number = parseInt(amount, 10);
  return ` ${toFarsiNumber(number.toLocaleString("fa-IR"))} ریال`;
};

const TableSection: React.FC = () => {
  const [data, setData] = useState<MockData[]>(mockData);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      message.success("Track ID copied to clipboard!");
    });
  };

  const columns: TableColumnsType<MockData> = [
    {
      title: "شماره تراکنش",
      dataIndex: "trackId",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }: any) => {
        return (
          <div style={{ padding: 8 }}>
            <Input
              autoFocus
              placeholder="شماره تراکنش مورد نظر"
              value={selectedKeys[0] || ""}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => confirm()}
              onBlur={() => confirm()}
            />

            <div style={{ marginTop: "8px" }}>
              <Button
                style={{ marginRight: "8px" }}
                type="primary"
                onClick={() => {
                  confirm();
                }}
              >
                Search
              </Button>

              <Button
                onClick={() => {
                  clearFilters();
                }}
                type="default"
              >
                Reset
              </Button>
            </div>
          </div>
        );
      },
      filterIcon: () => <SearchOutlined className="search-icon" />,
      onFilter: (value: any, record: MockData) => {
        return record.trackId.toString().includes(value);
      },
      render: (text: string) => (
        <span style={{ display: "flex", alignItems: "center" }}>
          {text}
          <CopyOutlined
            style={{ color: "#1890ff", marginRight: 6, cursor: "pointer" }}
            onClick={() => handleCopy(text)}
          />
        </span>
      ),
    },
    {
      title: "وضعیت تراکنش",
      dataIndex: "status",
      key: "status",
      render: (status: number) => (
        <span style={{ display: "flex", alignItems: "center" }}>
          {status === 1 && (
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "green",
                marginRight: 8,
                marginLeft: 1,
              }}
            ></span>
          )}
          {status === 1 ? "پرداخت موفق" : "پرداخت ناموفق"}
        </span>
      ),
    },
    {
      title: "تاریخ پرداخت",
      dataIndex: "paidAt",
      render: (text: string) => toFarsiNumber(text),
    },
    {
      title: "مبلغ ",
      dataIndex: "amount",
      render: (text: string) => formatAmount(text),
    },
    {
      title: "شماره کارت",
      dataIndex: "cardNumber",
      render: (text: string) => toFarsiNumber(text),
    },
  ];

  return (
    <div style={{ width: "50vw", margin: "0 auto" }}>
      <Table
        columns={columns}
        dataSource={data}
        rowKey="trackId"
        pagination={false}
        footer={() => `تعداد نتایج  : ${toFarsiNumber(data.length)}`}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row" : "table-row"
        }
        className="table-header table-footer"
      />
    </div>
  );
};

export default TableSection;
