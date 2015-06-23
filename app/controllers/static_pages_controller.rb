class StaticPagesController < ApplicationController
  def home
  end

  def help
  end

  def about
    render :text => params
  end
end
