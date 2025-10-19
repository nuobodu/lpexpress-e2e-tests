/// <reference types='cypress' />

class SendPage {

  selector = {
    cookieAllowAllBtn: '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll',
    receiverCountrySelect: 'us-parcel-country-selector input',
    parcelSendMethods: 'us-parcel-method-selector button',
    btnSelected: 'us-bg-background-secondary',
    lockerToLockerDeliveryOption: '#option_t2t',
    shipmentSizeButtons: 'us-parcel-size-selector us-slim-tile-selector button',
    orderDetailsBtn: 'us-order-info button',
    sender: {
      nameInput: '#sender-name',
      phoneInput: '#sender-phone',
      emailInput: '#sender-email'
    },
    receiver: {
      nameInput: '#recipient-name',
      phoneInput: '#recipient-phone',
      emailInput: '#recipient-email'
    },
    cityLabel: '[for="recipient-city"]',
    SearchInput: '[placeholder="Ieškoti"]',
    citySearchResultFirst: '[id="0"]',
    lockerInput: '[id="terminalLookupComponentRef"]',
    lockerSearchResults: '[id="terminalLookupComponentRef"] .generic-autocomplete-dropdown',
    expandDetailsButtons: '.us-cart-view__action-column button',
    expandedDetailsListItems: '.us-cart-item-data-item'
  };

  element = {
    getCookieAllowAllBtn: () => cy.get(this.selector.cookieAllowAllBtn),
    getReceiverCountrySelect: () => cy.get(this.selector.receiverCountrySelect),
    getParcelLockerMethodButtons: () => cy.get(this.selector.parcelSendMethods),
    getLockerToLockerDeliveryOption: () => cy.get(this.selector.lockerToLockerDeliveryOption),
    getShipmentSizeButtons: () => cy.get(this.selector.shipmentSizeButtons),
    getNextBtn: () => cy.get(this.selector.orderDetailsBtn),
    getSender: {
      nameInput: () => cy.get(this.selector.sender.nameInput),
      phoneInput: () => cy.get(this.selector.sender.phoneInput),
      emailInput: () => cy.get(this.selector.sender.emailInput),
    },
    getReceiver: {
      nameInput: () => cy.get(this.selector.receiver.nameInput),
      phoneInput: () => cy.get(this.selector.receiver.phoneInput),
      emailInput: () => cy.get(this.selector.receiver.emailInput),
    },
    getCityLabel: () => cy.get(this.selector.cityLabel),
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

  clickShipmentSizeBtn(size) {
    this.element.getShipmentSizeButtons().contains(size).click();
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
    this.element.getSearchInput().eq(0).type(city);
  }

  typeLocker(name) {
    this.element.getSearchInput().eq(1).type(name);
  }

  fillSenderAndReceiverDetails(data) {
    if (data.sender.name) this.element.getSender.nameInput().type(data.sender.name);
    if (data.sender.phone) this.element.getSender.phoneInput().click().wait(1000).type(data.sender.phone);
    if (data.sender.email) this.element.getSender.emailInput().type(data.sender.email);
    if (data.receiver.name) this.element.getReceiver.nameInput().type(data.receiver.name);
    if (data.receiver.phone) this.element.getReceiver.phoneInput().click().wait(1000).type(data.receiver.phone);
    if (data.receiver.email) this.element.getReceiver.emailInput().type(data.receiver.email);
  };

};

export default new SendPage();