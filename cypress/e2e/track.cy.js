import TrackPage from '../pages/TrackPage';

const deliveredParcelNumbers = ['CC944279314LT', 'CJ009576563LT', 'LL018592621FR'];
const invalidParcelNumber = 'CC123456789LT';

describe('LEET-E1: Parcel Tracking Feature', () => {

  beforeEach('Visit tracking page and accept cookies', () => {
    TrackPage.visit();
    TrackPage.acceptCookies();
  });

  it('LEET-7: Verify tracking a parcel with a delivered status', () => {

    cy.wrap(deliveredParcelNumbers).each((parcelNumber) => {
      TrackPage.clearParcelNumberInput();
      TrackPage.typeParcelNumber(parcelNumber);
      TrackPage.clickTrackBtn();

      TrackPage.element.getNewestDeliveryStatusBadge().should('contain', 'Siunta pristatyta');
      TrackPage.element.getProgressParagraphMessage().should('contain', 'Siunta pristatyta');
    });

  });

  it('LEET-8: Verify tracking a parcel with a delivered status', () => {
    TrackPage.typeParcelNumber(invalidParcelNumber);
    TrackPage.clickTrackBtn();

    TrackPage.element.getParcelNotFoundMessage().should('contain', 'Jūsų siuntos nepavyko rast');
    TrackPage.element.getParcelNotFoundMessageDetails().should('contain', 'Patikrinkite, ar teisingai suvedėte siuntos numerį.');
    
  });

});