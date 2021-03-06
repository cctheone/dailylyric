class Lyric < ActiveRecord::Base
	belongs_to :user

	has_many :lines
	accepts_nested_attributes_for :lines, reject_if: proc { |attributes| attributes['name'].blank? }, allow_destroy: true

	scope :draft, ->{where(published_at: nil)}
	scope :published, ->{where.not(published_at: nil).where("published_at <= ?", Time.now.in_time_zone("Eastern Time (US & Canada)"))}
	scope :scheduled, ->{where.not(published_at: nil).where("published_at >= ?", Time.now.in_time_zone("Eastern Time (US & Canada)"))}

	

	 attr_accessor :status

	 before_validation :clean_up_status

	 def clean_up_status
	 	self.published_at = case status
	 						when "Draft"
	 							nil
	 						when "Published"
	 							Time.zone.now
	 						else
	 							published_at
	 						end
	 	true
	 end
end
