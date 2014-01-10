use Rack::Static,
  urls: ['/img', '/fonts', '/css', '/index.html', '/privacy.html', '/terms.html', '/about.html', '/js', '/jobs.html', '/favicon.ico', '/favicon@2x.ico'],
  root: 'public'

use Rack::Rewrite do
  r301      %r{/(.*).html},    '/$1'
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