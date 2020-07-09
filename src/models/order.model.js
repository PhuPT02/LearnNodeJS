const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({});

const Order = mongoose.model("order", orderSchema);
module.exports = { Order };

// [Required]
// [MaxLength(256)]
// public string CustomerName { set; get; }

// [Required]
// [MaxLength(256)]
// public string CustomerAddress { set; get; }

// [Required]
// [MaxLength(256)]
// public string CustomerEmail { set; get; }

// [Required]
// [MaxLength(50)]
// public string CustomerMobile { set; get; }

// [Required]
// [MaxLength(256)]
// public string CustomerMessage { set; get; }

// [MaxLength(256)]
// public string PaymentMethod { set; get; }

// public DateTime? CreatedDate { set; get; }
// public string CreatedBy { set; get; }
// public string PaymentStatus { set; get; }
// public bool Status { set; get; }

// [StringLength(128)]
// [Column(TypeName = "nvarchar")]
// public string CustomerId { set; get; }

// [ForeignKey("CustomerId")]
// public virtual ApplicationUser User { set; get; }

// public virtual IEnumerable<OrderDetail> OrderDetails { set; get; }
