export const domainBase = {
  rest: 'https://localhost:44309',
};

export const environment = {
  endpoints: {
    productInventory: `${domainBase.rest}/api/Inventory/GetInventory`,
    productInventoryFileUpload: `${domainBase.rest}/api/Inventory/Upload`,
    product: `${domainBase}/api/Product`,
    productCategory: `${domainBase}/api/ProductCategory`,
    vendor: `${domainBase}/api/Vendor`,
    warranty: `${domainBase}/api/Warranty`,
  },
};
