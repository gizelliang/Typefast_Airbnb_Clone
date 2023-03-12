# frozen_string_literal: true

module Api
    class FavoritesController < ApplicationController
      before_action :authenticate_user!
      def create
        favorite = Favorite.create!(favorite_params)

        respond_to do |format|
          format.json do
            render json: favorite.to_json, status: :created
          end
        end
      end
      def favorite_params
        params.permit(:user_id, :property_id)
      end
    end
  end