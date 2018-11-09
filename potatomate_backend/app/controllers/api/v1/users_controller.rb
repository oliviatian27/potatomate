class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create,:show,:update,:find_friends]

    def profile
      render json: { user: UserSerializer.new(current_user) }, status: :accepted
    end

    def create
      @user = User.create(user_params)

      if @user.valid?
        @token = encode_token(user_id: @user.id)
        render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
      else
        render json: { error: 'failed to create user' }, status: :not_acceptable
      end
    end

    def update
      @user=User.find(params[:id])
      if @user.update(bio:user_params[:bio],avatar:user_params[:avatar])
         render json: { user: UserSerializer.new(@user) }, status: :created
       else
         render json: { error: 'failed to update user' }, status: :not_acceptable
       end
    end

    def show
      @user=User.find(params[:id])
      render json: { user: UserSerializer.new(@user)},status: :accepted
    end

    def find_friends
      @user=User.find(params[:id])
      @friends=@user.find_friend
      render json:@friends
    end

    private

    def user_params
      params.require(:user).permit(:username,:email, :password,:bio,:avatar)
    end
end
