class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :name
      t.text :thumbnail

      t.timestamps null: false
    end

    add_index :users, :username, unique: true
  end
end
