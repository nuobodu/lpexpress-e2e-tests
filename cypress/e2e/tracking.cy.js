import ParcelTrackingPage from '../support/pages/ParcelTrackingPage';

const deliveredTrackingNumbers = [
  "CC944279314LT",
  "CJ009576563LT",
  "LL018592621FR"
];

describe('LEET-E1: Parcel Tracking Feature', () => {

  beforeEach('Visit tracking page and accept cookies', () => {
    cy.visitTrackingPageAndAcceptCookies();
  });

  it('LEET-7: Verify tracking a parcel with a delivered status', () => {

    cy.wrap(deliveredTrackingNumbers).each((trackingNumber) => {
      cy.trackParcel(trackingNumber);
      cy.verifyDeliveryStatusIs('Siunta pristatyta');
    });

  }); 

});