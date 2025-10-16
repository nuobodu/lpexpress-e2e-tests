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
---

## 2. Test Scenario: LEET-E2: Parcel Sending Price Calculation

**Goal:** Verify that the system accurately calculates the cost of sending a parcel based on defined parameters.

### Test Cases

| Test Case ID   | Description | Preconditions | Expected Result | Status |
| :---           | :--- | :--- | :--- | :--- |
| **LEET-9** | Verify locker-to-locker price for the smallest (XS) parcel to be sent to Vilnius. | User is on the dedicated parcel sending page. | Expanded cart details confirm **XS size ("61/18.5/8cm")**, correct recipient address (as selected by the user), and price **"1,95 €"**. | Passed |
| **LEET-10** | Verify locker-to-locker price for the largest (XL) parcel to be sent to Klaipėda. | User is on the dedicated parcel sending page. | Expanded cart details confirm **XL size ("61/35/74.5cm")**, correct recipient address (as selected by the user), and price **"6,92 €"**. | Passed |
| **LEET-11** | Verify locker-to-locker price for a medium-sized (M) parcel to a random valid Lithuanian city. | User is on the dedicated parcel sending page. | Expanded cart details confirm **M size ("61/35/17.5cm")**, correct recipient address (as selected by the user), and price **"3,45 €"**. | Passed |

---

## 3. Test Scenario: LEET-E3: Parcel Locker Map

**Goal:** Verify that users can search for and locate available parcel lockers.

### Test Cases

| Test Case ID | Description | Preconditions | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- |
| **LEET-12** | Verify that searching with a valid city displays correct parcel lockers in the list. | User is on the dedicated parcel locker map page. | All displayed locker addresses must **exactly match the five specified addresses for Plungė**. | Passed |
| **LEET-13** | Verify that searching with a valid street name displays correct parcel lockers in the list. | User is on the dedicated parcel locker map page. | All displayed locker addresses must **contain the text street name that was the search input**. | Passed |
| **LEET-14** | Verify that searching with a valid specific address displays the correct parcel locker. | User is on the dedicated parcel locker map page. | The single displayed locker address must **exactly match specific address that was the search input**. | Passed |