class MessageSerializer < ActiveModel::Serializer
  attributes :id, :conversation_id, :content,:user_id, :created_at
  belongs_to :user
end
