def menu
puts "Select an option and then enter two numbers"
	puts "a) addition"
	puts "b) subtraction"
	puts "c) multiplication"
	puts "d) division"
	puts "e) exponent"
	puts "f) sqaure"
	puts "g) square root"
	puts "q) quit crappy calculator"
end

def runCalc(choice, firstNumber, secondNumber)
	if choice == "a"
		result = firstNumber + secondNumber
		puts "#{firstNumber} + #{secondNumber} = #{result}"

	elsif choice == "b"
		result = firstNumber - secondNumber
		puts "#{firstNumber} - #{secondNumber} = #{result}"

	elsif choice == "c"
		result = firstNumber * secondNumber
		puts "#{firstNumber} * #{secondNumber} equals #{result}"

	elsif choice == "d"
		result = firstNumber / secondNumber
		puts "#{firstNumber} / #{secondNumber} = #{result}"

	elsif choice == "e"
		result = firstNumber ** secondNumber
		puts "#{firstNumber} ^ #{secondNumber} = #{result}"

	elsif choice == "f"
		result = firstNumber * firstNumber
		puts "#{firstNumber} squared = #{result}"

	elsif choice == "g"
		result = Math.sqrt(firstNumber)
		puts "The square root of #{firstNumber} = #{result}"

	end
end


puts "Welcome to the crappy calculator"

menu

choice = gets.chomp.downcase


while choice != "q"
	if !"f" || !"g"
		puts "Please enter first number"
		firstNumber = gets.chomp.to_i
		puts "Please enter second number"
		secondNumber = gets.chomp.to_i
		runCalc(choice, firstNumber, secondNumber)
		menu
		choice = gets.chomp.downcase
	else 
		puts "Please enter a number"
		firstNumber = gets.chomp.to_i
		runCalc(choice, firstNumber)
		menu
		choice = gets.chomp.downcase
	end

end

puts "Thanks for using the Crappy Calculator"



