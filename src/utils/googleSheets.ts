export interface EnquiryData {
  name: string;
  email: string;
  phone?: string;
  courseInterest?: string;
  message?: string;
  source?: string;
}

/**
 * Submits enquiry data to Google Sheets via Google Apps Script Web App.
 * The Apps Script handles both: saving to the sheet AND sending a Gmail notification.
 *
 * Set VITE_GOOGLE_SHEET_URL in your .env file to the deployed Apps Script Web App URL.
 */
export const submitToGoogleSheets = async (
  data: EnquiryData,
): Promise<{ success: boolean; message?: string }> => {
  const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;

  if (!GOOGLE_SHEET_URL) {
    console.warn("VITE_GOOGLE_SHEET_URL is not set. Skipping submission.");
    return { success: false, message: "Google Sheet URL not configured." };
  }

  try {
    // mode: "no-cors" is required for Google Apps Script Web Apps called from browsers.
    // This means we cannot read the response, but the data will arrive at the script.
    await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    return { success: true };
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    return { success: false, message: "Network error." };
  }
};
