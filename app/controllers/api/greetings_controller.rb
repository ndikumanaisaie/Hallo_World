class Api::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all

    render json:  @greetings
  end
end
