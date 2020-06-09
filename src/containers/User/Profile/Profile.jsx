import React from 'react';
import { connect } from 'react-redux';
import { Descriptions, Card, Row, Col } from 'antd';


const Profile = (props) => {
    // const history = useHistory();

    return (
        <div className="User-layout">
            <Row className="User_layout">
                <Col span={18} push={6}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="Image_default" src={props.user?.image_path} />}
                    >
                    </Card>
                </Col>
                <Col span={6} pull={18}>
                    <Descriptions title="User Info">
                        <Descriptions.Item label="Nombre">{props.user?.name}</Descriptions.Item>
                        <Descriptions.Item label="Email">{props.user?.email}</Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>
        </div>
    )
}

const mapStateToProps = ({ user }) => ({ user: user.user });
export default connect(mapStateToProps)(Profile);