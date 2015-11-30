class UsersController < ApplicationController
  def show
    @user = User.find_by_username!(params[:username])
    @tweets = @user.tweets
  end
end
