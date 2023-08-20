import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic('d376df9d-5544-46f9-a71a-87769b819b0d', props.user.username, props.user.secret)
  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} />
    </div>
  )
};
export default ChatsPage;