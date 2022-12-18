import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { sendNewMessage } from '../../../redux/slices/dialogs-slice'
import { Textarea } from '../../common/Input/Input'
import { required } from '../../common/utils/validators'

const MessageBox = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const dispatch = useDispatch()

  // const watchMessage = watch('newMessage')

  const onPressedEnter = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSubmit((data) => {
        dispatch(sendNewMessage(data.newMessage))
        reset()
      })()
    }
  }

  // const onSubmit = (data) => {
  //   dispatch(sendNewMessage(data.newMessage))
  //   reset()
  // }

  return (
    <form className="messagebox">
      <div className="messagebox__field">

        <Textarea name="newMessage" placeholder="Write a message..." className="messagebox__input"
          onKeyPress={onPressedEnter} register={register} rules={required()} errors={errors}
        />
      </div>

      <input type="submit" hidden />
    </form>
  )
}

export default MessageBox
