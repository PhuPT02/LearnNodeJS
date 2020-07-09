const mongoose = require('mongoose');

const orderDetailSchema = new mongoose.Schema({

});

const OrderDetail = mongoose.model('order_detail',orderDetailSchema);

// [Key]
// [Column(Order = 2)]
// public int ProductID { set; get; }

// public int Quantity { set; get; }

// public decimal Price { set; get; }

// [ForeignKey("OrderID")]
// public virtual Order Order { set; get; }

// [ForeignKey("ProductID")]
// public virtual Product Product { set; get; }