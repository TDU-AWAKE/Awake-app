# coding: utf-8
class SdataController < ApplicationController
  def datapost
    render :text => params

    
    p sleepdata = "%x{params[:sleepdata]}".gsub("_",".").to_f # 苦肉策
    # paramsってStringクラス継承してないの？
    p twitterid = params[:twitterid]
    p uuid = params[:uuid]


    # データベース登録
    data = Sleepdata.new(twitterid: twitterid, uuid: uuid, sleepdata: sleepdata)
    data.save
  end
end
