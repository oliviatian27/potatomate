class Api::V1::ConversationsController < ApplicationController
  skip_before_action :authorized, only: [:create,:index,:find_conversation]
  def index
    conversations = Conversation.all
    render json: conversations
  end

  def create
    @conversation=Conversation.between(conversation_params[:recipient_id],conversation_params[:sender_id])
    if @conversation[0]
      render json: ConversationSerializer.new(@conversation[0])
    else
        @newconversation=Conversation.create(conversation_params)
        if @newconversation.valid?
          render json: @newconversation
        else
          render json: { error: 'failed to create conversation' }, status: :not_acceptable
        end
    end
  end

  def find_conversation
    @conversations=Conversation.received(params[:id])
  end


  private

  def conversation_params
    params.require(:conversation).permit(:title,:recipient_id,:sender_id)
  end
end

# if @conversation.save
#   @message=Message.new({:conversation_id=>@conversation.id,:user_id=>conversation_params[:sender_id],:content=>conversation_params[:title]})
#   if @message.save
#     serialized_data= MessageSerializer.new(@message).serializable_hash
#     MessagesChannel.broadcast_to @conversation,serialized_data
#     head :ok
#   end
# end
