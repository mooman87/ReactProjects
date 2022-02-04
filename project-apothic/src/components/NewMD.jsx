import React from 'react';

export default function NewMD (){
    return(
        <div>
            <form>
                <div>
                    <label>MD First Name</label>
                    <input type="text" name="fname" />
                </div>
                <div>
                    <label>MD Last Name</label>
                    <input type="text" name="lname" />
                </div>
                <div>
                    <label>MD Phone</label>
                    <input type="text" name="phone" />
                </div>
                <div>
                    <label>MD Address</label>
                    <input type="text" name="address" />
                </div>
                <div>
                    <label>MD City</label>
                    <input type="text" name="city" />
                </div>
                <div>
                    <label>MD State</label>
                    <input type="text" name="state" />
                </div>
                <div>
                    <label>MD Zip</label>
                    <input type="text" name="zip" />
                </div>
            </form>
        </div>
    )
}