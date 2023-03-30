"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/users');
    const data = yield response.json();
    return data;
});
const renderTable = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetchData();
    const table = document.getElementById('table_body');
    data.map((item) => {
        const row = document.createElement('tr');
        const id = document.createElement('td');
        const name = document.createElement('td');
        const email = document.createElement('td');
        const phone = document.createElement('td');
        id.textContent = item.id.toString();
        name.textContent = item.name;
        email.textContent = item.email;
        phone.textContent = item.phone.toString();
        row.appendChild(id);
        row.appendChild(name);
        row.appendChild(email);
        row.appendChild(phone);
        table.appendChild(row);
    });
});
renderTable();
//# sourceMappingURL=app.js.map