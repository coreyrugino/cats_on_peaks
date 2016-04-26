json.items @entries do |entry|
  binding.pry
  json.(entry, :id, :date, :title, :story, :partners)
  json.url entries_url(entries)
end
