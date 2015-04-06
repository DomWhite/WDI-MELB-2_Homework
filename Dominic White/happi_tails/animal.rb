class Animal
attr_accessor :name, :age, :gender, :species, :toys, :owner

	def initialize(animal_info)

		@name = animal_info[:name]
		@age = animal_info[:age]
		@gender = animal_info[:gender]
		@species = animal_info[:species]
		@toys = []
		@owner = owner || "No owner"

	end
	
	def to_s
		puts "#{@name} is a #{@age} year old #{@gender} #{@species} owned by: #{@owner}. Toys: #{@toys.join(", ")}"
	end

	def to_s_list
		print "#{@name}, the #{@age} year old #{@gender} #{@species}."
	end
end