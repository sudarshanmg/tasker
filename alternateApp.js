const labels = ['Finish', 'Activate'];
const panels = document.querySelectorAll('section');
const courses = document.querySelectorAll('li');

class SwitchCourse {

  static moveCourse() {

    const course = this.parentElement;
    const stat = panels[0].contains(course) ? 1 : 0;
    this.textContent = labels[stat];
    panels[stat].lastElementChild.append(course);
  }
  
}

for(const course of courses) {

  const [toolTip, statusBtn] = course.querySelectorAll('button');

  statusBtn.onclick = SwitchCourse.moveCourse;

}



