export const sendEmail = async (sender, email, message) => {
    const endpoint = 'https://qyrp1pec5b.execute-api.us-west-2.amazonaws.com/default/sendContactEmail'

    const body = JSON.stringify({
        senderName: sender,
        senderEmail: email, 
        message: message
    });

    const requestOptions = {
        method: "POST",
        body
    };

    fetch(endpoint, requestOptions)
        .then((response) => {
            if (!response.ok) throw new Error("Error in fetch");
            return response.json();
        })
        .then((response) => {
            document.getElementById("result-text").innerText = "Email sent successfully!";
        })
        .catch((error) => {
            document.getElementById("result-text").innerText = "An unknown error occurred."
        });
};