const mongoose = require('mongoose');

const productTag = new mongoose.Schema({

});

// [Key]
// [Column(TypeName = "varchar", Order = 2)]
// [MaxLength(50)]
// public string TagID { set; get; }

// [ForeignKey("ProductID")]
// public virtual Product Product { set; get; }

// [ForeignKey("TagID")]
// public virtual Tag Tag { set; get; }