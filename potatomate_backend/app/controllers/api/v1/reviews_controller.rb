class Api::V1::ReviewsController < ApplicationController
  skip_before_action :authorized, only: [:create,:get_item_reviews,:update]
  def create
     @tvmovie=Tvmovie.find_by(tmdbid:review_params[:tmdbid])
     if @tvmovie
       @review=@tvmovie.reviews.create(content:review_params[:content],rating:review_params[:rating],user_id:review_params[:user_id])
     else
       @newtvmovie=Tvmovie.create(name:review_params[:name],tmdbid:review_params[:tmdbid],rating_count:review_params[:rating_count],rating_average:review_params[:rating_average],media_type:review_params[:media_type],image:review_params[:image])
       @review=@newtvmovie.reviews.create(content:review_params[:content],rating:review_params[:rating],user_id:review_params[:user_id])
     end
     render json: @review
  end

  def get_item_reviews
    @tvmovie=Tvmovie.find_by(tmdbid:params[:tmdbid])
    if @tvmovie
      @reviews=@tvmovie.reviews.order("created_at DESC")
      render json: @reviews,each_serializer:ReviewSerializer
    else
      render json:[]
    end
  end

  def update
      @review=Review.find(params[:id])
      @review.increment!(:like)
      render json: ReviewSerializer.new(@review)
  end

  private

  def review_params
    params.require(:review).permit(:content,:rating,:user_id,:name,:tmdbid,:rating_count,:rating_average,:media_type,:image)
  end
end
