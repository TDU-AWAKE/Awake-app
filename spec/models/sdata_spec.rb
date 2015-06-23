require 'spec_helper'

describe Sdata do
  let(:user) { FactoryGirl.create(:user) }
  before do
    @sdata = Sdata.new(sdata: -0.12351818, user_id: user.id)
  end

  subject { @sdata }

  it { should respond_to(:sdata) }
  it { should respond_to(:user_id) }
end
