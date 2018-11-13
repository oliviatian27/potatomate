class Api::V1::MessagesController < ApplicationController
  skip_before_action :authorized, only: [:create]
  def create
     message=Message.new(message_params)


     user=User.find(params[:recipient_id])
     recipient_id=message_params[:recipient_id]
     if message.save
       serialized_data= MessageSerializer.new(message).serializable_hash

       conversation=Conversation.find(message_params[:conversation_id])
       MessagesChannel.broadcast_to conversation,serialized_data
        ConversationsChannel.broadcast_to user,serialized_data
       head :ok
     end
    end

    private

    def message_params
      params.require(:message).permit(:content,:conversation_id,:user_id,:recipient_id)
   end
end
