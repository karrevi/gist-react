import React from 'react';
import { connect } from 'react-redux';
import { Descriptions, Card } from 'antd';


const Profile = (props) => {
    // const history = useHistory();

    return (
        <div>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="Image_default" src={props.user?.image_path} />}
            >
            </Card>
            <Descriptions title="User Info">
                <Descriptions.Item label="Nombre">{props.user?.name}</Descriptions.Item>
                <Descriptions.Item label="Email">{props.user?.email}</Descriptions.Item>
            </Descriptions>
        </div>
    )
}

const mapStateToProps = ({ user }) => ({ user: user.user });
export default connect(mapStateToProps)(Profile);