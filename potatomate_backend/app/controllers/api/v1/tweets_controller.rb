class Api::V1::TweetsController < ApplicationController
  skip_before_action :authorized, only: [:create,:index]

  def index
      @tweets=Tweet.all
      @tweets=@tweets.order("created_at DESC")
      render json: @tweets,each_serializer:TweetSerializer
  end

  def create
    @tweet = Tweet.create(tweet_params)

    if @tweet.valid?

      render json: TweetSerializer.new(@tweet), status: :created
    else
      render json: { error: 'failed to create tweet' }, status: :not_acceptable
    end
  end

  private
  def tweet_params
    params.require(:tweet).permit(:content,:image,:user_id)
  end
end
