import {Input,Space } from "antd";
import { UserOutlined } from '@ant-design/icons';
const { Search } = Input;

const UserIdSearch = value => console.log(value);
const UserCodeSearch = value => console.log(value);

const SearchUser = () => {

  return (
    <>
        
        <Space direction="vertical" align="center" size="large">
            유저 아이디로 찾기
            <Search
                addonBefore={<UserOutlined/>}
                placeholder=""
                allowClear
                onSearch={UserIdSearch}
                style={{ width: 300 }}
            />
            <br/>
            유저 코드로 찾기
            <Search
                addonBefore="#"
                placeholder=""
                allowClear
                onSearch={UserCodeSearch}
                style={{ width: 300 }}
            />
        </Space>


    </>
  );
};

export default SearchUser;


