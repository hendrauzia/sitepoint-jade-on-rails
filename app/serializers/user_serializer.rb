class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :thumbnail, :links

  def links
    { self: user_path(self.object) }
  end
end
