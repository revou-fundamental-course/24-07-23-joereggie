function ValidateForm() {
    const name = document.forms["message-form"]["name"].value;
    const email = document.forms["message-form"]["email"].value;
    const travel = document.forms["message-form"]["travel"].value;

    if (name == "" || email == "" || travel == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }
}