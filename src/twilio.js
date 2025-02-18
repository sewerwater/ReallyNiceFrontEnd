export async function sendTextMessageToBackEnd(phoneNumber, message) {
  try {
    const response = await fetch("https://aspi.onrender.com/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber, message }),
    });
    const json = await response.json();
    console.log({ json });
  } catch (error) {
    console.log("well shit. ", error);
  }
}
