class CreateTweets < ActiveRecord::Migration[5.2]
  def change
    create_table :tweets do |t|
      t.string :content
      t.string :image
      t.string :user_id
      t.integer :like

      t.timestamps
    end
  end
end
