class Tweets::IndexSerializer < TweetSerializer
  has_one :user
end
