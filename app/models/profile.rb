class Profile < ApplicationRecord
  belongs_to :user
  validates :address_1, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :country, presence: true

  geocoded_by :address
  after_validation :geocode, if: -> { latitude.blank? && longitude.blank? }
  def address
    [address_1, address_2, city, state, "US" ].compact.join(', ')
  end
end
