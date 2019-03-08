Rails.application.routes.draw do
  resources :items
  root 'static_pages#home'
  get '/about' => 'static_pages#about'
  get '/products' => 'static_pages#products'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
