/// <reference types='cypress' />

import MapPage from '../pages/MapPage';

const plungeLockers = [
  'Kalniškių g.18',
  'Laisvės g. 5',
  'J.Tumo-Vaižganto g. 81',
  'J.Tumo-Vaižganto g. 110',
  'Dariaus ir Girėno g. 54'
];


describe('LEET-E3: Parcel Locker Map', () => {

  beforeEach('Visit map page and accept cookies', () => {
    MapPage.visit();
    MapPage.acceptCookies();
  });

  it('LEET-12: Verify that searching with a valid city correct parcel lockers is displayed in the list.', () => {
    MapPage.element.getRecipientCountry().should('contain', 'Lietuva');
    MapPage.getSearchByLockerAddressOption().should('have.class', MapPage.selector.highlighted);
    MapPage.clickCityInput();
    MapPage.typeCity('Plungė');
    MapPage.clickCitySearchResultContaining('Plungė');

    MapPage.element.getSearchYieldedLockerAddresses().should('have.length', plungeLockers.length);
    cy.wrap(plungeLockers).each((lockerAddress) => {
      MapPage.element.getSearchYieldedLockerAddresses().should('contain', lockerAddress);
    });
  });

  it('LEET-13: Verify that searching with a valid street name correct parcel lockers is displayed within the list.', () => {
    MapPage.element.getRecipientCountry().should('contain', 'Lietuva');
    MapPage.getSearchByLockerAddressOption().should('have.class', MapPage.selector.highlighted);
    MapPage.typeLockerAddress('laisvės');
    cy.wait(500);

    MapPage.element.getSearchYieldedLockerAddresses().each(($yieldedLockerAddress) => {
      cy.wrap($yieldedLockerAddress.text().toLowerCase()).should('contain', 'laisvės');
    });
  });

  it('LEET-14: Verify that searching with a valid specific address correct parcel locker is displayed within the list.', () => {
    MapPage.element.getRecipientCountry().should('contain', 'Lietuva');
    MapPage.getSearchByLockerAddressOption().should('have.class', MapPage.selector.highlighted);
    MapPage.typeLockerAddress('Nidos g. 1, Dercekliai');
    cy.wait(500);

    MapPage.element.getSearchYieldedLockerAddresses()
      .should('have.length', 1)
      .invoke('text')
      .then((text) => text.trim())
      .and('eq', 'Nidos g. 1, Dercekliai');
  });

});