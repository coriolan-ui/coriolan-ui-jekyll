/*globals MENU:true */
import React from 'react'

class Grades extends React.Component {
  render() {
    let { assignments } = MENU[this.props.params.courseId]

    return (
      <div>
        <h3>Grades</h3>
        <ul>
          {assignments.map(assignment => (
            <li key={assignment.id}>{assignment.grade} - {assignment.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

module.exports = Grades
