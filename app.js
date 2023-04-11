console.log("Let's get this party started!");

const $submitButton = $('.submit-button');
const $deleteButton = $('.delete-button');


$submitButton.on('click', function (e) {
    e.preventDefault();
    const $userInput = $('input').val();

    let userGif = axios.post();

    console.log($userInput);
});
