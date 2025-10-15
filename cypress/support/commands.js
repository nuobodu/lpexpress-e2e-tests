import ParcelTrackingPage from '../support/pages/ParcelTrackingPage';

Cypress.Commands.add('visitTrackingPageAndAcceptCookies', () => {
    Cypress.log({
        name: 'visitTrackingPageAndAcceptCookies',
        message: 'Visit tracking page and accepting all cookies'
    });

    ParcelTrackingPage.visitTrackingPage();
    ParcelTrackingPage.acceptCookies();
});

Cypress.Commands.add('trackParcel', (trackingNumber) => {
    Cypress.log({
        name: 'trackParcel',
        message: `Tracking parcel with: ${trackingNumber}`,
        consoleProps: () => ({ trackingNumber }),
    });

    ParcelTrackingPage.clearTrackingNumberInput();
    ParcelTrackingPage.trackParcel(trackingNumber);
});

Cypress.Commands.add('verifyDeliveryStatusIs', (expectedStatus) => {
    Cypress.log({
        name: 'trackParcelAndVerifyDeliveryStatus',
        message: `Verifying delivery status with message ${expectedStatus}.`
    });

    ParcelTrackingPage.verifyStatusIsDelivered(expectedStatus);
});