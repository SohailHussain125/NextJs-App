import type { NextPage } from 'next'
import styled from 'styled-components';
const MessageContainer = styled.div`
width:100%;
height:100vh;
`
const MessagePage: React.FC = ({ data }: any) => {
    return (

        <MessageContainer className='flex-center-center'>
            <h2>Message Container</h2>
        </MessageContainer>


    )
}

export default MessagePage
