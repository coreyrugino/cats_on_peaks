class CreateSplitJournals < ActiveRecord::Migration
  def change
    create_table :split_journals do |t|
      t.datetime :date
      t.string :title
      t.textarea :body
      t.string :partners

      t.timestamps null: false
    end
  end
end
