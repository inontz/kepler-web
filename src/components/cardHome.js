import { EditOutlined,EllipsisOutlined,SettingOutlined } from '@ant-design/icons';
import { Avatar,Card } from 'antd';
import cardImg from './img/rocket-ship.png'

const { Meta } = Card;

function CardHome (){
    return(
        <Card
    style={{ width: 300 }}
    cover={
      <img
        alt={"cardImg"}
        src={cardImg}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
      title="Kepler Project"
      description="Just code and learn from space"
    />
  </Card>
        // <Row gutter={64}>
        //     <Col>
        //         <Card title="Web Port" bordered={false}>
        //         Card content
        //         </Card>
        //     </Col>
        //     <Col>
        //         <Card title="Profile" bordered={false}>
        //         Card content
        //         </Card>
        //     </Col>
        // </Row>
    );
}

  
export default CardHome;