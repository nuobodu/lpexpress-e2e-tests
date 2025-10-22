/// <reference types='cypress' />

import MapPage from '../pages/MapPage';
import lockerData from '../fixtures/lockerData.json';

describe('LEET-E3: Parcel Locker Map', () => {

  beforeEach('Visit map page and accept cookies', () => {
    MapPage.visit();
    MapPage.acceptCookies();
  });

  it('LEET-12: Verify that searching with a valid city correct parcel lockers is displayed in the list.', () => {
    MapPage.element.getRecipientCountry().should('contain', 'Lietuva');
    MapPage.getSearchByLockerAddressOption().should('have.class', MapPage.selector.highlighted);
    MapPage.clickCityInput();
    MapPage.typeCity(lockerData.cityLT.plunge1.name);
    MapPage.clickCitySearchResultContaining(lockerData.cityLT.plunge1.name);

    MapPage.element.getSearchYieldedLockerAddresses().should('have.length', lockerData.cityLT.plunge1.lockersAddressesList.length);
    cy.wrap(lockerData.cityLT.plunge1.lockersAddressesList).each((lockerAddress) => {
      MapPage.element.getSearchYieldedLockerAddresses().should('contain', lockerAddress);
    });
  });

  it('LEET-13: Verify that searching with a valid street name correct parcel lockers is displayed within the list.', () => {
    const partOfAddress = lockerData.partOfAddress.valid;

    MapPage.element.getRecipientCountry().should('contain', 'Lietuva');
    MapPage.getSearchByLockerAddressOption().should('have.class', MapPage.selector.highlighted);
    MapPage.typeLockerAddress(partOfAddress);
    cy.wait(500);

    MapPage.element.getSearchYieldedLockerAddresses().each(($yieldedLockerAddress) => {
      cy.wrap($yieldedLockerAddress.text().toLowerCase()).should('contain', partOfAddress);
    });
  });

  it('LEET-14: Verify that searching with a valid specific address correct parcel locker is displayed within the list.', () => {
    const lockerAddress = lockerData.cityLT.klaipeda2.lockerAddress;

    MapPage.element.getRecipientCountry().should('contain', 'Lietuva');
    MapPage.getSearchByLockerAddressOption().should('have.class', MapPage.selector.highlighted);
    MapPage.typeLockerAddress(lockerAddress);
    cy.wait(500);

    MapPage.element.getSearchYieldedLockerAddresses()
      .should('have.length', 1)
      .invoke('text')
      .then((text) => text.trim())
      .and('eq', lockerAddress);
  });

  it('LEET-19: Verify that searching with a non-existent address returns no results and displays an appropriate message.', () => {
    const partOfAddress = lockerData.partOfAddress.invalid;

    MapPage.element.getRecipientCountry().should('contain', 'Lietuva');
    MapPage.getSearchByLockerAddressOption().should('have.class', MapPage.selector.highlighted);
    MapPage.typeLockerAddress(partOfAddress);
    cy.wait(500);

    MapPage.element.getParcelLockerListField()
      .should('not.be.visible');
  });

  it(`LEET-20: Verify that clicking an address in the search result list displays that locker's detailed information card on the map.`, () => {
    const lockerAddress = lockerData.cityLT.vilnius2.lockerAddress;

    MapPage.element.getRecipientCountry().should('contain', 'Lietuva');
    MapPage.getSearchByLockerAddressOption().should('have.class', MapPage.selector.highlighted);
    MapPage.typeLockerAddress(lockerAddress);
    cy.wait(500);
    MapPage.clickFoundParcelLocker(lockerAddress);
    cy.wait(500);

    MapPage.element.getMapPopup().should('be.visible')
    MapPage.getCleanedMapPopupAddressText().should('equal', lockerAddress);
  });

  it(`LEET-21: Verify that clicking an address in the search result list displays that locker's detailed information card on the map.`, () => {
    const lockerAddress = lockerData.cityLV.barkava1.lockerAddress;

    MapPage.clickCountryDropdown();
    MapPage.clickDropdownCountryLatvija();
    MapPage.element.getRecipientCountry().should('contain', 'Latvija');
    MapPage.typeLockerAddress(lockerAddress);
    cy.wait(500);
    MapPage.clickFoundParcelLocker(lockerAddress);
    cy.wait(500);

    MapPage.element.getMapPopup().should('be.visible');
    MapPage.getCleanedMapPopupAddressText().should('equal', lockerAddress);
  });

});