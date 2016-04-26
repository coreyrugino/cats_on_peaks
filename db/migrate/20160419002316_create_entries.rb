class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :title
      t.datetime :date
      t.text :story
      t.string :partners

      t.timestamps null: false
    end
  end
end
