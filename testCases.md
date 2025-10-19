# Test Plan: LP Express E2E Tests

**Date:** 2025-10-13
**Version:** 1.0

This document outlines the test scenarios and cases for the **LP Express E2E Tests** using Cypress automation.

**Note:** Detailed test steps for each case are implemented and maintained within the corresponding Cypress test files.

---

## 1. Test Scenario: LEET-E1: Parcel Tracking

**Goal:** Verify that users can accurately track the status of a parcel.

### Test Cases

| Test Case ID | Description | Preconditions | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- |
| **LEET-7** | Verify tracking a parcel with a delivered status. | User is on the dedicated parcel tracking page. | Status badge and confirmation text both display **“Siunta pristatyta”**. | Passed |
| **LEET-8** | Verify tracking results for an invalid tracking number. | User is on the dedicated parcel tracking page. | Two error messages are displayed: **"Jūsų siuntos nepavyko rasti"** and **"Patikrinkite, ar teisingai suvedėte siuntos numerį."** | Passed |
| **LEET-15** | Verify tracking for a parcel number with leading and trailing whitespaces. | User is on the tracking page. Tracking number includes hidden spaces (e.g., " TRK123 "). | System automatically trims the input and displays status: **“Siunta pristatyta”** (if using a valid delivered number). | Passed |

---

## 2. Test Scenario: LEET-E2: Parcel Sending Price Calculation

**Goal:** Verify that the system accurately calculates the cost of sending a parcel based on defined parameters.

### Test Cases

| Test Case ID   | Description | Preconditions | Expected Result | Status |
| :---           | :--- | :--- | :--- | :--- |
| **LEET-9** | Verify locker-to-locker price for the smallest (XS) parcel to be sent to Vilnius. | User is on the dedicated parcel sending page. | Expanded cart details confirm **XS size ("61/18.5/8cm")**, correct recipient address (as selected by the user), and price **"1,95 €"**. | Passed |
| **LEET-10** | Verify locker-to-locker price for the largest (XL) parcel to be sent to Klaipėda. | User is on the dedicated parcel sending page. | Expanded cart details confirm **XL size ("61/35/74.5cm")**, correct recipient address (as selected by the user), and price **"6,95 €"**. | Passed |
| **LEET-11** | Verify locker-to-locker price for a medium-sized (M) parcel to a random valid Lithuanian city. | User is on the dedicated parcel sending page. | Expanded cart details confirm **M size ("61/35/17.5cm")**, correct recipient address (as selected by the user), and price **"3,45 €"**. | Passed |
| **LEET-16** | Verify that the Small (S) size parcel is selected by default upon visiting the sending page. | User is on the dedicated parcel sending page.  | The **"S" size radio button** is selected and highlighted. Expanded cart details confirm **S size ("61/35/8cm")**, correct recipient address (as selected by the user), and price **"2,45 €"**. | Passed |
| **LEET-17** | Verify locker-to-locker price for the large (L) parcel across international borders (Latvia). | User is on the dedicated parcel sending page. | Expanded cart details confirm **L size ("61/35/36.5cm")**, correct international recipient parcel address, recipient country is **Latvija**, and price **"6,25 €"** | Passed |
| **LEET-18** | Verify that all mandatory input fields are flagged when attempting to proceed without entering any required customer/parcel data. | User is on the dedicated parcel sending page and **immediately attempts to proceed** to the next step (e.g., clicking "Toliau" / Next). | The checkout process is **blocked**, and **all mandatory fields** (e.g., Name, Phone, Email, Size, Locations) must display a visible **validation error message** and **highlighted**. | Passed |

---

## 3. Test Scenario: LEET-E3: Parcel Locker Map

**Goal:** Verify that users can search for and locate available parcel lockers.

### Test Cases

| Test Case ID | Description | Preconditions | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- |
| **LEET-12** | Verify that searching with a valid city displays correct parcel lockers in the list. | User is on the dedicated parcel locker map page. | All displayed locker addresses must exactly match the five specified addresses for Plungė. | Passed |
| **LEET-13** | Verify that searching with a valid street name displays correct parcel lockers in the list. | User is on the dedicated parcel locker map page. | All displayed locker addresses must contain the text street name that was the search input. | Passed |
| **LEET-14** | Verify that searching with a valid specific address displays the correct parcel locker. | User is on the dedicated parcel locker map page. | The single displayed locker address must exactly match specific address that was the search input. | Passed |
| **LEET-19** | Verify that searching with a non-existent address returns no results and displays an appropriate message. | User is on the dedicated parcel locker map page. User searches for a clearly invalid term (e.g., "Neptūnas"). | The search result list is empty. | Passed |
| **LEET-20** | Verify that clicking a locker in the search result list displays that locker's detailed information card on the map. | User is on the dedicated parcel locker map page. | Verify that the detail information card is visible on the map and that the displayed parcel locker has the same address as searched for. | Passed |
| **LEET-21** | Verify that searching for a valid address in a different country (after changing the country) works correctly. | User is on the dedicated parcel locker map page. User changes the country selector from Lithuania to **Latvia** and searches for a known Latvian address. | The map centers on the Latvian address, and the correct Latvian locker is displayed. | Passed |