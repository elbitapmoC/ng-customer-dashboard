import { Component, signal } from "@angular/core";

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  status: boolean;
}

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.scss"],
})
export class CustomerListComponent {
  customers = signal<Customer[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      location: "New York",
      status: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      location: "Los Angeles",
      status: true,
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      phone: "555-123-4567",
      location: "Chicago",
      status: false,
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice.brown@example.com",
      phone: "111-222-33",
      location: "Houston",
      status: true,
    },
  ]);

  addCustomer(newCustomer: Customer) {
    this.customers.update((customers) => [...customers, newCustomer]);
  }

  toggleStatus(id: number) {
    this.customers.update((customers) =>
      customers.map((customer) =>
        customer.id === id
          ? { ...customer, status: !customer.status }
          : customer
      )
    );
  }
}
