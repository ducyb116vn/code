document.querySelectorAll('.exercise input[type="text"]').forEach((input, index) => {
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && this.value.trim() !== "") {

            // Tạo phần tử task mới
            const newTask = document.createElement('div');
            newTask.className =
                "group border-[#f6f6f6] border px-5 py-4 flex justify-between items-center rounded-lg";

            const id = "menu-new-" + Date.now(); 

            newTask.innerHTML = `
                <label for="${id}" class="cursor-pointer select-none">
                    <input id="${id}" type="checkbox" class="hidden peer">
                    <p class="peer-checked:hidden">${this.value}</p>
                    <p class="hidden peer-checked:block line-through">${this.value}</p>
                </label>
                <i class="fa-regular fa-star hover:text-yellow-400 cursor-pointer"></i>
            `;

            // Chèn vào đúng danh sách
            this.parentElement.appendChild(newTask);

            // Clear input
            this.value = "";
        }
    });
});
