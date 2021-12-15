import type { NextPage } from 'next'
import ChatListComponent from './chatList';
import { Col } from 'antd'
import { MessageContainer, RowStyle } from './Message.style';

const MessagePage: React.FC = ({ data }: any) => {
    return (

        <MessageContainer >
            <RowStyle>
                <Col lg={6} md={8} sm={10} xs={10}>
                    <ChatListComponent />
                </Col>
                <Col lg={18} md={16} sm={14} xs={14}>
                    Room
                </Col>
            </RowStyle>
        </MessageContainer>


    )
}

export default MessagePage
