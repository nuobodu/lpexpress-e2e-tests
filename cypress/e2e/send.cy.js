/// <reference types='cypress' />

import SendPage from '../pages/SendPage';

const data = {
  sender: {
    name: 'Jonas Jonaitis',
    phone: '69696996',
    email: 'jonas.jonaitis@gmail.com'
  },
  receiver: {
    name: 'Petras Petraitis',
    phone: '60606006',
    email: 'petras.petraitris@gmail.com'
  }
}

describe('LEET-E2: Parcel Sending Price Calculation', () => {

  beforeEach('Visit tracking page and accept cookies', () => {
    SendPage.visit();
    SendPage.acceptCookies();
  });

  afterEach(() => {
    cy.clearCookies();
  });

  it('LEET-9: Verify locker-to-locker price for the smallest (XS) parcel to be sent to Vilnius', () => {

    SendPage.getReceiverCountry().should('have.string', 'Lietuva');
    SendPage.getParcelLockerMethodBtn('Paštomatu').should('have.class', SendPage.selector.btnSelected);
    SendPage.element.getLockerToLockerDeliveryOption().should('have.class', SendPage.selector.btnSelected);
    SendPage.clickShipmentSizeBtn('XS');
    SendPage.clickNextBtn();

    SendPage.fillSenderAndReceiverDetails(data);
    SendPage.clickCitySelect();
    SendPage.typeCity('Vilnius');
    SendPage.clickCitySearchResultContaining('Vilnius');
    SendPage.clickLockerSelect();
    SendPage.typeLocker('Akropolis');
    SendPage.clickLockerSearchResultContaining('Akropolis');
    SendPage.clickNextBtn();
    SendPage.clickNextBtn();

    SendPage.clickExpandDetailsBtnRow(1);
    SendPage.getExpandedDetailsListItemNamed('Siuntos dydis').should('contain', '61/18.5/8cm');
    SendPage.getExpandedDetailsListItemNamed('Paštomato adresas').should('contain', 'Ozo g. 25');
    SendPage.getExpandedDetailsListItemNamed('Kaina').should('contain', '1,95');
  });

  it('LEET-10: Verify locker-to-locker price for the largest (XL) parcel to be sent to Klaipėda', () => {

    SendPage.getReceiverCountry().should('have.string', 'Lietuva');
    SendPage.getParcelLockerMethodBtn('Paštomatu').should('have.class', SendPage.selector.btnSelected);
    SendPage.element.getLockerToLockerDeliveryOption().should('have.class', SendPage.selector.btnSelected);
    SendPage.clickShipmentSizeBtn('XL');
    SendPage.clickNextBtn();

    SendPage.fillSenderAndReceiverDetails(data);
    SendPage.clickCitySelect();
    SendPage.typeCity('Klaipėda');
    SendPage.clickCitySearchResultContaining('Klaipėda');
    SendPage.clickLockerSelect();
    SendPage.typeLocker('Akropolis, Taikos pr. 61');
    SendPage.clickLockerSearchResultContaining('Akropolis, Taikos pr. 61');
    SendPage.clickNextBtn();
    SendPage.clickNextBtn();

    SendPage.clickExpandDetailsBtnRow(1);
    SendPage.getExpandedDetailsListItemNamed('Siuntos dydis').should('contain', '61/35/74.5cm');
    SendPage.getExpandedDetailsListItemNamed('Paštomato adresas').should('contain', 'Taikos pr. 61');
    SendPage.getExpandedDetailsListItemNamed('Kaina').should('contain', '6,95');
  });

  it('LEET-11: Verify locker-to-locker price for a medium-sized (M) parcel to be sent to a random but valid Lithuanian city.', () => {

    SendPage.getReceiverCountry().should('have.string', 'Lietuva');
    SendPage.getParcelLockerMethodBtn('Paštomatu').should('have.class', SendPage.selector.btnSelected);
    SendPage.element.getLockerToLockerDeliveryOption().should('have.class', SendPage.selector.btnSelected);
    SendPage.clickShipmentSizeBtn('M');
    SendPage.clickNextBtn();

    SendPage.fillSenderAndReceiverDetails(data);
    SendPage.clickCitySelect();
    SendPage.typeCity('Nida');
    SendPage.clickCitySearchResultContaining('Nida');
    SendPage.clickLockerSelect();
    SendPage.typeLocker('Maxima, Naglių g.29A');
    SendPage.clickLockerSearchResultContaining('Maxima, Naglių g.29A');
    SendPage.clickNextBtn();
    SendPage.clickNextBtn();

    SendPage.clickExpandDetailsBtnRow(1);
    SendPage.getExpandedDetailsListItemNamed('Siuntos dydis').should('contain', '61/35/17.5cm');
    SendPage.getExpandedDetailsListItemNamed('Paštomato adresas').should('contain', 'Naglių g.29A');
    SendPage.getExpandedDetailsListItemNamed('Kaina').should('contain', '3,45');
  });
  
});