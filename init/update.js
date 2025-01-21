const mognoose = require('mongoose');
const Listing = require("../models/listings");
const { default: mongoose } = require('mongoose');

mongoose.connect('mongodb://localhost:27017/wonderlust');

const updateListings = async () => {
    try {
        const listings = await Listing.find({ 'img': { $exists: true } });
        console.log('Listings found:', listings.length);

        if (listings.length === 0) {
            console.log('No listings found with img field.');
            return;
        }

        for (let listing of listings) {
            console.log('Before Update:', listing);

            // Check if img already contains valid data
            if (listing.img?.url && listing.img.filename) {
                console.log('Skipping update for:', listing._id);
                continue; // Skip this listing
            }

            listing.img = {
                filename: "listingimage",
                // url: listing.img?.url || 'default-url', // Use existing img.url or fallback
                url : listing.img.url,
            };

            await listing.save();
            console.log('After Update:', listing);
        }

        console.log('Listings updated successfully');
    } catch (error) {
        console.error('Error updating listings:', error);
    } finally {
        mongoose.connection.close();
    }
};
  
  updateListings();