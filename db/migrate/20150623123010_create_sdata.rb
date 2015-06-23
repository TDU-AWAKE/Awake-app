class CreateSdata < ActiveRecord::Migration
  def change
    create_table :sdata do |t|
      t.integer :user_id
      t.float :sdata

      t.timestamps
    end
    add_index :sdata, [:user_id, :created_at]
  end
end
