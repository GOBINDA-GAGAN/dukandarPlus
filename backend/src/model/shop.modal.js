import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
    {
        shopName: {
            type: String,
            required: true,
            trim: true,
        },

        ownerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },

        logoUrl: {
            type: String,
            default: "",
        },

        address: {
            type: String,
            default: "",
        },

        gstNumber: {
            type: String,
            default: "",
        },

        isBlocked: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const Shop = mongoose.model("Shop", shopSchema);

export default Shop;