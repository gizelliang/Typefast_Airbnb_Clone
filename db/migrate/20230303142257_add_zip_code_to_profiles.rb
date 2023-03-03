class AddZipCodeToProfiles < ActiveRecord::Migration[7.0]
  def change
    add_column :profiles, :zip_code, :string
    add_column :profiles, :string, :string
  end
end
