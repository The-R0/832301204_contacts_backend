# 后端代码规范

本代码规范基于 [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) 和 [Node.js 最佳实践](https://github.com/goldbergyoni/nodebestpractices)。

## JavaScript 规范

### 命名规范
- 变量和函数使用小驼峰命名法（camelCase）
- 类和构造函数使用大驼峰命名法（PascalCase）
- 常量使用全大写加下划线（UPPER_SNAKE_CASE）
- 文件名使用小驼峰命名法

### 缩进和格式
- 使用2个空格进行缩进
- 每行最大长度为100个字符
- 使用单引号
- 语句末尾必须添加分号
- 大括号使用Egyptian style（左大括号在同一行）

### 代码示例
```javascript
// 好的示例
const userName = '张三';
function getUserInfo(userId) {
  return db.find({ id: userId });
}

// 避免的示例
var username = "张三"; // 使用var而不是const/let，使用了双引号
function get_user_info(user_id) { // 使用了下划线命名
  return db.find({id:user_id}) // 缺少空格，缺少分号
}
```

## Node.js 规范

### 模块导入
- 使用 require() 导入模块
- 按照以下顺序组织导入：
  1. 核心模块
  2. 第三方模块
  3. 自定义模块

### 代码示例
```javascript
// 好的示例
const fs = require('fs'); // 核心模块
const express = require('express'); // 第三方模块
const contactModel = require('./models/contact'); // 自定义模块

// 避免的示例
const contactModel = require('./models/contact');
const express = require('express'); // 顺序混乱
```

## Express 规范

### 路由组织
- 使用路由分离模式，将路由处理函数放在控制器中
- 路由定义遵循 RESTful 规范
- 使用中间件进行错误处理和数据验证

### 代码示例
```javascript
// 好的示例
const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');

router.get('/', contactsController.getAllContacts);
router.post('/', contactsController.createContact);

// 避免的示例
app.get('/api/contacts', function(req, res) { // 路由处理函数直接写在路由定义中
  // 大量的业务逻辑
});
```

## Mongoose 规范

### 模型定义
- 模型名称使用单数形式和大驼峰命名
- Schema 定义时明确字段类型和验证规则
- 使用 trim 处理字符串类型字段

### 代码示例
```javascript
// 好的示例
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model('Contact', contactSchema);

// 避免的示例
const ContactSchema = new mongoose.Schema({
  name: String, // 缺少验证规则
  phone: String
});
module.exports = mongoose.model('contacts', ContactSchema); // 模型名使用复数
```

## 错误处理

### 统一错误响应格式
- 使用一致的错误响应格式
- 包含适当的HTTP状态码
- 提供有用的错误消息

### 代码示例
```javascript
// 好的示例
catch (error) {
  res.status(400).json({ message: error.message });
}

// 避免的示例
catch (error) {
  res.send('出错了'); // 没有状态码，消息不明确
}