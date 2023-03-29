module Api
  class GreetingsController < ApplicationController
    def index
      @greetings = Greeting.all

      render json: @greetings
    end
  end
end
