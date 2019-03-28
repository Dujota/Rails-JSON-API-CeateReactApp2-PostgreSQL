namespace :start do
  desc "Start Development server"
  task :development do
    exec "foreman start -f Procfile.dev"
  end

  desc "start Production Server"
  task :production do
    exec "YARN_PRODUCTION=true yarn run postinstall && foreman start"
  end
end

task :start => "start:development"
