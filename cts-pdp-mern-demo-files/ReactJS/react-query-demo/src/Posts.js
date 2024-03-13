import React from "react";
import axios from "axios";
class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Posts: [
        {
          id: 1,
          text: "Hi, Its a beautiful day!",
        },
        {
          id: 2,
          text: "Hey there, I am going for a vacation",
        },
        {
          id: 3,
          text: "Just visited my favorite place. Guess what it is?",
        },
      ],
      isLoggedIn: false,
    };
    // this.onLogin = this.onLogin.bind(this);
  }

  // componentDidCatch(){

  // }

  componentDidMount(){
    axios.get("https://dummyjson.com/posts")
    .then(res => this.setState({Posts: res.data.posts}));
  }

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {this.state.isLoggedIn ? (
              <ul className="list-group">
                {this.state.Posts.map((item) => (
                  <li key={item.id} className="list-group-item">
                    {item.title}
                  </li>
                ))}
              </ul>
            ) : null}

            <button className="btn btn-secondary" onClick={this.onLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
