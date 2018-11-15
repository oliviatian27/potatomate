class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }

    has_many :messages
    has_many :conversations, foreign_key: :sender_id
    has_many :reviews
    has_many :tvmovies,through: :reviews
    has_many :tweets
    has_many :follower_follows, foreign_key: :followee_id, class_name: "Follow"
    has_many :followers, through: :follower_follows, source: :follower
    has_many :followee_follows, foreign_key: :follower_id, class_name: "Follow"
    has_many :followings, through: :followee_follows, source: :followee

  def find_common_movie(friend)
    friend.tvmovies.select{|tvmovie|
      self.tvmovies.find_by(id:tvmovie.id)
    }
  end

  def find_friend
     friends=User.where.not(id:self.id).joins(:tvmovies).group(:id).where(tvmovies:{id:self.tvmovies.pluck(:id)})
     hash=Hash.new(0)
     friends.each  do |f|
       self.find_common_movie(f).each{|movie|
         hash[f.id]+=((self.reviews.find_by(tvmovie_id:movie.id).rating - f.reviews.find_by(tvmovie_id:movie.id).rating).abs)
          }
          puts f.id
          puts hash[f.id]
          puts self.find_common_movie(f).size
        hash[f.id]=(self.find_common_movie(f).size*10-hash[f.id])*10/self.find_common_movie(f).size

        # f.reviews.each do |review|
        #   if self.reviews.find_by(tvmovie_id:review.tvmovie_id) && review.rating==self.reviews.find_by(tvmovie_id:review.tvmovie_id).rating
        #      hash[f.id]+=1
        #   end
        # end
        # hash[f.id]=hash[f.id]*100/f.reviews.where(tvmovie_id:self.tvmovies.pluck(:id)).size
     end
     array=hash.sort_by {|k, v| -v}
    array.map { |u| {:user=>{id:u[0],username:User.find(u[0]).username,avatar:User.find(u[0]).avatar},:match=>u[1] }}

  end

  def find_interest_detail(friend)
    common_movies = self.find_common_movie(friend)
    result=[]
    common_movies.each{|movie|
      result<< {tvmovie:movie,selfRating:self.reviews.find_by(tvmovie_id:movie.id).rating,
                        friendRating:friend.reviews.find_by(tvmovie_id:movie.id).rating}
    }
    result
  end

end
