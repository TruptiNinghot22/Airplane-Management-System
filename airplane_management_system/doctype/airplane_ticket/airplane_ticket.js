// Copyright (c) 2024, Trupti Ninghot and contributors
// For license information, please see license.txt

frappe.ui.form.on('Airplane Ticket', {
    refresh: function(frm) {
        frm.add_custom_button(__('Assign Seat'), function() {
            frappe.prompt([
                {
                    label: __('Seat Number'),
                    fieldname: 'seat_number',
                    fieldtype: 'Data',
                    reqd: true
                }
            ], function(values) {
                frm.set_value('seat', values.seat_number);
            }, __('Enter Seat Number'), __('Set'));
        }, __('Action'));
    }
});
