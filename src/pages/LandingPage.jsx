import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Header from "../parts/Header";
import Hero from "../parts/Hero";
import MostPicked from "../parts/MostPicked";
import Categories from "../parts/Categories";
import Testimony from "../parts/Testimony";
import Footer from "../parts/Footer";

import Spinner from "../assets/images/spinner.svg";

import { fetchPage } from "../store/actions/page";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    if (!this.props.page.landingPage) {
      this.props.fetchPage(
        `https://staycationserver.herokuapp.com/api/v1/member/landing-page`,
        "landingPage"
      );
    }
  }

  render() {
    const { page } = this.props;

    if (!page.hasOwnProperty("landingPage"))
      return (
        <>
          <div className="container text-center">
            <h3 style={{ marginTop: 350 }}>Please Wait ...</h3>
            <p>This site takes a little time to wake the dynos :)</p>
            <img
              className="img-fluid mx-0 my-0"
              style={{ height: 100, width: 100 }}
              src={Spinner}
              alt=""
            />
          </div>
        </>
      );

    return (
      <Fragment>
        <Header {...this.props} />
        <Hero refMostPicked={this.refMostPicked} data={page.landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={page.landingPage.mostPicked}
        />
        <Categories data={page.landingPage.category} />
        <Testimony data={page.landingPage.testimonial} />
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
