import React, {Component} from "react";
import {Bar, Pie, Line} from "react-chartjs-2";
import ReactHighcharts from 'react-highcharts';
var Highlight = require('react-highlight');
var HighchartsMore = require('highcharts-more');
HighchartsMore(ReactHighcharts.Highcharts);
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Calendar from 'react-calendar';
import {Timeline, TimelineEvent} from 'react-event-timeline';
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



class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      date: new Date()
    };
  }

  onChange(date){
    this.setState({ date })
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  render() {

    var config = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Monthly Average Rainfall'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Rainfall (mm)'
              }
          },
          tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
          },
          plotOptions: {
              column: {
                  pointPadding: 0.2,
                  borderWidth: 0
              }
          },
          series: [{
              name: 'Tokyo',
              data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

          }, {
              name: 'New York',
              data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

          }, {
              name: 'London',
              data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

          }, {
              name: 'Berlin',
              data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
          }]
      };

    var config2 = {chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie'
          },
          title: {
              text: 'Class-wise Distribution'
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: true,
                      format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  }
              }
          },
          series: [{
              name: 'Brands',
              colorByPoint: true,
              data: [{
                      name: 'Chrome',
                      y: 61.41,
                      sliced: true,
                      selected: true
                  }, {
                      name: 'Internet Explorer',
                      y: 11.84
                  }, {
                      name: 'Firefox',
                      y: 10.85
                  }, {
                      name: 'Edge',
                      y: 4.67
                  }, {
                      name: 'Safari',
                      y: 4.18
                  }, {
                      name: 'Sogou Explorer',
                      y: 1.64
                  }, {
                      name: 'Opera',
                      y: 1.6
                  }, {
                      name: 'QQ',
                      y: 1.2
                  }, {
                      name: 'Other',
                      y: 2.61
                  }]
          }]};

          var products = [{
              id: 1,
              name: "Product1",
              price: 120
          }, {
              id: 1,
              name: "Product1",
              price: 120
          },{
              id: 1,
              name: "Product1",
              price: 120
          },{
              id: 1,
              name: "Product1",
              price: 120
          },{
              id: 1,
              name: "Product1",
              price: 120
          },{
              id: 1,
              name: "Product1",
              price: 120
          },{
              id: 2,
              name: "Product2",
              price: 80
          }];


    return (

      <div className="animated fadeIn">

        <Row className="mb--15">
          <Col xs="12" sm="6" lg="3" className="cP-1">
            <Card className="border-0">
            <CardBlock>
              <div className="float-left">
              <i className="fa fa-home fa-3x circle-icon"></i>
              </div>
              <div className="mt-8t">
              <div className="cText">New User</div>
              <div className="cTextC">2700</div>
              </div>
            </CardBlock>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3" className="cP-2">
            <Card className="border-0">
            <CardBlock>
              <div className="float-left">
              <i className="fa fa-file fa-3x circle-icon2"></i>
              </div>
              <div className="mt-8t">
              <div className="cText">Profit</div>
              <div className="cTextC">3600000</div>
              </div>
            </CardBlock>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3" className="cP-2">
            <Card className="border-0">
            <CardBlock>
              <div className="float-left">
              <i className="fa fa-info fa-3x circle-icon3"></i>
              </div>
              <div className="mt-8t">
              <div className="cText">Growth</div>
              <div className="cTextC">200%</div>
              </div>
            </CardBlock>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3" className="cP-3">
            <Card className="border-0">
            <CardBlock>
              <div className="float-left">
              <i className="fa fa-globe fa-3x circle-icon4"></i>
              </div>
              <div className="mt-8t">
              <div className="cText">Revenue</div>
              <div className="cTextC">226000</div>
              </div>
            </CardBlock>
            </Card>
          </Col>
        </Row>


        <Row>
          <Col sm="12" lg="8" className="p-0">
          <ReactHighcharts config={config}>
          </ReactHighcharts>
          </Col>
          <Col sm="6" lg="4" className="p-0">
          <ReactHighcharts config={config2}>
          </ReactHighcharts>
          </Col>
        </Row>


        <Row className="mt-15">
          <Col xs="12" sm="6" lg="4" className="mt-30 p-0">
            <Col sm="12" className="p-0">
              <Card className="border-0 bg-primary">
              <CardBlock>
                <div className="mt-8t float-left">
                <i className="fa fa-cloud fa-3x"></i>
                <h5 className="mt-8t"> Mostly Clear </h5>
                </div>
                <div className="mt-8t">
                <h5 className="cText3">Delhi,India</h5>
                <h1 className="cText3">81°F</h1>
                <h4 className="cText3">27°C</h4>
                </div>
              </CardBlock>
              </Card>
            </Col>
            <Col sm="12" className="p-0">
              <Card className="border-0">
              <CardBlock>
               <div className="testimonial-widget-one ">
                <div className="testimonial-content float-right">
                  <div className="testimonial-text float-right">
                  <i className="fa fa-quote-left"></i> &nbsp;
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. &nbsp;
                  <i className="fa fa-quote-right"></i>
                  </div>
                  <img className="testimonial-author-img" src={'img/avatars/8.jpg'}/>
                  <div className="testimonial-author">BILL GATES</div>
                  <div className="testimonial-author-position">Founder-Ceo. Microsoft Corp</div>
                </div>
               </div>
              </CardBlock>
              </Card>
            </Col>
          </Col>
          <Col xs="12" sm="12" lg="8" className="mt-30 pr-0">
              <BootstrapTable className="bg-white table-borderless" data={products} borderless hover>
                  <TableHeaderColumn className="bg-white" isKey dataField='id'>Product ID</TableHeaderColumn>
                  <TableHeaderColumn className="bg-white" dataField='name'>Product Name</TableHeaderColumn>
                  <TableHeaderColumn className="bg-white" dataField='price'>Product Price</TableHeaderColumn>
              </BootstrapTable>
          </Col>
        </Row>


        <Row className="mt-1t">
          <Col xs="12" sm="6" lg="3" className="cP-1">
            <Card className="border-0">
            <CardBlock className="p-0">
              <div className="float-left">
              <i className="fa fa-facebook fa-3x circle-iconS"></i>
              </div>
              <div className="mt-2t">
              <div className="cTextS">8,268</div>
              <div className="cTextCS">Likes</div>
              </div>
            </CardBlock>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3" className="cP-2">
            <Card className="border-0">
            <CardBlock className="p-0">
              <div className="float-left">
              <i className="fa fa-youtube fa-3x circle-iconS2"></i>
              </div>
              <div className="mt-2t">
              <div className="cTextS">12,545</div>
              <div className="cTextCS">Subscribes</div>
              </div>
            </CardBlock>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3" className="cP-2">
            <Card className="border-0">
            <CardBlock className="p-0">
              <div className="float-left">
              <i className="fa fa-twitter fa-3x circle-iconS3"></i>
              </div>
              <div className="mt-2t">
              <div className="cTextS">7,982</div>
              <div className="cTextCS">Tweets</div>
              </div>
            </CardBlock>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3" className="cP-3">
            <Card className="border-0">
            <CardBlock className="p-0">
              <div className="float-left">
              <i className="fa fa-linkedin fa-3x circle-iconS4"></i>
              </div>
              <div className="mt-2t">
              <div className="cTextS">9,658</div>
              <div className="cTextCS">Followers</div>
              </div>
            </CardBlock>
            </Card>
          </Col>
        </Row>


        <Row>
          <Col lg="4" sm="6" className="cP-1">
          <Card>
            <h5 className="cstyleText">Calendar</h5>
            <div>
              <Calendar
                className="calendar-style"
                onChange={this.onChange}
                value={this.state.date}
              />
            </div>
          </Card>
          </Col>

          <Col lg="4" sm="6" className="cP-2">
          <Card>
            <h5 className="cstyleText mb-20">Notice Board</h5>
            <div>
                <div>
                  <img className="img-style" src={'img/avatars/8.jpg'}/>
                  <div className="dInline ml-5t">
                  <h5 className="text-color1 dInline"> Mr. Puneet </h5>
                  <p className="pStyleN">Founder-Ceo. Microsoft Corp</p>
                  </div>
                </div> <hr />
                <div>
                  <img className="img-style" src={'img/avatars/8.jpg'}/>
                  <div className="dInline ml-5t">
                  <h5 className="text-color2 dInline"> Mr. Puneet </h5> <br />
                  <p className="pStyleN">Founder-Ceo. Microsoft Corp</p>
                  </div>
                </div> <hr />
                <div className="mb-30">
                  <img className="img-style" src={'img/avatars/8.jpg'}/>
                  <div className="dInline ml-5t">
                  <h5 className="text-color3 dInline"> Mr. Puneet </h5> <br />
                  <p className="pStyleN">Founder-Ceo. Microsoft Corp</p>
                  </div>
                </div>
            </div>
          </Card>
          </Col>

          <Col lg="4" sm="6" className="cP-3">
          <Card>
            <h5 className="cstyleText">Timeline</h5>
            <Timeline>
            <TimelineEvent title="John Doe sent a SMS"
                           createdAt="2016-09-12 10:06 PM"
                           icon={<i className="material-icons md-18">sms</i>}
            >
                I received the payment for $543. Should be shipping the item within a couple of hours.
            </TimelineEvent>
            <TimelineEvent
                title="You sent an email to John Doe"
                createdAt="2016-09-11 09:06 AM"
                icon={<i className="material-icons md-18">email</i>}
            >
                Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                    am losing patience. Can you expedite the process and pls do 
            </TimelineEvent>
    </Timeline>
          </Card>
          </Col>
        </Row>


        <Row>
         <Col sm="6" lg="4">
         <Card>
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
         <Col sm="6" lg="8" className="mt-30 pr-0">
              <BootstrapTable className="bg-white table-borderless" data={products} borderless hover>
                  <TableHeaderColumn className="bg-white" isKey dataField='id'>Product ID</TableHeaderColumn>
                  <TableHeaderColumn className="bg-white" dataField='name'>Product Name</TableHeaderColumn>
                  <TableHeaderColumn className="bg-white" dataField='price'>Product Price</TableHeaderColumn>
              </BootstrapTable>
          </Col>
        </Row>




      </div>
    )
  }
}

export default Dashboard;
