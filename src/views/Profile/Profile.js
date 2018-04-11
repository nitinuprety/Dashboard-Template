import React, {Component} from "react";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {
  Badge,
  Row,
  Col,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBlock,
  CardFooter,
  CardTitle,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Input,
  Table
} from "reactstrap";



class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
    };
  }



  render() {




    return (

      <div className="animated fadeIn">

          <Row>
            <Col sm="6" lg="6">
            <Card>
              <img className="img-styleNew dInline" src={'img/avatars/8.jpg'}/>
            </Card>
            </Col>

            <Col sm="6" lg="6">
            <Row>
              <Col sm="3" xs="3" className="cP-1">
              <Card className="cProfile">
                <p className="text-center">Job Done</p>
                <h4 className="text-center">19</h4>
              </Card>
              </Col>
              <Col sm="3" xs="3" className="cP-2">
              <Card className="cProfile">
                <p className="text-center">Ongoing Job</p>
                <h4 className="text-center">6</h4>
              </Card>
              </Col>
              <Col sm="3" xs="3" className="cP-2">
              <Card className="cProfile">
                <p className="text-center">Reject</p>
                <h4 className="text-center">6</h4>
              </Card>
              </Col>
              <Col sm="3" xs="3" className="cP-3">
              <Card className="cProfile">
                <p className="text-center">Upcomming</p>
                <h4 className="text-center">29</h4>
              </Card>
              </Col>
            </Row>

            <Col sm="6" lg="6">
              <Card className="width-card">
              <h5 className="cstyleText">Todo</h5>
                <section className="tasks">
                <header className="tasks-header">
                  <h2 className="tasks-title">Tasks</h2>
                  <a href="index.html" className="tasks-lists">Lists</a>
                </header>
                <fieldset className="tasks-list">
                  <label className="tasks-list-item">
                    <input type="checkbox" name="task_1" value="1" className="tasks-list-cb" checked></input>
                    <span className="tasks-list-mark"></span>
                    <span className="tasks-list-desc">On your mark</span>
                  </label>
                  <label className="tasks-list-item">
                    <input type="checkbox" name="task_2" value="1" className="tasks-list-cb" checked></input>
                    <span className="tasks-list-mark"></span>
                    <span className="tasks-list-desc">Get set</span>
                  </label>
                  <label className="tasks-list-item">
                    <input type="checkbox" name="task_2" value="1" className="tasks-list-cb" checked></input>
                    <span className="tasks-list-mark"></span>
                    <span className="tasks-list-desc">Meating</span>
                  </label>
                  <label className="tasks-list-item">
                    <input type="checkbox" name="task_3" value="1" className="tasks-list-cb"></input>
                    <span className="tasks-list-mark"></span>
                    <span className="tasks-list-desc">Go!</span>
                  </label>
                </fieldset>
               </section>
              </Card>
            </Col>

            </Col>

            

          </Row>






      </div>
    )
  }
}

export default Profile;
