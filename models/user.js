var mongoose = require('mongoose');

var listSchema = new mongoose.Schema(
    {
        products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
        zipCode: Number,
        isActive: {type: Boolean, default: true}
    },
    {
        timestamps: true
    }
);

var userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        avatar: String,
        googleId: String,
        lists: [listSchema]
    },
    {
        timestamps: true
    }
);

// Get current user list
userSchema.methods.currentList = function(){
    return this.lists.find(list => list.isActive);
};

module.exports = mongoose.model('User', userSchema);