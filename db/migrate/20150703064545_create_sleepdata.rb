class CreateSleepdata < ActiveRecord::Migration
  def change
    create_table :sleepdata do |t|
      t.string :twitterid
      t.string :uuid
      t.float :sleepdata

      t.timestamps
    end
  end
end
