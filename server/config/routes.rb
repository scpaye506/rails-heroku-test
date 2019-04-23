# frozen_string_literal: true

Rails.application.routes.draw do
  scope '/api' do
    resources :todos
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '*path', to: 'static_pages#index', constraints: lambda { |request|
    !request.xhr? && request.format.html?
  }
end
