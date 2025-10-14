import ParcelTrackingPage from '../support/pages/ParcelTrackingPage';

const DELIVERED_TRACKING_NUMBERS = [
  "CC944279314LT",
  "CJ009576563LT",
  "LL018592621FR"
];

describe('LEET-E1: Parcel Tracking Feature', () => {

  beforeEach('Visit tracking page', () => {
    ParcelTrackingPage.visitTrackingPage();
    ParcelTrackingPage.clickCookieAllowAllButton();
  });

  it('LEET-7: Verify tracking a parcel with a delivered status', () => {

    DELIVERED_TRACKING_NUMBERS.forEach((trackingNumber) => {
      ParcelTrackingPage.clearTrackingNumberInput();
      ParcelTrackingPage.trackParcel(trackingNumber);
      ParcelTrackingPage.verifyStatusIsDelivered(trackingNumber);
    });

  });

});