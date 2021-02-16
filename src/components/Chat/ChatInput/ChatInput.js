import { AiOutlineSend } from 'react-icons/ai'
import { IoIosAddCircleOutline } from 'react-icons/io'
import {
  InputMessage,
  Form,
  AddFileContainer,
  AddFileLabel,
  AddFileInput,
  SendMessageBtn,
} from './ChatInputStyled'

const ChatInput = ({ input, setInput, sendMessage, channelName }) => {
  return (
    <Form onSubmit={sendMessage}>
      <AddFileContainer>
        <AddFileLabel htmlFor='file-input'>
          <IoIosAddCircleOutline size='3.5rem' color='#7289da' />
        </AddFileLabel>
        <AddFileInput
          id='file-input'
          type='file'
          accept='image/png, image/jpeg'
        />
      </AddFileContainer>
      <InputMessage
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={`Message #${channelName}`}
      />
      <SendMessageBtn type='submit'>
        <AiOutlineSend size='3rem' color='#7289da' />
      </SendMessageBtn>
    </Form>
  )
}

export default ChatInput
