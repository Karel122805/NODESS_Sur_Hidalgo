// src/environments/environment.ts
export const environment = {
  production: false,
  EVENTS_SHEET_CSV_URL:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0LUcFZC7CBPAXPPVqcHOOdlI53U5Y1b2z2F01k9KWvfPiuAJwEXoo1zIzzFPqC3N6dQOZZG90m2uC/pub?gid=0&single=true&output=csv',
  EVENTS_REFRESH_MS: 10 * 60 * 1000, // 10 min
};
