import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return(
      <div className="jumbotran">
        <h1>Landing Page</h1>
        <p>Lepsum tpojiero ejvwkfv ekhjkhkvhkveh</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}
export default HomePage;
