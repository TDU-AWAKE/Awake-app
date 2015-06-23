class StaticPagesController < ApplicationController
  def home
  end

  def help
  end

  def about
    render :text => params
    
    
    
    p data = params[:data].gsub("_", ".").to_f
    p uid = params[:uid]
    
    data = Sdata.new(user_id: uid, sdata: data)
    data.save

  #   data = Pdata.create!
  end
end
