// Copyright (c) 2024, Trupti Ninghot and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Airplane Flight", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on("Airplane Flight", {
    refresh: function(frm) {
        if (!frm.doc.flight_id) {
            frm.set_value("flight_id", generateFlightID());
        }
    }
});
function generateFlightID() {
    const prefix = 'FL';
    const numbers = '0123456789';
    let result = prefix;
    for (let i = 0; i < 4; i++) { 
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    return result;
}
