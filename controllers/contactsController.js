const Contact = require('../models/contact');

// 获取所有联系人
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 获取单个联系人
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: '联系人不存在' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 创建新联系人
exports.createContact = async (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    phone: req.body.phone
  });

  try {
    const newContact = await contact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 更新联系人
exports.updateContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: '联系人不存在' });
    }

    contact.name = req.body.name || contact.name;
    contact.phone = req.body.phone || contact.phone;

    const updatedContact = await contact.save();
    res.json(updatedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 删除联系人
exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: '联系人不存在' });
    }

    await contact.remove();
    res.json({ message: '联系人已删除' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};