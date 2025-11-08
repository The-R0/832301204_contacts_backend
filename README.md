# 通讯录应用后端项目

这是一个基于Node.js和Express的通讯录应用后端项目，提供RESTful API支持联系人的增删改查操作。

## 技术栈

- Node.js
- Express
- MongoDB
- Mongoose

## 项目结构

```
832301204_concacts_backend/
├── controllers/
│   └── contactsController.js
├── models/
│   └── contact.js
├── routes/
│   └── contacts.js
├── server.js
├── package.json
├── README.md
└── codestyle.md
```

## API 端点

- `GET /api/contacts` - 获取所有联系人
- `GET /api/contacts/:id` - 获取单个联系人
- `POST /api/contacts` - 创建新联系人
- `PUT /api/contacts/:id` - 更新联系人
- `DELETE /api/contacts/:id` - 删除联系人

## 安装和运行

1. 确保已安装MongoDB并启动服务

2. 安装依赖
```bash
npm install
```

3. 启动服务器
```bash
# 生产环境
npm start

# 开发环境（支持热重载）
npm run dev
```

4. 服务器默认运行在 http://localhost:5000

## 数据库配置

默认连接到本地MongoDB数据库：`mongodb://localhost:27017/contactsapp`

可以通过环境变量修改数据库连接地址
