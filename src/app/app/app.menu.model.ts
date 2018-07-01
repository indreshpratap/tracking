interface MenuItem {
    link: string;
    label: string;
}
const ADMIN_PREFIX = "/home/admin/";
const INVOICE_PREFIX = "/home/invoice/";
export const MENU = {
    ADMIN: [
        {
            label: "Client", children: [
                { routerLink: `${ADMIN_PREFIX}clients`, label: "Clients" },
                { routerLink: `${ADMIN_PREFIX}new-client`, label: "New Client" },
              
            ]
        },
        {
            label: "Project", children: [
                
                { routerLink: `${ADMIN_PREFIX}new-project`, label: "New Project" },
            ]
        }],
        USER:[
        {
            label: "Invoice", children: [
                
                { routerLink: `${INVOICE_PREFIX}list`, label: "Invoices" },
            ]
        }
    ]
}