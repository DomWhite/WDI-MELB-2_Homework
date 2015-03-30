def leap_year?(year)
	if year % 4 == 0
		if (year % 100 == 0) && (year % 400 == 0)
				puts "#{year} is a leap year"
			else 
				puts "#{year} is NOT a leap year"
		end
	else
	puts "#{year} is NOT a leap year"
	end
end

leap_year?(2000)