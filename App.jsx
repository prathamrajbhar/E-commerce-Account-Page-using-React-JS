import React from 'react'

function App() {
    return (
        <div className="container mt-5">
            <h1>Account</h1>
            <div className="row">
                <div className="col-md-3">
                    <div className="list-group">
                        <a href="#my-profile" className="list-group-item list-group-item-action" data-bs-toggle="pill">My Profile</a>
                        <a href="#address-book" className="list-group-item list-group-item-action" data-bs-toggle="pill">Address Book</a>
                        <a href="#my-payments" className="list-group-item list-group-item-action" data-bs-toggle="pill">My Payments</a>
                        <a href="#my-orders" className="list-group-item list-group-item-action" data-bs-toggle="pill">My Orders</a>
                        <a href="#my-cancelations" className="list-group-item list-group-item-action" data-bs-toggle="pill">My Cancelations</a>
                        <a href="#my-wishlist" className="list-group-item list-group-item-action" data-bs-toggle="pill">My Wishlist</a>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="tab-content">
                        <div id="my-profile" className="tab-pane fade">
                            <MyProfile />
                        </div>
                        <div id="address-book" className="tab-pane fade">
                            <AddressBook />
                        </div>
                        <div id="my-payments" className="tab-pane fade">
                            <MyPayments />
                        </div>
                        <div id="my-orders" className="tab-pane fade">
                            <MyOrders />
                        </div>
                        <div id="my-cancelations" className="tab-pane fade">
                            <MyCancelations />
                        </div>
                        <div id="my-wishlist" className="tab-pane fade">
                            <MyWishlist />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MyProfile = () => {
    return (
        <div>My Profile</div>
    )
}

const AddressBook = () => {
    return (
        <div>Address Book</div>
    )
}

const MyPayments = () => {
    return (
        <div>My Payments</div>
    )
}

const MyOrders = () => {
    return (
        <div>My Orders</div>
    )
}

const MyCancelations = () => {
    return (
        <div>My Cancelations</div>
    )
}

const MyWishlist = () => {
    return (
        <div>My Wishlist</div>
    )
}

export default App
