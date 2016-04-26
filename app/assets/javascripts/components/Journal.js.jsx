var Journal = React.createClass({

  getInitialState: function() {
    return {entries: []}
  },

  componenetDidMount: function() {

    this.refreshList();
    // var self = this
    // $.ajax({
    //   url: '/entries',
    //   type: 'GET',
    //   success: function(data) {
    //     self.setState({entries: data});
    //   }
    // });
  },

  // got rid of below code and a blank hash for getInitialState and merged it all to componenetDidMount
  // getDefaultState: function() {
  //   return {entries: []};
  // },

  refreshList: function() {

    var self = this;
    $.ajax({
      url: '/entries',
      type: 'GET',
      success: function(data) {
        self.setState({entries: data});
      }
    });
  },

  showEntryForm: function() {

    this.setState({ showAdd: !this.state.showAdd});
  },

  addEntryForm: function() {
    if (this.state.showAdd){
      return(
        <div>
          <form onSubmit={this.submitEntry}>
            <div className='input-field'>
              <input autoFocus='true' placeholder='date' type='datetime' onChange={this.addEntryDate}/>
              <input placeholder='title' type='text' onChange={this.addEntryTitle}/>
              <input placeholder='story' type='text' onChange={this.addEntryStory}/>
              <input placeholder='partners' type='text' onChange={this.addEntryPartners}/>
              <button className='btn' type='submit'>Save</button>
            </div>
          </form>
        </div>
      )
    }
  },

  addEntryDate: function(e) {
    this.setState({entryDate: e.currentTarget.value});
  },

  addEntryTitle: function(e) {
    this.setState({entryTitle: e.currentTarget.value});
  },

  addEntryStory: function(e) {
    this.setState({entryStory: e.currentTarget.value});
  },

  addEntryPartners: function(e) {
    this.setState({entryPartners: e.currentTarget.value});
  },

  submitEntry: function(e) {
    e.preventDefault();
    // var date = this.state.entryDate;
    // var title = this.state.entryTitle;
    // var story = this.state.entryStory;
    // var partners = this.state.entryPartners;
    var self = this;

    $.ajax({
      url: '/entries',
      type: 'POST',
      data: {entry: {date: this.state.entryDate, title: this.state.entryTitle, story: this.state.entryStory, partners: this.state.entryPartners}},
      dataType: "json",
      success: function(data) {
        var entries = self.state.entries;
        entries.push({ id: data.id, date: data.date, title: data.title, story: data.story, partners: data.partners, complete: data.complete});
        self.setState({ entries: entries, showAdd: false, entryDate: null, entryTitle: null, entryStory: null, entryPartners: null});
      },
      error: function(data) {
        alert('cats meow')
      },
    });
  },

  displayEntries: function() {
    debugger
    if(this.state.entries.length) {
      var entries: [];
      for (var i = 0; i < this.state.entries.length; i++){
        var item = this.state.items[i];
        var key = "entry-" + entry.id;
        entries.push(<entry key={key} id={entry.id} date={entry.date} title={entry.title} story={entry.story} partners={entry.partners}/>);
      }
      return entries;
  }else{
    return(<h5 className='center'>No Entries To Display. Please Create One.</h5>);
    }
  },

  render: function() {
    return(<div>
            <a className='btn' onClick={this.showEntryForm}>Add Journal Entry</a>
            {this.addEntryForm()}
            <div className= 'card green'>
              <div className= 'card-content white-text'>
                <span className= 'card-title'>Ski Days</span>
                {this.displayEntries()}
              </div>
            </div>
          </div>);
  }
})
