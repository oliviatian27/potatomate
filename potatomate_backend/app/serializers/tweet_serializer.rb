class TweetSerializer < ActiveModel::Serializer
  attributes :id,:content,:image,:created_at,:like
  belongs_to :user

end
