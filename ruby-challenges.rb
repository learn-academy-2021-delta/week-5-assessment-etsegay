# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
def one_letter array,letter
    array.select do |value|
    value.include?(letter)
    end
end
p one_letter(beverages_array,letter_o)
p one_letter(beverages_array,letter_t)
    


# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def total array
    array.sum
    end
p total nums_array1
p total nums_array2

# --------------------3 a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. 
#Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
class Bike
    def initialize model, wheels, current_speed
        @model = model
        @wheel = wheels
        @current_speed = current_speed
    end
    def bike_info
       p "The #{@model} bike has #{@wheel} wheels and is going #{@current_speed} mph"
    end
    
# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase 
    #the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(10) => 20
# Expected output example: my_bike.brake(25) => 0
def pedal_faster current_speed
  @current_speed += current_speed
end
def brake current_speed
  if current_speed > @current_speed 
    @current_speed=0
  end
  if @current_speed > 0
    @current_speed -=current_speed
  end
end
def pedal_faster current_speed
  @current_speed += current_speed
end
def brake current_speed
  if current_speed >= @current_speed 
    return 0
  end
  if @current_speed > 0
    @current_speed -=current_speed
  end
end
end

bike = Bike.new("Trek",2,0)
bike.bike_info
p bike.pedal_faster 10
p bike.pedal_faster 10

p bike.brake 10
p bike.brake 20
