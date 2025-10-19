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
    phone: {
      LT: '60606006',
      LV: '26665555'
    },
    email: 'petras.petraitris@gmail.com'
  }
};

describe('LEET-E2: Parcel Sending Price Calculation', () => {

  beforeEach('Visit sending page and accept cookies', () => {
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
    SendPage.clickCityInput();
    SendPage.typeCity('Vilnius');
    SendPage.clickCitySearchResultContaining('Vilnius');
    SendPage.clickLockerInput();
    SendPage.typeLocker('Akropolis, Ozo g. 25');
    SendPage.clickLockerSearchResultContaining('Akropolis, Ozo g. 25');
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
    SendPage.clickCityInput();
    SendPage.typeCity('Klaipėda');
    SendPage.clickCitySearchResultContaining('Klaipėda');
    SendPage.clickLockerInput();
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
    SendPage.clickCityInput();
    SendPage.typeCity('Nida');
    SendPage.clickCitySearchResultContaining('Nida');
    SendPage.clickLockerInput();
    SendPage.typeLocker('Maxima, Naglių g.29A');
    SendPage.clickLockerSearchResultContaining('Maxima, Naglių g.29A');
    SendPage.clickNextBtn();
    SendPage.clickNextBtn();

    SendPage.clickExpandDetailsBtnRow(1);
    SendPage.getExpandedDetailsListItemNamed('Siuntos dydis').should('contain', '61/35/17.5cm');
    SendPage.getExpandedDetailsListItemNamed('Paštomato adresas').should('contain', 'Naglių g.29A');
    SendPage.getExpandedDetailsListItemNamed('Kaina').should('contain', '3,45');
  });

  it('LEET-16: Verify that the Small (S) size parcel is selected by default upon visiting the sending page.', () => {

    SendPage.getReceiverCountry().should('have.string', 'Lietuva');
    SendPage.getParcelLockerMethodBtn('Paštomatu').should('have.class', SendPage.selector.btnSelected);
    SendPage.element.getLockerToLockerDeliveryOption().should('have.class', SendPage.selector.btnSelected);
    SendPage.getShipmentSizeBtn('S').should('have.class', SendPage.selector.btnSelected);
    SendPage.clickNextBtn();

    SendPage.fillSenderAndReceiverDetails(data, 'LT');
    SendPage.clickCityInput();
    SendPage.typeCity('Vilnius');
    SendPage.clickCitySearchResultContaining('Vilnius');
    SendPage.clickLockerInput();
    SendPage.typeLocker('Akropolis, Ozo g. 25');
    SendPage.clickLockerSearchResultContaining('Akropolis, Ozo g. 25');
    SendPage.clickNextBtn();
    SendPage.clickNextBtn();

    SendPage.clickExpandDetailsBtnRow(1);
    SendPage.getExpandedDetailsListItemNamed('Siuntos dydis').should('contain', '61/35/8cm');
    SendPage.getExpandedDetailsListItemNamed('Paštomato adresas').should('contain', 'Ozo g. 25');
    SendPage.getExpandedDetailsListItemNamed('Kaina').should('contain', '2,45');
  });

  it('LEET-17: Verify locker-to-locker price for the large (L) parcel across international borders (Latvia).', () => {

    SendPage.clickReceiverCountryInput();
    SendPage.clickCountryLatvija();
    SendPage.getParcelLockerMethodBtn('Paštomatu').should('have.class', SendPage.selector.btnSelected);
    SendPage.element.getLockerToLockerDeliveryOption().should('have.class', SendPage.selector.btnSelected);
    SendPage.clickShipmentSizeBtn('L');
    SendPage.clickNextBtn();

    SendPage.fillSenderAndReceiverDetails(data, 'LV');
    SendPage.clickCityInput();
    SendPage.typeCity('Liepāja');
    SendPage.clickCitySearchResultContaining('Liepāja');
    SendPage.clickLockerInput();
    SendPage.typeLocker('Maxima (Udrop), Klaipēdas iela 62');
    SendPage.clickLockerSearchResultContaining('Maxima (Udrop), Klaipēdas iela 62');
    SendPage.clickNextBtn();
    SendPage.clickNextBtn();

    SendPage.clickExpandDetailsBtnRow(1);
    SendPage.getExpandedDetailsListItemNamed('Siuntos dydis').should('contain', '61/35/36.5cm');
    SendPage.getExpandedDetailsListItemNamed('Gavėjo šalis').should('contain', 'Latvija');
    SendPage.getExpandedDetailsListItemNamed('Paštomato adresas').should('contain', 'Klaipēdas iela 62');
    SendPage.getExpandedDetailsListItemNamed('Kaina').should('contain', '6,25');
  });

  it('LEET-18: Verify that all mandatory input fields are flagged when attempting to proceed without entering any required customer/parcel data.', () => {

    SendPage.clickNextBtn();
    SendPage.clickNextBtn();

    SendPage.element.getSender.nameInput().should('have.class', SendPage.selector.mandatory);
    SendPage.element.getSender.phoneInput().parent().should('have.class', SendPage.selector.mandatory);
    SendPage.element.getSender.emailInput().should('have.class', SendPage.selector.mandatory);
    SendPage.element.getReceiver.phoneInput().parent().should('have.class', SendPage.selector.mandatory);
    SendPage.element.getCityInputWrapper().should('have.class', SendPage.selector.mandatory);
    SendPage.element.getLockerInput().should('have.class', SendPage.selector.mandatory);
    SendPage.element.getReceiver.emailInput().should('not.have.class', SendPage.selector.mandatory);
    
    SendPage.element.getSender.nameErrorField().should('contain', 'Būtina užpildyti');
    SendPage.element.getSender.phoneErrorField().should('contain', 'Būtina užpildyti');
    SendPage.element.getSender.emailErrorField().should('contain', 'Būtina užpildyti');
    SendPage.element.getReceiver.nameErrorField().should('contain', 'Būtina užpildyti');
    SendPage.element.getReceiver.phoneErrorField().should('contain', 'Būtina užpildyti');
    SendPage.element.getReceiver.emailErrorField().should('contain', 'Būtina užpildyti');
    SendPage.element.getReceiver.cityErrorField().should('contain', 'Būtina užpildyti');
    SendPage.element.getReceiver.lockerErrorField().should('contain', 'Būtina užpildyti');

  });

});