import { PrettyChatWindow } from 'react-chat-engine-pretty'

const PrettyChatPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId="d376df9d-5544-46f9-a71a-87769b819b0d"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

export default PrettyChatPage