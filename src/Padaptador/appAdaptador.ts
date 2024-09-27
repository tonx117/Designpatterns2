import { AdaptadorFacturacion } from "./AdaptadorFacturacion";
import { AdaptadorProveedor } from "./AdaptadorProveedor";

console.log("\n Patron Adaptador");

const facturacion = new AdaptadorFacturacion();

console.log(facturacion.generarFactura(1, 500));
console.log(facturacion.consultarFactura(1));


const proveedor = new AdaptadorProveedor();

console.log(proveedor.obtenerProductos());
console.log(proveedor.actualizarInventario("Producto A", 50));
