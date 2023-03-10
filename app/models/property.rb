class Property < ApplicationRecord
    validates :name, presence: true
    validates :headline, presence: true
    validates :description, presence: true
    validates :address_1, presence: true
    validates :city, presence: true
    validates :state, presence: true
    validates :country, presence: true
    has_many_attached :images, dependent: :destroy
    monetize :price_cents, allow_nil: true
    geocoded_by :address
    after_validation :geocode, if: -> { latitude.blank? && longitude.blank? }
    has_many :reviews, as: :reviewable
    has_many :favorites, dependent: :destroy
    has_many :favorited_users, through: :favorites, source: :user
    
    def address
      #[address_1, address_2, city, state, "US" ].compact.join(', ')
  
      [state, country].compact.join(', ')
    end
    
    def default_image
      images.first
    end

end
