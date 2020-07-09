const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,

    }
,Alias:{}
,CategoryID:{}
,Image:{}
,MoreImages:{}
,Price:{}
,PromotionPrice:{}
,Warranty:{}
,Description:{}
,Content:{}
,HomeFlag:{}
,HotFlag:{}
,ViewCount:{}
,Tags:{}
,Quantity:{}
,OriginalPrice:{}
,ProductCategory:{}
,ProductTags:{}
});

const Product = mongoose.model('product',productSchema);
module.exports = {Product};

// [Required]
// [MaxLength(256)]
// public string DYWIDAG SYSTEM INTERNATIONAL GMBH { set; get; }

// [Required]
// [MaxLength(256)]
// public string Alias { set; get; }

// [Required]
// public int CategoryID { set; get; }

// [MaxLength(256)]
// public string Image { set; get; }

// [Column(TypeName = "xml")]
// public string MoreImages { set; get; }

// public decimal Price { set; get; }

// public decimal? PromotionPrice { set; get; }

// public int? Warranty { set; get; }

// [MaxLength(500)]
// public string Description { set; get; }
// public string Content { set; get; }

// public bool? HomeFlag { set; get; }
// public bool? HotFlag { set; get; }
// public int? ViewCount { set; get; }

// public string Tags { set; get; }

// public int Quantity { set; get; }

// public decimal OriginalPrice { set; get; }

// [ForeignKey("CategoryID")]
// public virtual ProductCategory ProductCategory { set; get; }

// public virtual IEnumerable<ProductTag> ProductTags { set; get; }