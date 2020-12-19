var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
    {
        name: { type: String, required: true, minlength: 3, maxlength: 100 },
        category: { type: String, required: true, enum: ['Fiction', 'Non-Fiction', 'Military History', 'Romance'], default: 'Fiction' } 
    }
);

// Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function() {
    return '/catalog/genre/' + this._id;
});

// Export Model
module.exports = mongoose.model('Genre', GenreSchema);