class StaticPagesController < ApplicationController
  def home
  end

  def help
  end

  def about
    render :text => params
    
    
    
    p data = params[:data].gsub("_", ".").to_f
    p uid = params[:uid]
    
    sdata = Sdata.new(user_id: uid, sdata: data)
    sdata.save

  #   data = Pdata.create!
  end
end
