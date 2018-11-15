class UserSerializer < ActiveModel::Serializer
  attributes :id,:username,:email,:bio,:avatar
  has_many :reviews
  has_many :followings
  has_many :followers
  has_many :tweets
  has_many :allMessages
  def allMessages
    @messages=Conversation.involving(object).joins(:messages).distinct.map{ |c|c.messages.where.not(:user_id=>object.id).last}
    .select{|message|message}

     @messages.map do|m|
       {content:m.content,user:User.find(m.user_id)}
     end
  end

  def tweets
    object.tweets.order("created_at DESC")
  end
  def reviews
    object.reviews.order("created_at DESC")
  end
end
