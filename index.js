// Đi vào thư mục node module rồi tải ở file express
const express = require("express");
// function đã được viết sẵn nó sẽ trả về cho cái đối tượng và tương tự đại diện với cái app nên chỉ cần gọi cho nó thực thi.
const app = express();
// Muốn chạy cái website ở cái cổng nào
const port = 3000;

// Sau khi nhận được biến app thì sẽ định nghĩa route(Tuyến đường). Khi vào trang chủ thì sẽ chả về res.send()
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Localhost: 127.0.0.1 - localhost

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// Để chạy: node index.js
