App({
  hello() {
    Meteor.call('hello', 'server');
  },
  render(){
    <div>
    <h1>Hello ViewModel, React, Cordova on Meteor</h1>
      <button b="click: hello">Hello</button>
    </div>
  }
});
