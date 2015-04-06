require "pry"
require "./animal"
require "./client"

# TEST DATA
a1_info = {
	:name => "Tiberius",
	:age => 3,
	:gender => "male",
	:species => "dog"
}

animal_list = []

a1 = Animal.new(a1_info)

animal_list << a1


c1_info = {
	:name => "Dominic",
	:age => 28,
	:number_children => 0
}

client_list = []

c1 = Client.new(c1_info)

client_list << c1


def client_info(client_list)
	puts "Enter client name: "
	client_name = gets.chomp
	puts "Enter client age: "
	client_age = gets.chomp.to_i
	puts "Enter client's number of children: "
	client_number_children = gets.chomp.to_i

	client_info = {
		:name => client_name,
		:age => client_age,
		:number_children => client_number_children
	}	

	c = Client.new(client_info)

	client_list << c
end

def animal_info(animal_list)
	puts "Enter animal name: "
	animal_name = gets.chomp
	puts "Enter animal's age: "
	animal_age = gets.chomp.to_i
	puts "Enter animal's gender: "
	animal_gender = gets.chomp
	puts "Enter animal's species: "
	animal_species = gets.chomp

	animal_info = {
		:name => animal_name,
		:age => animal_age,
		:gender => animal_gender,
		:species => animal_species
	}

	a = Animal.new(animal_info)

	animal_list << a
end




def menu
	puts "		=== Welcome to Happi-Tails ==="
	puts " Please choose an option
		1. Display clients 		2. Display animals
		3. Create client 		4. Create animal
		5. Adopt an animal		6. Give up animal
		7. Give animal a toy 		8. Exit
		"
end

menu

choice = gets.chomp.to_i

while choice != 8

	case choice

		when 1
			client_list.each {|c| puts c.to_s}

			menu
			choice = gets.chomp.to_i

		when 2
			animal_list.each {|a| puts a.to_s}

			menu
			choice = gets.chomp.to_i

		when 3
			client_info(client_list)

			menu
			choice = gets.chomp.to_i

		when 4
			animal_info(animal_list)

			menu
			choice = gets.chomp.to_i

		when 5
			puts "Which client wishes to adopt? "
			client_list.each_with_index {|c, index| puts "For #{c.to_s_pets} press #{index}"}
			adopting_client = gets.chomp.to_i

			puts "Which animal is #{client_list[adopting_client].name} adopting? "
			animal_list.each_with_index {|a, index| puts "For #{a.to_s_list} press #{index}"}
			adopting_animal = gets.chomp.to_i

			client_list[adopting_client].pets << animal_list[adopting_animal]

			animal_list[adopting_animal].owner = client_list[adopting_client].name

			puts "#{animal_list[adopting_animal].name} has been adopted by #{client_list[adopting_client].name}."

			menu
			choice = gets.chomp.to_i

		when 6
			puts "Which client is choosing a pet for destruction? "
			client_list.each_with_index {|c, index| puts "For #{c.to_s_pets} press #{index}"}
			get_rid_client = gets.chomp.to_i

			selected_client = client_list[get_rid_client]

			puts "Which animal will #{selected_client.name} be destroying? "
			selected_client.pets.each_with_index {|a, index| puts "For #{a.to_s_list} press #{index}"}
			get_rid_animal = gets.chomp.to_i

			selected_animal = selected_client.pets[get_rid_animal]

			selected_client.pets.delete_at(get_rid_animal)

			selected_animal.owner = "No owner"

			puts "#{selected_client.name} has been rid of #{selected_animal.name.to_s}."

			menu
			choice = gets.chomp.to_i

		when 7
			puts "What toy would you like to give?"
			toy = gets.chomp

			puts "Which animal would you like to give the #{toy} to? "
			animal_list.each_with_index{|a, index| puts "For #{a.to_s_list} press #{index}"}
			chosen_animal = gets.chomp.to_i

			animal_received = animal_list[chosen_animal]
			animal_received.toys << toy

			puts "#{animal_received.name} has been given a #{toy}." 
			puts "#{animal_received.name}'s toy/s are: #{animal_received.toys.join(", ")}."

			menu
			choice = gets.chomp.to_i

		when 8
			break

	end

end

# binding.pry

