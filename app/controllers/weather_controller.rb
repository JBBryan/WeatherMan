class WeatherController < ApplicationController
  def new
  end

  def create
    city = City.new(name: params[:name], temperature: params[:temperature])
    city.save
    puts city
    render :json => { :example => 'response' }
    # respond_to do |format|
    #   format.js do
    #     # return some json
    #   end

    #   # format.html do
    #   #   # redirect
    #   # end
    # end
  end

end
