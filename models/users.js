const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 4
    },
    username: {
        type: String,
        required: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            message: 'Email invalid'
        }
    },
    address: {
        street: {
            type: String,
            required: [true, 'Required field']
        },
        suite: {
            type: String,
            required: [true, 'Required field']
        },
        city: {
            type: String,
            required: [true, 'Required field'],
            validate: {
                validator: (value) => /^[a-zA-Z\s]+$/.test(value),
                message: 'City contain only alphabets'
            },
            zipcode: {
                type: String,
                required: [true, 'Required field'],
                validate: {
                    validator: (value) => /^\d{5}-\d{4}$/.test(value),
                    message: 'Zipcode format must be like 12345-1234'
                },
                geo: {
                    lat: {
                        type: Number,
                        required: [true, 'Required field']
                    },
                    lng: {
                        type: Number,
                        required: [true, 'Required field']
                    }
                }
            },
            website: {
                type: String,
                required: true,
                validate: {
                    validator: (value) => {
                        return validator.isURL(value, { protocols: ['http', 'https'] });
                    },
                    message: 'Invalid URL'
                }
            },
            company: {
                name: {
                    type: String,
                    required: [true, 'Required field']
                },
                catchPhrase: {
                    type: String,
                    required: [true, 'Required field']
                },
                bs: {
                    type: String,
                    required: [true, 'Required field']
                }
            },
            phone: {
                type: String,
                required: true,
                validate: {
                    validator: (value) => {
                        return /^\d-\d{3}-\d{3}-\d{4}$/.test(value);
                    },
                    message: 'Phone format like 1-123-123-1234'
                }
            }
        }
    }
});


const User = mongoose.model('User', userSchema);

module.exports = User;