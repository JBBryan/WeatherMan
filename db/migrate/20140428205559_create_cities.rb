class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities do |t|
      t.string :name
      t.integer :temperature
      t.timestamps
    end
  end
end
