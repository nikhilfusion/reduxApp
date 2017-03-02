import React, {PropTypes}  from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/CourseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }
  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }
  redirectToAddCoursePage() {
      console.log("inside redirect");
      browserHistory.push('/course');
  }

  render() {
    const {courses} = this.props;

    return(
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage} />
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursePage.propTypes= {
  dispatch : PropTypes.func.isRequired,
  courses : PropTypes.array.isRequired
};
function mapStateToProps(state, ownProps){
  return {
    courses : state.courses
  };
}
export default connect(mapStateToProps)(CoursePage);
