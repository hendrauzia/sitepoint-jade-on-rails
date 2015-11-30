class User < ActiveRecord::Base
  has_many :tweets

  def to_param
    username
  end
end
