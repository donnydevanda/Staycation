import React, { Component } from "react";
import { connect } from "react-redux";

import Loading from "../parts/Loading";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import MostPicked from "../parts/MostPicked";
import Categories from "../parts/Categories";
import Testimony from "../parts/Testimony";
import Footer from "../parts/Footer";

import { fetchPage } from "../store/actions/page";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    if (!this.props.page.landingPage) {
      this.props.fetchPage(
        `https://staycationserver.herokuapp.com/api/v1/member/landing-page`,
        "landingPage"
      );
    }
  }

  render() {
    const { page } = this.props;

    if (!page.hasOwnProperty("landingPage")) return <Loading />;

    return (
      <>
        <Header {...this.props} />
        <div className="container">
          <Hero
            refMostPicked={this.refMostPicked}
            data={page.landingPage.hero}
          />
          <MostPicked
            refMostPicked={this.refMostPicked}
            data={page.landingPage.mostPicked}
          />
          <Categories data={page.landingPage.category} />
          <Testimony data={page.landingPage.testimonial} />
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
