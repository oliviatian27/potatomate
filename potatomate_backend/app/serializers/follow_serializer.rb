class FollowSerializer < ActiveModel::Serializer
  attributes :id, :follower_id,:followee_id
  belongs_to :follower
  belongs_to :followee
end
