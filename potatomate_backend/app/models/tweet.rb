class Tweet < ApplicationRecord
  belongs_to :user
  belongs_to :tvmovie,optional: :true
end
