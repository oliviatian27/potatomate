class CreateConversations < ActiveRecord::Migration[5.2]
  def change
    create_table :conversations do |t|
      t.integer :recipient_id
      t.integer :sender_id
      t.string  :title
      t.timestamps
    end
  add_index :conversations, [:recipient_id, :sender_id], unique: true
  end
end
