const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Name,
    Alias,
    Description,
    ParentID,
    DisplayOrder,
    Image,
    HomeFlag
});


// [Required]
// [MaxLength(256)]
// public string Name { set; get; }

// [Required]
// [MaxLength(256)]
// public string Alias { set; get; }

// [MaxLength(500)]
// public string Description { set; get; }
// public int? ParentID { set; get; }
// public int? DisplayOrder { set; get; }

// [MaxLength(256)]
// public string Image { set; get; }

// public bool? HomeFlag { set; get; }