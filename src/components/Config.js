import { connect } from "react-redux";
import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  CustomInput
} from "reactstrap";
import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import classnames from "classnames";
import "./Config.css";

const styles = theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(3)
  },
  group: {
    margin: theme.spacing(1, 0)
  }
});

class Component1 extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      useTabValue: "Tabs table"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const { sectionOne } = this.props.SearchEngineContent;
    return (
      <div>
        {this.renderSectionOne()}
        {this.renderSectionTwo()}
      </div>
    );
  }

  handleUseTabChange = event => {
    console.log(event.target.value);
  };

  renderSectionOne() {
    const classes = this.props;
    const { sectionOne } = this.props.SearchEngineContent;
    return (
      <Container className="r-section-one">
        <Card style={{ width: "100%" }}>
          <CardHeader>{sectionOne.layout}</CardHeader>
          <CardBody>
            <Container>
              <Row>
                <Col sm="12">
                    <RadioGroup
                      aria-label="Gender"
                      name="gender1"
                      className={`${classes.group} r-flex-justify-row-left`}
                      //   value={value}
                      //   onChange={handleChange}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio style={{ color: '#7799CC' }} />}
                        label={sectionOne.tabs}
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio style={{ color: '#7799CC' }}/>}
                        label={sectionOne.OnlyRows}
                      />
                    </RadioGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="12">
                    <RadioGroup
                      aria-label="Gender"
                      name="gender1"
                      className={`${classes.group} r-flex-justify-row-left`}
                      //   value={value}
                      //   onChange={handleChange}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio style={{ color: '#7799CC' }} />}
                        label={sectionOne.Horizental}
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio style={{ color: '#7799CC' }}/>}
                        label={sectionOne.Vertical}
                      />
                    </RadioGroup>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      </Container>
    );
  }

  renderSectionTwo() {
    const { sectionTwo } = this.props.SearchEngineContent;
    const { BackGround, Button: ButtonTabs, Header, Rows, Tabs } = sectionTwo;
    console.log(ButtonTabs);
    return (
      <Container style={{ marginTop: "50px" }}>
        <Nav tabs>
          <NavItem className="hover-hand">
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              {BackGround.header}
            </NavLink>
          </NavItem>
          <NavItem className="hover-hand">
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              {Header.header}
            </NavLink>
          </NavItem>
          <NavItem className="hover-hand">
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              {Tabs.header}
            </NavLink>
          </NavItem>
          <NavItem className="hover-hand">
            <NavLink
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
              {Rows.header}
            </NavLink>
          </NavItem>
          <NavItem className="hover-hand">
            <NavLink
              className={classnames({ active: this.state.activeTab === "5" })}
              onClick={() => {
                this.toggle("5");
              }}
            >
              {ButtonTabs.header}
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Container>
              <Row>
                <Col sm="12" className="r-flex-justify-row-center">
                  <h4>{BackGround.Yes}</h4>
                  <h4>{BackGround.No}</h4>
                </Col>
                <Col sm="12" className="r-flex-justify-row-center">
                  <h4>{BackGround.Width}</h4>
                  <h4>{BackGround.Height}</h4>
                </Col>
                <Col sm="12" className="r-flex-justify-row-center">
                  <h4>{BackGround.Corner}</h4>
                  <h4>{BackGround.Rounded}</h4>
                  <h4>{BackGround.Square}</h4>
                </Col>
                <Col sm="12" className="r-flex-justify-row-center">
                  <h4>{BackGround.BorderColor}</h4>
                  <h4>{BackGround.Size}</h4>
                </Col>
                <Col sm="12" className="r-flex-justify-row-center">
                  <h4>{BackGround.FillColor}</h4>
                </Col>
              </Row>
            </Container>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12" className="r-flex-justify-row-center">
                <h4>{Header.No}</h4>
                <h4>{Header.Picture}</h4>
                <h4>{Header.Title}</h4>
              </Col>
              <Col sm="12" className="r-flex-justify-row-center">
                <h4>{Header.MarginTop}</h4>
                <h4>{Header.Align}</h4>
              </Col>
              <Col sm="12" className="r-flex-justify-row-center">
                inputText Save
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12" className="r-flex-justify-row-center">
                <h4>{Tabs.nbOfTabs}</h4>
                <h4>{Tabs.spinbet}</h4>
              </Col>
              <Col sm="12" className="r-flex-justify-row-center">
                <h4>{Tabs.Corner}</h4>
                <h4>{Tabs.Rounded}</h4>
                <h4>{Tabs.Square}</h4>
              </Col>
              <Col sm="12" className="r-flex-justify-row-center">
                <h4>{Tabs.BorderColor}</h4>
                <h4>{Tabs.Size}</h4>
              </Col>
              <Col sm="12" className="r-flex-justify-row-center">
                <h4>{Tabs.tabColor}</h4>
                <h4>{Tabs.Hovered}</h4>
              </Col>
              <Col sm="12" className="r-flex-justify-row-center">
                <h4>{Tabs.TextColor}</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12" className="r-flex-justify-row-center">
                <h4>{Rows.LabelPosition}</h4>
                <h4>{Rows.Outside}</h4>
                <h4>{Rows.Inside}</h4>
              </Col>
              <Col sm="12" className="r-flex-justify-row-center">
                <h4>{Rows.Align}</h4>
                <h4>{Rows.MarginButtom}</h4>
              </Col>
              <Col sm="12" className="r-flex-justify-row-center">
                <h4>{Tabs.BorderColor}</h4>
                <h4>{Tabs.Size}</h4>
              </Col>
              <Col sm="12" className="r-flex-justify-row-center">
                <h4>{Tabs.tabColor}</h4>
                <h4>{Tabs.Hovered}</h4>
              </Col>
              <Col sm="12" className="r-flex-justify-row-center">
                <h4>{Tabs.TextColor}</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col sm="12" className="r-flex-justify-row-center">
                <h4>{ButtonTabs.Position}</h4>
                <h4>{ButtonTabs.Right}</h4>
                <h4>{ButtonTabs.Buttom}</h4>
              </Col>
              <Col sm="12" className="r-flex-justify-row-center">
                <h4>{ButtonTabs.Align}</h4>
                <h4>{ButtonTabs.MarginLeft}</h4>
              </Col>
              <Col sm="12" className="r-flex-justify-row-center">
                <h4>{ButtonTabs.FieldCornor}</h4>
                <h4>{ButtonTabs.Rounded}</h4>
                <h4>{ButtonTabs.Square}</h4>
              </Col>
              <Col sm="12" className="r-flex-justify-row-center">
                <h4>{ButtonTabs.FieldSize}</h4>
                <h4>{ButtonTabs.Default}</h4>
                <h4>{ButtonTabs.FullWidth}</h4>
              </Col>
              <Col sm="12" className="r-flex-justify-row-center">
                <h4>{ButtonTabs.BorderColor}</h4>
                <h4>{ButtonTabs.Size}</h4>
              </Col>
              <Col sm="12" className="r-flex-justify-row-center">
                <h4>{ButtonTabs.ButtonColor}</h4>
                <h4>{ButtonTabs.Hovered}</h4>
              </Col>
              <Col sm="12" className="r-flex-justify-row-center">
                <h4>{ButtonTabs.ButtonText}</h4>
                input text
              </Col>
              <Col sm="12" className="r-flex-justify-row-center">
                <h4>{ButtonTabs.TextHovered}</h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    history: state.history
  };
};

const componenWithStyle = withStyles(styles, { withTheme: true })(Component1);

export default connect(mapStateToProps)(componenWithStyle);
