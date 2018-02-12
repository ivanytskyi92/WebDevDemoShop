var links = ['https://instagram.com/ivanytskyi92/', 'https://twitter.com/ivanytskyi_', 'https://github.com/ivanytskyi92', 'https://codepen.io/fsociety/', 'https://linkedin.com/in/volodymyr-ivanytskyi-8471b2ba/'];

var FontAwesome = function FontAwesome(props) {
  return React.createElement('i', { className: 'fa fa-' + props.name });
};

var SocialItem = function SocialItem(props) {
  return React.createElement(
    'li',
    null,
    React.createElement(
      'a',
      { href: props.link, target: '_blank' },
      React.createElement(FontAwesome, { name: props.name })
    )
  );
};

var Nav = function Nav(props) {
  return React.createElement(
    'ul',
    { className: 'navbar-list ' + props.className },
    props.links.map(function (link) {
      if (link.indexOf('https://') === 0) {
        var name = link.substr(8).split('/')[0].split('.')[0];
        return React.createElement(SocialItem, { link: link, key: name, name: name });
      }
      if (link.indexOf('http://') === 0) {
        var _name = link.substr(7).split('/')[0].split('.')[0];
        return React.createElement(SocialItem, { link: link, key: _name, name: _name });
      }
      if (link.indexOf('www.') === 4) {
        var _name2 = link.substr(4).split('/')[0].split('.')[0];
        return React.createElement(SocialItem, { link: link, key: _name2, name: _name2 });
      }
    })
  );
};

var App = function App() {
  return React.createElement(
    'div',
    { className: 'container' },
    React.createElement(Nav, { links: links }),
    React.createElement(
      'div',
      { className: 'text' },
      React.createElement(
        'h1',
        { className: 'header' },
        ' There are my social networks contacts:'
      ),
      React.createElement(
        'p',
        { className: 'paragraph' },
        'Instagram, Twitter, Github, Codepen, LinkedIn;',
        React.createElement('br'),
        'You can contact me by this references. See you !'
      )
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

