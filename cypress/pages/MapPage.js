/// <reference types='cypress' />

class MapPage {

  selector = {
    cookieAllowAllBtn: '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll',
    recipientCountry: '.us-country-dropdown__value',
    searchByOptions: '.p-radiobutton-box',
    highlighted: 'p-highlight',
    cityLabel: '[for="recipient-city"]',
    SearchInput: '[placeholder="Ieškoti"]',
    searchYieldedLockerAddresses: 'us-terminal-list p.text-sm',
    lockerAddressInput: '#address'
  };

  element = {
    getCookieAllowAllBtn: () => cy.get(this.selector.cookieAllowAllBtn),
    getRecipientCountry: () => cy.get(this.selector.recipientCountry),
    getSearchByOptions: () => cy.get(this.selector.searchByOptions),
    getCityLabel: () => cy.get(this.selector.cityLabel),
    getSearchInput: () => cy.get(this.selector.SearchInput),
    getSearchYieldedLockerAddresses: () => cy.get(this.selector.searchYieldedLockerAddresses),
    getLockerAddressInput: () => cy.get(this.selector.lockerAddressInput),
  };

  visit() {
    cy.visit('/map');
  };

  acceptCookies() {
    this.element.getCookieAllowAllBtn().click();
  };

  getSearchByLockerAddressOption() {
    return this.element.getSearchByOptions().eq(0);
  };

  clickCityInput() {
    this.element.getCityLabel().parent().find('input').filter(':visible').click();
  }

  typeCity(city) {
    this.element.getSearchInput().type(city);
  }

  typeLockerAddress(address) {
    this.element.getLockerAddressInput().type(address);
  }

  clickCitySearchResultContaining(city) {
    this.element.getCityLabel().parent().find('.generic-autocomplete-dropdown').contains('button', city).click();
  }

};

export default new MapPage();