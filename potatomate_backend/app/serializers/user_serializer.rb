class UserSerializer < ActiveModel::Serializer
  attributes :id,:username,:email,:bio,:avatar
  has_many :reviews
  has_many :conversations
  has_many :messages
  has_many :followings
  has_many :followers
  has_many :tweets
end
