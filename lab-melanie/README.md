# 36 Async Actions

This is a full stack JavaScript application that allows a user to create a rider and add bikes associated with that rider. The user may update the rider's name, as well as update information about the bicycle. The user may also delete a rider or a bicycle. If the user deletes a rider, the bikes associated with that rider will also be removed from the database. All riders and their associated bikes are stored in Mongo DB.

---

fontend .env:

```
NODE_ENV=dev
API_URL="http://localhost:3000"
CDN_URL="/"
```

backend .env:

```
PORT=3000
MONGODB_URI="mongodb://localhost/bikes"
```
