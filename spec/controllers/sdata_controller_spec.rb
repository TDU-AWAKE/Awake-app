require 'spec_helper'

describe SdataController do

  describe "GET 'datapost'" do
    it "returns http success" do
      get 'datapost'
      response.should be_success
    end
  end

end
