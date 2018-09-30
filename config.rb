activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :sprockets

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
  set :relative_links, true
end

activate :deploy do |deploy|
  deploy.build_before    = true
  deploy.deploy_method   = :ftp
  deploy.host            = 'ftp.welcometodayoneofhappiness.com'
  deploy.path            = '/domains/welcometodayoneofhappiness.com/public_html'
  deploy.user            = 'u9657p33621'
  deploy.password        = 'oIpJGa2X'
end



# Reload the browser automatically whenever files change
# configure :development do
#   activate :livereload
# end

set :fonts_dir,  'fonts'
