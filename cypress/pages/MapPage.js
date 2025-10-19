/// <reference types='cypress' />

class MapPage {

  selector = {
    cookieAllowAllBtn: '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll',
    countryDropdown: '#country',
    dropdownCountryLatvija: '[aria-label="lv"]',
    recipientCountry: '.us-country-dropdown__value',
    searchByOptions: '.p-radiobutton-box',
    highlighted: 'p-highlight',
    cityLabel: '[for="recipient-city"]',
    SearchInput: '[placeholder="Ieškoti"]',
    searchYieldedLockerAddresses: 'us-terminal-list p.text-sm',
    lockerAddressInput: '#address',
    parcelLockerListField: 'us-terminal-list',
    mapPopup: '#map us-map-popup',
    mapPopupLockerAddress: '#map us-map-popup .us-text-color-shadow'
  };

  element = {
    getCookieAllowAllBtn: () => cy.get(this.selector.cookieAllowAllBtn),
    getCountryDropdown: () => cy.get(this.selector.countryDropdown),
    getDropdownCountryLatvija: () => cy.get(this.selector.dropdownCountryLatvija),
    getRecipientCountry: () => cy.get(this.selector.recipientCountry),
    getSearchByOptions: () => cy.get(this.selector.searchByOptions),
    getCityLabel: () => cy.get(this.selector.cityLabel),
    getSearchInput: () => cy.get(this.selector.SearchInput),
    getSearchYieldedLockerAddresses: () => cy.get(this.selector.searchYieldedLockerAddresses),
    getLockerAddressInput: () => cy.get(this.selector.lockerAddressInput),
    getParcelLockerListField: () => cy.get(this.selector.parcelLockerListField),
    getMapPopup: () => cy.get(this.selector.mapPopup),
    getMapPopupLockerAddress: () => cy.get(this.selector.mapPopupLockerAddress)
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

  clickFoundParcelLocker(address) {
    this.element.getParcelLockerListField().contains('button', address).click();
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

  clickCountryDropdown() {
    this.element.getCountryDropdown().click();
  }

  clickDropdownCountryLatvija() {
    this.element.getDropdownCountryLatvija().click();
  }

  getCleanedMapPopupAddressText() {
    return this.element.getMapPopupLockerAddress()
      .invoke('text')
      .then((rawText) => {
        const singleSpacedText = rawText.replace(/\s+/g, ' ');
        const cleanedText = singleSpacedText.trim();
        return cleanedText;
      });
  }

};

export default new MapPage();