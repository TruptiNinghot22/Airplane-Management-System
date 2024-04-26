# Copyright (c) 2024, Trupti Ninghot and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Airplane(Document):
	pass

def before_insert(self):
    # Get airplane's capacity
    capacity = self.get('capacity')
    
    # Count existing Airplane Tickets for this flight
    existing_tickets_count = frappe.db.count('Airplane Ticket', filters={'flight': self.name, 'docstatus': 1})
    
    # Check if capacity is reached
    if existing_tickets_count >= capacity:
        frappe.throw("Seats are full! Cannot create a new Airplane Ticket.")
