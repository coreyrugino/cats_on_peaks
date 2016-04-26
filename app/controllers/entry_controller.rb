class EntriesController < ApplicationController

  def index
    binding.pry
    # @entries = Entry.all
    render json: Entry.all.order(:date)
  end

  def create
    binding.pry
    entry = Entry.create(entry_params)
    render json: entry
  end

  private

    def entry_params
      params.require(:entry).permit(:story, :date, :title, :partners)
    end
end
