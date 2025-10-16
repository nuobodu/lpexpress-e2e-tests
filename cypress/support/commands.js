import ParcelTrackingPage from '../support/pages/ParcelTrackingPage';


Cypress.Commands.add('trackParcel', (trackingNumber) => {

    ParcelTrackingPage.clearTrackingNumberInput();
    ParcelTrackingPage.trackParcel(trackingNumber);
});

Cypress.Commands.add('verifyDeliveryStatusIs', (expectedStatus) => {

    ParcelTrackingPage.verifyStatusIsDelivered(expectedStatus);
});