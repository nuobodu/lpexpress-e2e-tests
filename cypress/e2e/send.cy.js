/// <reference types='cypress' />

import SendPage from '../pages/SendPage';
import lockerData from '../fixtures/lockerData.json';
import contactData from '../fixtures/contactData.json';
import parcelData from '../fixtures/parcelData.json';


describe('LEET-E2: Parcel Sending Price Calculation', () => {

  beforeEach('Visit sending page and accept cookies', () => {
    SendPage.visit();
    SendPage.acceptCookies();
  });

  it('LEET-9: Verify locker-to-locker price for the smallest (XS) parcel to be sent to Vilnius', () => {

    SendPage.getReceiverCountry().should('have.string', 'Lietuva');
    SendPage.getParcelLockerMethodBtn('Paštomatu').should('have.class', SendPage.selector.btnSelected);
    SendPage.element.getLockerToLockerDeliveryOption().should('have.class', SendPage.selector.btnSelected);
    SendPage.clickShipmentSizeBtn('XS');
    SendPage.clickNextBtn();

    SendPage.fillSenderAndReceiverDetails(contactData);
    SendPage.clickCityInput();
    SendPage.typeCity(lockerData.cityLT.vilnius1.name);
    SendPage.clickCitySearchResultContaining(lockerData.cityLT.vilnius1.name);
    SendPage.clickLockerInput();
    SendPage.typeLocker(lockerData.cityLT.vilnius1.lockerNameAndAddress);
    SendPage.clickLockerSearchResultContaining(lockerData.cityLT.vilnius1.lockerNameAndAddress);
    SendPage.clickNextBtn();
    SendPage.clickNextBtn();

    SendPage.clickExpandDetailsBtnRow(1);
    SendPage.getExpandedDetailsListItemNamed('Siuntos dydis').should('contain', parcelData.xs.size);
    SendPage.getExpandedDetailsListItemNamed('Paštomato adresas').should('contain', lockerData.cityLT.vilnius1.lockerAddress);
    SendPage.getExpandedDetailsListItemNamed('Kaina').should('contain', parcelData.xs.price.LT);
  });

  it('LEET-10: Verify locker-to-locker price for the largest (XL) parcel to be sent to Klaipėda', () => {

    SendPage.getReceiverCountry().should('have.string', 'Lietuva');
    SendPage.getParcelLockerMethodBtn('Paštomatu').should('have.class', SendPage.selector.btnSelected);
    SendPage.element.getLockerToLockerDeliveryOption().should('have.class', SendPage.selector.btnSelected);
    SendPage.clickShipmentSizeBtn('XL');
    SendPage.clickNextBtn();

    SendPage.fillSenderAndReceiverDetails(contactData);
    SendPage.clickCityInput();
    SendPage.typeCity(lockerData.cityLT.klaipeda1.name);
    SendPage.clickCitySearchResultContaining(lockerData.cityLT.klaipeda1.name);
    SendPage.clickLockerInput();
    SendPage.typeLocker(lockerData.cityLT.klaipeda1.lockerNameAndAddress);
    SendPage.clickLockerSearchResultContaining(lockerData.cityLT.klaipeda1.lockerNameAndAddress);
    SendPage.clickNextBtn();
    SendPage.clickNextBtn();

    SendPage.clickExpandDetailsBtnRow(1);
    SendPage.getExpandedDetailsListItemNamed('Siuntos dydis').should('contain', parcelData.xl.size);
    SendPage.getExpandedDetailsListItemNamed('Paštomato adresas').should('contain', lockerData.cityLT.klaipeda1.lockerAddress);
    SendPage.getExpandedDetailsListItemNamed('Kaina').should('contain', parcelData.xl.price.LT);
  });

  it('LEET-11: Verify locker-to-locker price for a medium-sized (M) parcel to be sent to a random but valid Lithuanian city.', () => {

    SendPage.getReceiverCountry().should('have.string', 'Lietuva');
    SendPage.getParcelLockerMethodBtn('Paštomatu').should('have.class', SendPage.selector.btnSelected);
    SendPage.element.getLockerToLockerDeliveryOption().should('have.class', SendPage.selector.btnSelected);
    SendPage.clickShipmentSizeBtn('M');
    SendPage.clickNextBtn();

    SendPage.fillSenderAndReceiverDetails(contactData);
    SendPage.clickCityInput();
    SendPage.typeCity(lockerData.cityLT.nida1.name);
    SendPage.clickCitySearchResultContaining(lockerData.cityLT.nida1.name);
    SendPage.clickLockerInput();
    SendPage.typeLocker(lockerData.cityLT.nida1.lockerNameAndAddress);
    SendPage.clickLockerSearchResultContaining(lockerData.cityLT.nida1.lockerNameAndAddress);
    SendPage.clickNextBtn();
    SendPage.clickNextBtn();

    SendPage.clickExpandDetailsBtnRow(1);
    SendPage.getExpandedDetailsListItemNamed('Siuntos dydis').should('contain', parcelData.m.size);
    SendPage.getExpandedDetailsListItemNamed('Paštomato adresas').should('contain', lockerData.cityLT.nida1.lockerAddress);
    SendPage.getExpandedDetailsListItemNamed('Kaina').should('contain', parcelData.m.price.LT);
  });

  it('LEET-16: Verify that the Small (S) size parcel is selected by default upon visiting the sending page.', () => {

    SendPage.getReceiverCountry().should('have.string', 'Lietuva');
    SendPage.getParcelLockerMethodBtn('Paštomatu').should('have.class', SendPage.selector.btnSelected);
    SendPage.element.getLockerToLockerDeliveryOption().should('have.class', SendPage.selector.btnSelected);
    SendPage.getShipmentSizeBtn('S').should('have.class', SendPage.selector.btnSelected);
    SendPage.clickNextBtn();

    SendPage.fillSenderAndReceiverDetails(contactData, 'LT');
    SendPage.clickCityInput();
    SendPage.typeCity(lockerData.cityLT.vilnius1.name);
    SendPage.clickCitySearchResultContaining(lockerData.cityLT.vilnius1.name);
    SendPage.clickLockerInput();
    SendPage.typeLocker(lockerData.cityLT.vilnius1.lockerNameAndAddress);
    SendPage.clickLockerSearchResultContaining(lockerData.cityLT.vilnius1.lockerNameAndAddress);
    SendPage.clickNextBtn();
    SendPage.clickNextBtn();

    SendPage.clickExpandDetailsBtnRow(1);
    SendPage.getExpandedDetailsListItemNamed('Siuntos dydis').should('contain', parcelData.s.size);
    SendPage.getExpandedDetailsListItemNamed('Paštomato adresas').should('contain', lockerData.cityLT.vilnius1.lockerAddress);
    SendPage.getExpandedDetailsListItemNamed('Kaina').should('contain', parcelData.s.price.LT);
  });

  it('LEET-17: Verify locker-to-locker price for the large (L) parcel across international borders (Latvia).', () => {

    SendPage.clickReceiverCountryInput();
    SendPage.clickCountryLatvija();
    SendPage.getParcelLockerMethodBtn('Paštomatu').should('have.class', SendPage.selector.btnSelected);
    SendPage.element.getLockerToLockerDeliveryOption().should('have.class', SendPage.selector.btnSelected);
    SendPage.clickShipmentSizeBtn('L');
    SendPage.clickNextBtn();

    SendPage.fillSenderAndReceiverDetails(contactData, 'LV');
    SendPage.clickCityInput();
    SendPage.typeCity(lockerData.cityLV.liepaja1.name);
    SendPage.clickCitySearchResultContaining(lockerData.cityLV.liepaja1.name);
    SendPage.clickLockerInput();
    SendPage.typeLocker(lockerData.cityLV.liepaja1.lockerNameAndAddress);
    SendPage.clickLockerSearchResultContaining(lockerData.cityLV.liepaja1.lockerNameAndAddress);
    SendPage.clickNextBtn();
    SendPage.clickNextBtn();

    SendPage.clickExpandDetailsBtnRow(1);
    SendPage.getExpandedDetailsListItemNamed('Siuntos dydis').should('contain', parcelData.l.size);
    SendPage.getExpandedDetailsListItemNamed('Gavėjo šalis').should('contain', 'Latvija');
    SendPage.getExpandedDetailsListItemNamed('Paštomato adresas').should('contain', lockerData.cityLV.liepaja1.lockerAddress);
    SendPage.getExpandedDetailsListItemNamed('Kaina').should('contain', parcelData.l.price.LV);
  });

  it('LEET-18: Verify that all mandatory input fields are flagged when attempting to proceed without entering any required customer/parcel data.', function () {

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