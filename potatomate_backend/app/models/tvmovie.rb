class Tvmovie < ApplicationRecord
  has_many :reviews
  has_many :users,through: :reviews
  has_many :tweets
end
