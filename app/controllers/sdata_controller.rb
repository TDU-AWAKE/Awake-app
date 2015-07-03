# coding: utf-8
class SdataController < ApplicationController
  def datapost
    render :text => params

    
    p sleepdata = params[:sleepdata].gsub("_",".") # Nomethoderror
    p twitterid = params[:twitterid]
    p uuid = params[:uuid]


    # データベース登録
    data = Sleepdata.new(twitterid: twitterid, uuid: uuid, sleepdata: sleepdata)
    data.save
  end
end
