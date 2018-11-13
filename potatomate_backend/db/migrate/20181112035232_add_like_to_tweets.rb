class AddLikeToTweets < ActiveRecord::Migration[5.2]
  def change
    add_column :tweets, :like, :integer
  end
end
