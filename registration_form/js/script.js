document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const messageDiv = document.getElementById("message");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const nickname = document.getElementById("nickname").value;
        const password = document.getElementById("password").value;
        const avatar = document.getElementById("avatar").files[0];
        
        // // Валідація пароля
        // if (!validatePassword(password)) {
        //     messageDiv.textContent = "Пароль не відповідає вимогам";
        //     return;
        // }
        
        // Створення FormData об'єкту для відправки даних
        const formData = new FormData();
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("nickname", nickname);
        formData.append("password", password);
        formData.append("avatar", avatar);
        
        // Відправка даних на сервер
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "server_endpoint_url", true);
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    messageDiv.textContent = "Реєстрація пройшла успішно";
                } else {
                    messageDiv.textContent = "Під час реєстрації сталася помилка";
                }
            }
        };
        
        xhr.send(formData);
    });
});

// Функція для валідації пароля
function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}
