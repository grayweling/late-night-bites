const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment',
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
);

userSchema.pre('save', async function (next) {
    if(this.isNew || this.isModified('password')) {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
    }

    next();
})

userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

const User = model('User', userSchema);

module.exports = User;