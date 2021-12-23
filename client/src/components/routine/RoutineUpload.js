import React from 'react';

class RoutineUpload extends React.Component {
  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Routine</h1>
              <form className="row g-3">
                <div className="col-md-4">
                  <label for="faculty" class="form-label font-weight-bold">
                    Faculty:
                  </label>
                  <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Choose...</option>
                    <option value="BESE">BESE</option>
                    <option value="BECE">BECE</option>
                    <option value="BEIT">BEIT</option>
                    <option value="BECIVIL">BECIVIL</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label for="semester" class="form-label font-weight-bold">
                    Semester
                  </label>
                  <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Choose...</option>
                    <option value="1">one</option>
                    <option value="2">two</option>
                    <option value="3">three</option>
                    <option value="4">four</option>
                    <option value="5">five</option>
                    <option value="6">six</option>
                    <option value="7">seven</option>
                    <option value="8">eight</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label for="faculty" class="form-label font-weight-bold">
                    Shift:
                  </label>
                  <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Choose...</option>
                    <option value="day">day</option>
                    <option value="morning">morning</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      // <div>
      // <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
      //      <option selected>Choose...</option>
      //      <option value="1">One</option>
      //      <option value="2">Two</option>
      //      <option value="3">Three</option>
      //    </select>
      // </div>
    );
  }
}

export default RoutineUpload;
