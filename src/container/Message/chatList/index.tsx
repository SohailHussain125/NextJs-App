import { Heading, SubHeading } from './../../../component/commonFonts'
import { ChatBody, ChatHeader, ChatListContainer, ChatUser, MessageType, UserImage } from './chatList.styles';

const ChatListComponent: React.FC = ({ data }: any) => {
    return (
        <ChatListContainer>
            <ChatHeader>
                <Heading>Messages</Heading>
                <MessageType>
                    <SubHeading color="#000" borderBottom="3px solid #37ad2a">All</SubHeading>
                    <SubHeading color="#37ad2a">@Me</SubHeading>
                    <SubHeading>unread</SubHeading>
                    <SubHeading>private</SubHeading>
                    <SubHeading>Marked</SubHeading>
                </MessageType>
            </ChatHeader>
            <ChatBody>
                <ChatUser>
                    <UserImage>KH</UserImage>
                </ChatUser>
            </ChatBody>
        </ChatListContainer>
    )
}

export default ChatListComponent;