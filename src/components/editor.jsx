var React = require('react');
var SubstanceEditor = require('substance/ui/editor');
var Component = require('substance/ui/component');
var $$ = Component.$$;

var Editor = React.createClass({
  componentWillMount: function() {
    this.setState({
      contentEditor: null
    })
  },

  componentDidMount: function() {
    var container = this.refs.substance_editor;
    this.setState({
      contentEditor: Component.mount($$(SubstanceEditor, {
        content: this.props.initialValue || ''
      }), container);
    });
  },
  
  render: function() {
    return (
      <div className="substance-editor" ref="substance_editor">
        Loading editor...
      </div>
    );
  }
});

module.exports = Editor;
