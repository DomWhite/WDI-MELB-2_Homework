class Client
	attr_accessor :name, :age, :number_children, :pets

	def initialize(client_info)
		@name = client_info[:name]
		@age = client_info[:age]
		@number_children = client_info[:number_children]
		@pets = []
	end

	def to_s
		puts "#{@name} is #{@age} years old, has #{@number_children} children, and has #{@pets.count} pet(s)."
	end

	def to_s_pets
		print "#{@name} has #{@pets.count} pet/s."
	end
end
