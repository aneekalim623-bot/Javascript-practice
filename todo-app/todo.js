document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. TODO APP LOGIC WITH STORAGE & FILTERS
    // ==========================================
    const todoForm = document.querySelector(".form-todo");
    const todoInput = document.querySelector(".form-todo input[type='text']");
    const todoList = document.querySelector(".todo-list");
    const taskCounter = document.getElementById("taskCounter");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const clearCompletedBtn = document.getElementById("clearCompletedBtn");

    let currentFilter = "all";

    // Get Todos from LocalStorage
    function getTodosFromStorage() {
        return JSON.parse(localStorage.getItem("todosData")) || [];
    }

    // Save Todos array to LocalStorage
    function saveTodosToStorage(todos) {
        localStorage.setItem("todosData", JSON.stringify(todos));
        updateCounterAndRender();
    }

    // Render tasks based on filter & update counter
    function updateCounterAndRender() {
        const todos = getTodosFromStorage();
        todoList.innerHTML = "";

        // Calculate pending tasks count
        const activeCount = todos.filter(t => !t.completed).length;
        taskCounter.textContent = `${activeCount} task${activeCount === 1 ? '' : 's'} remaining`;

        // Filter tasks
        const filteredTodos = todos.filter(todo => {
            if (currentFilter === "active") return !todo.completed;
            if (currentFilter === "completed") return todo.completed;
            return true; // "all"
        });

        // Display tasks
        filteredTodos.forEach((todo) => {
            const newLi = document.createElement("li");
            newLi.dataset.id = todo.id;
            newLi.innerHTML = `
                <span class="text ${todo.completed ? 'done-text' : ''}">${todo.text}</span>
                <div class="todo-buttons">
                    <button class="btn-action done-btn">${todo.completed ? 'Undo' : 'Done'}</button>
                    <button class="btn-action delete-btn">Remove</button>
                </div>
            `;
            todoList.append(newLi);
        });
    }

    // Add New Task
    if (todoForm) {
        todoForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const todoText = todoInput.value.trim();
            if (todoText === "") return;

            const todos = getTodosFromStorage();
            todos.push({ id: Date.now(), text: todoText, completed: false });
            saveTodosToStorage(todos);

            todoInput.value = "";
        });
    }

    // Task Actions (Done/Undo & Delete)
    if (todoList) {
        todoList.addEventListener("click", (e) => {
            const li = e.target.closest("li");
            if (!li) return;
            const taskId = Number(li.dataset.id);
            let todos = getTodosFromStorage();

            if (e.target.classList.contains("done-btn")) {
                todos = todos.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t);
                saveTodosToStorage(todos);
            }

            if (e.target.classList.contains("delete-btn")) {
                todos = todos.filter(t => t.id !== taskId);
                saveTodosToStorage(todos);
            }
        });
    }

    // Filter Button Click Handlers
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.dataset.filter;
            updateCounterAndRender();
        });
    });

    // Clear Completed Tasks
    if (clearCompletedBtn) {
        clearCompletedBtn.addEventListener("click", () => {
            let todos = getTodosFromStorage();
            todos = todos.filter(t => !t.completed);
            saveTodosToStorage(todos);
        });
    }

    // Initial Load
    updateCounterAndRender();


    // ==========================================
    // 2. MODAL POPUPS LOGIC (Sign In & Contact)
    // ==========================================
    const signinBtn = document.getElementById("signinBtn");
    const signinModal = document.getElementById("signinModal");
    const closeSignin = document.getElementById("closeSignin");

    const contactLink = document.getElementById("contactLink");
    const footerContact = document.getElementById("footerContact");
    const contactModal = document.getElementById("contactModal");
    const closeContact = document.getElementById("closeContact");

    if (signinBtn && signinModal) signinBtn.addEventListener("click", () => signinModal.style.display = "flex");
    if (closeSignin && signinModal) closeSignin.addEventListener("click", () => signinModal.style.display = "none");

    if (contactLink && contactModal) contactLink.addEventListener("click", () => contactModal.style.display = "flex");
    if (footerContact && contactModal) footerContact.addEventListener("click", () => contactModal.style.display = "flex");
    if (closeContact && contactModal) closeContact.addEventListener("click", () => contactModal.style.display = "none");

    window.addEventListener("click", (e) => {
        if (e.target === signinModal) signinModal.style.display = "none";
        if (e.target === contactModal) contactModal.style.display = "none";
    });

});