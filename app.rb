require 'sinatra'
require 'rack/mobile-detect'

template_folder = './templates'

{'/' => 'index.html',
  '/jobs' => 'jobs.html',
  '/about' => 'about.html'}.each do |key, value|
  send :get, key do
    send_file File.join(template_folder, value)
  end
end

get '/privacy' do
  if request.env['X_MOBILE_DEVICE'] 
    send_file File.join(template_folder, 'privacy_text.html')
  else
    send_file File.join(template_folder, 'privacy.html')
  end
end

get '/terms' do
  if request.env['X_MOBILE_DEVICE'] 
    send_file File.join(template_folder, 'terms_text.html')
  else
    send_file File.join(template_folder, 'terms.html')
  end
end

get '/download' do
  cache_control :public, :must_revalidate, :max_age => 0

  puts "#{request.env['X_MOBILE_DEVICE']}"

  if request.env['X_MOBILE_DEVICE'] == "iPhone"
    url = "https://itunes.apple.com/app/backchat-anonymous-messaging/id659951602"
  elsif request.env['X_MOBILE_DEVICE'] == "Android"
    url = "https://play.google.com/store/apps/details?id=com.youtell.backchat"
  else
    #for now...
    url = "/"
  end

  puts "#{url}"
  redirect url, 303
end
