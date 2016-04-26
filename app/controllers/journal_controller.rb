class JournalController < ApplicationController
  def index
    @split_journals = Split_journal.all
  end
end
