class GruffController < ApplicationController
  # require 'gruff'
  # require 'gnuplot'
  
  def show
    twitterid = params[:twitterid]
    uuid = params[:uuid]

    # twitterid = "sanex_now"
    # uuid = "asdf"
    
    @chart_data =[]
    Sleepdata.where(twitterid: twitterid, uuid: uuid).find_each do |sdata|
      @chart_data << [sdata[:created_at], sdata[:sleepdata]]
    end
    

        
  end
end
              
