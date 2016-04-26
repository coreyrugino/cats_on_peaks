var Entry = React.createClass ({
  render: function() {
    var id = "entry-" + this.props.id;
    return(
      <div className = 'row'>
        <div className = 'col s3'>
          {this.props.date}
          {this.props.title}
          {this.props.story}
          {this.props.partners}
        </div>
      </div>
    )
  }

})
