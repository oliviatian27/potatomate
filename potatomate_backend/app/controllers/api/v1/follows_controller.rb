class Api::V1::FollowsController < ApplicationController
  skip_before_action :authorized, only: [:create,:index]

  def create
    @follow = Follow.create(follow_params)

    if @follow.valid?

      render json: {id:@follow.followee_id}, status: :created
    else
      render json: { error: 'failed to create follow' }, status: :not_acceptable
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:follower_id,:followee_id)
  end

end
