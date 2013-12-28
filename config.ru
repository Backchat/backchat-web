use Rack::Static,
  urls: ['/img', '/fonts', '/css', '/privacy.html', '/terms.html', '/js', '/jobs.html', '/favicon.ico', '/favicon@2x.ico'],
  root: 'public'

map "/about" do 
run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/about.html', File::RDONLY)
  ]
}
end

map "/" do
run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
end