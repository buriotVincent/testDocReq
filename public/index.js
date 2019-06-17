function sendDoc() {
    const form = document.querySelector('#docReqForm');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => data[key] = value);
    console.log(data);
}