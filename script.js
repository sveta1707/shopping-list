const sendInput = document.querySelector("input");
const newItem = document.querySelector("items");

sendInput.addEventListener('keydown', function (event) {
        if (event.key == 'Enter') {
                const messageText = sendInput.value;

                const newList = document.createElement("div");
                newList.textContent = messageText;
                if (input.value !== "") {
                        items.append(newList);
                        input.value = "";

                        newList.addEventListener ('click', function() {
                                newList.classList.toggle('done');
                         } )
                }
        }
        
});
/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
