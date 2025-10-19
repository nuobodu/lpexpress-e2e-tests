/// <reference types='cypress' />

class SendPage {

  selector = {
    cookieAllowAllBtn: '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll',
    receiverCountrySelect: 'us-parcel-country-selector input',
    countryLatvija: 'button[id="2"]',
    parcelSendMethods: 'us-parcel-method-selector button',
    btnSelected: 'us-bg-background-secondary',
    lockerToLockerDeliveryOption: '#option_t2t',
    shipmentSizeButtons: 'us-parcel-size-selector us-slim-tile-selector button',
    orderDetailsBtn: 'us-order-info button',
    sender: {
      nameInput: '#sender-name',
      phoneInput: '#sender-phone',
      emailInput: '#sender-email',
      nameErrorField: 'us-anonymous-sender [controlname="name"]',
      phoneErrorField: 'us-anonymous-sender [controlname="phone"]',
      emailErrorField: 'us-anonymous-sender [controlname="email"]'
    },
    receiver: {
      nameInput: '#recipient-name',
      phoneInput: '#recipient-phone',
      emailInput: '#recipient-email',
      nameErrorField: 'us-terminal-recipient [controlname="name"]',
      phoneErrorField: 'us-terminal-recipient [controlname="phone"]',
      cityErrorField: 'us-terminal-recipient [controlname="city"]',
      lockerErrorField: 'us-terminal-recipient [controlname="terminal"]',
    },
    cityLabel: '[for="recipient-city"]',
    cityInputWrapper: 'div.us-float-label > us-generic-autocomplete > div',
    SearchInput: '[placeholder="Ieškoti"]',
    citySearchResultFirst: '[id="0"]',
    lockerInput: '[id="terminalLookupComponentRef"]',
    lockerSearchResults: '[id="terminalLookupComponentRef"] .generic-autocomplete-dropdown',
    expandDetailsButtons: '.us-cart-view__action-column button',
    expandedDetailsListItems: '.us-cart-item-data-item',
    mandatory: 'ng-invalid'
  };

  element = {
    getCookieAllowAllBtn: () => cy.get(this.selector.cookieAllowAllBtn),
    getReceiverCountrySelect: () => cy.get(this.selector.receiverCountrySelect),
    getCountryLatvija: () => cy.get(this.selector.countryLatvija),
    getParcelLockerMethodButtons: () => cy.get(this.selector.parcelSendMethods),
    getLockerToLockerDeliveryOption: () => cy.get(this.selector.lockerToLockerDeliveryOption),
    getShipmentSizeButtons: () => cy.get(this.selector.shipmentSizeButtons),
    getNextBtn: () => cy.get(this.selector.orderDetailsBtn),
    getSender: {
      nameInput: () => cy.get(this.selector.sender.nameInput),
      phoneInput: () => cy.get(this.selector.sender.phoneInput),
      emailInput: () => cy.get(this.selector.sender.emailInput),
      nameErrorField: () => cy.get(this.selector.sender.nameErrorField),
      phoneErrorField: () => cy.get(this.selector.sender.phoneErrorField),
      emailErrorField: () => cy.get(this.selector.sender.emailErrorField)
    },
    getReceiver: {
      nameInput: () => cy.get(this.selector.receiver.nameInput),
      phoneInput: () => cy.get(this.selector.receiver.phoneInput),
      emailInput: () => cy.get(this.selector.receiver.emailInput),
      nameErrorField: () => cy.get(this.selector.receiver.nameErrorField),
      phoneErrorField: () => cy.get(this.selector.receiver.phoneErrorField),
      emailErrorField: () => cy.get(this.selector.sender.emailErrorField),
      cityErrorField: () => cy.get(this.selector.receiver.cityErrorField),
      lockerErrorField: () => cy.get(this.selector.receiver.lockerErrorField)
    },
    getCityLabel: () => cy.get(this.selector.cityLabel),
    getCityInputWrapper: () => cy.get(this.selector.cityInputWrapper),
    getSearchInput: () => cy.get(this.selector.SearchInput),
    getFirstCitySearchResult: () => cy.get(this.selector.citySearchResultFirst),
    getLockerInput: () => cy.get(this.selector.lockerInput),
    getLockerSearchResults: () => cy.get(this.selector.lockerSearchResults),
    getExpandDetailsButtons: () => cy.get(this.selector.expandDetailsButtons),
    getExpandedDetailsListItems: () => cy.get(this.selector.expandedDetailsListItems)
  };

  visit() {
    cy.visit('/cart/order/options');
  };

  acceptCookies() {
    this.element.getCookieAllowAllBtn().click();
  };

  getReceiverCountry() {
    return this.element.getReceiverCountrySelect().eq(0).invoke('val');
  }

  getParcelLockerMethodBtn(method) {
    return this.element.getParcelLockerMethodButtons().contains('button', method);
  }

  getExpandedDetailsListItemNamed(name) {
    return this.element.getExpandedDetailsListItems().contains('li', name);
  }

  getShipmentSizeBtn(size) {
    const escapedSize = Cypress._.escapeRegExp(size);
    const spaceTolerantRegex = new RegExp(`^\\s*${escapedSize}\\s*$`);
    return this.element.getShipmentSizeButtons().contains('button', spaceTolerantRegex);
  }

  getCityInput() {
    return this.element.getCityLabel().parent().find('input').first().filter(':visible');
  }

  getLockerInput() {
    return this.element.getLockerInput().find('input').first().filter(':visible');
  }

  clickReceiverCountryInput() {
    this.element.getReceiverCountrySelect().eq(0).click({ force: true });
  }

  clickCountryLatvija() {
    this.element.getCountryLatvija().click();
  }

  clickShipmentSizeBtn(size) {
    this.getShipmentSizeBtn(size).click();
  }

  clickNextBtn() {
    this.element.getNextBtn().contains('Toliau').click();
  }

  clickCityInput() {
    this.element.getCityLabel().parent().find('input').first().filter(':visible').click();
  }

  clickLockerInput() {
    this.element.getLockerInput().find('input').first().filter(':visible').click();
  }

  clickCitySearchResultContaining(city) {
    this.element.getCityLabel().parent().find('.generic-autocomplete-dropdown').contains('button', city).click();
  }

  clickLockerSearchResultContaining(nameOrAddress) {
    this.element.getLockerSearchResults().contains('button', nameOrAddress).click();
  }

  clickLockerAkropolis() {
    this.element.getCityVilniusBtn().click();
  };

  clickExpandDetailsBtnRow(rowNumber) {
    this.element.getExpandDetailsButtons().eq(rowNumber - 1).click();
  };

  typeCity(city) {
    this.element.getSearchInput().eq(0).type(city).wait(500);
  }

  typeLocker(name) {
    this.element.getSearchInput().eq(1).type(name).wait(500);
  }

  fillSenderAndReceiverDetails(data, countryCode) {
    if (data.sender.name) this.element.getSender.nameInput().type(data.sender.name);
    if (data.sender.phone) this.element.getSender.phoneInput().click().wait(500).type(data.sender.phone);
    if (data.sender.email) this.element.getSender.emailInput().type(data.sender.email);
    if (data.receiver.name) this.element.getReceiver.nameInput().type(data.receiver.name);
    if (data.receiver.email) this.element.getReceiver.emailInput().type(data.receiver.email);

    const receiverPhone = countryCode ? data.receiver.phone[countryCode] : data.receiver.phone.LT;

    if (receiverPhone) {
      this.element.getReceiver.phoneInput().click().wait(500).type(receiverPhone);
    }
  };

};

export default new SendPage();