class GruffController < ApplicationController
  # require 'gruff'
  # require 'gnuplot'
  
  def show
    # twitterid = params[:twitterid]
    # date = params[:uuid]

    # g = Gruff::Line.new
    # g.title = "My Graph"

    # g.theme = {:background_colors => %w[blue white]}

    # g.data("data1", [1, 3, 3, 6, 4, 3])
    # g.data("data2", [7, 8, 7, 10, 8, 9])
    # g.data("data3", [1, 2, 3, 5, 9, 8])
    # g.data("data4", [9, 9, 8, 9, 10, 9])
    
    # g.labels = {0 => '2010/01', 2 => '2010/03', 4 => '2010/05'}
    
    # send_data(g.to_blob, :type => 'image/png', :disposition=>'inline')

    @chart_data = [['2014-04-01', 60], ['2014-04-02', 65], ['2014-04-03', 64]]
        
  end
end
              
