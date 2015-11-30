class TweetsController < ApplicationController
  def index
    @tweets = Tweet.order(created_at: :desc).page(params[:page]).per(5)

    respond_to do |format|
      format.html
      format.json do
        if @tweets.next_page
          @next = root_path(page: @tweets.next_page, format: :json)
        end

        render json: @tweets, each_serializer: Tweets::IndexSerializer, meta: { next: @next }
      end
    end
  end
end
