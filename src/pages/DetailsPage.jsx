import React, { Component } from "react";

import { connect } from "react-redux";

import Header from "../parts/Header";
import PageDetailTitle from "../parts/PageDetailTitle";
import FeaturedImage from "../parts/FeaturedImage";
import PageDetailDescription from "../parts/PageDetailDescription";
import BookingForm from "../parts/BookingForm";
import Activities from "../parts/Activities";
import Testimony from "../parts/Testimony";
import Footer from "../parts/Footer";

import { checkoutBooking } from "../store/actions/checkout";
import { fetchPage } from "../store/actions/page";

class DetailsPage extends Component {
  componentDidMount() {
    if (!this.props.page[this.props.match.params.id])
      this.props.fetchPage(
        `https://staycationserver.herokuapp.com/api/v1/member/detail-page/${this.props.match.params.id}`,
        this.props.match.params.id
      );
  }

  render() {
    const { page, match } = this.props;

    if (!page[match.params.id]) return null;

    const breadcrumb = [
      { pageTitle: "Home", pageHref: "/" },
      { pageTitle: "Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <div className="container">
          <PageDetailTitle
            breadcrumb={breadcrumb}
            data={page[match.params.id]}
          />
          <FeaturedImage data={page[match.params.id].imageId} />
          <section data-aos="fade-up" data-aos-duration="1000">
            <div className="row">
              <div className="col-sm-7">
                <PageDetailDescription data={page[match.params.id]} />
              </div>
              <div className="col-sm-5">
                <BookingForm
                  itemDetails={page[match.params.id]}
                  startBooking={this.props.checkoutBooking}
                />
              </div>
            </div>
          </section>
          <Activities data={page[match.params.id].activityId} />
          <Testimony data={page[match.params.id].testimonial} />
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
);
