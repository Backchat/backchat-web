require './app'

use Rack::MobileDetect
run Sinatra::Application.new