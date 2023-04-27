import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const MyCard = (props) => {
  return (
    <a href={props.link}>
      <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          style={{height: 300, height: 200}}
          alt="example"
          src={props.imgSrc}
        />
      }
      // actions={[
      //   <SettingOutlined key="setting" />,
      //   <EditOutlined key="edit" />,
      //   <EllipsisOutlined key="ellipsis" />,
      // ]}
    >
      <Meta
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
        title={props.title}
        description={props.subtitle}
      />
    </Card>
    </a>
  )
};
export default MyCard;
