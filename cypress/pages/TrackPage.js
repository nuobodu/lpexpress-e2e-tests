/// <reference types='cypress' />

class TrackPage {

  selector = {
    cookieAllowAllBtn: '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll',
    parcelNumberInput: '[inputid="parcel-number-or-recipient-name"]',
    trackParcelBtn: '[data-pc-name="button"]',
    deliveryStatusBadges: 'us-delivery-progress us-delivery-progress-badge',
    deliveryProgressParagraphs: 'us-delivery-progress p',
    parcelNotFoundMessageParagraphs: 'us-empty-view p',
  };

  element = {
    getCookieAllowAllBtn: () => cy.get(this.selector.cookieAllowAllBtn),
    getParcelNumberInput: () => cy.get(this.selector.parcelNumberInput),
    getTrackParcelBtn: () => cy.contains(this.selector.trackParcelBtn, 'Rasti siuntą'),
    getNewestDeliveryStatusBadge: () => cy.get(this.selector.deliveryStatusBadges).last(),
    getProgressParagraphMessage: () => cy.get(this.selector.deliveryProgressParagraphs).last(),
    getParcelNotFoundMessage: () => cy.get(this.selector.parcelNotFoundMessageParagraphs).eq(0),
    getParcelNotFoundMessageDetails: () => cy.get(this.selector.parcelNotFoundMessageParagraphs).eq(1),
  };

  visit() {
    cy.visit('/track');
  };

  acceptCookies() {
    this.element.getCookieAllowAllBtn().click();
  };

  clearParcelNumberInput() {
    this.element.getParcelNumberInput().clear();
  };

  typeParcelNumber(number) {
    this.element.getParcelNumberInput().type(number);
  };

  clickTrackBtn() {
    this.element.getTrackParcelBtn().click();
  }

};

export default new TrackPage();