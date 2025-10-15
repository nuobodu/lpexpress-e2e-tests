/// <reference types='cypress' />

class ParcelTrackingPage {

  getCookieAllowAllButton() {
    return cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll');
  };

  getTrackingNumberInput() {
    return cy.get('[inputid="parcel-number-or-recipient-name"]');
  };

  getTrackButton() {
    return cy.contains('[data-pc-name="button"]', 'Rasti siuntą');
  };

  getLastDeliveryStatusBadge() {
    return cy.get('us-delivery-progress us-delivery-progress-badge').last();
  };

  getLastDeliveryProgressParagraph() {
    return cy.get('us-delivery-progress p').last();
  };


  visitTrackingPage() {
    cy.visit('/track');
  };
  
  acceptCookies() {
    this.getCookieAllowAllButton().click();
  };

  trackParcel(number) {
    this.getTrackingNumberInput().type(number)
    this.getTrackButton().click();
  };

  verifyStatusIsDelivered(statusMessage) {
    this.getLastDeliveryStatusBadge().should('contain', statusMessage);
    this.getLastDeliveryProgressParagraph().should('contain', `${statusMessage}`);
  };

  clearTrackingNumberInput() {
    this.getTrackingNumberInput().clear();
  };

};

export default new ParcelTrackingPage();