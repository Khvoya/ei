/**
 * Send email to the owner contain purchase request
 *
 * @param {string} email - Formed text for email.
 * @returns {Promise<Response>}
 */
export const sendOrderEmail = email => {
  return fetch(
    "https://us-central1-electricindians.cloudfunctions.net/mailer/",
    {
      method: "post",
      body: email,
      mode: "no-cors"
    }
  )
    .then(res => {
      return res.data;
    })
    .catch(res => {
      console.error(res);
    });
};
