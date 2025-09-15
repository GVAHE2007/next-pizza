
import { prisma } from "@/prisma/prizma-client"
import { Product } from "@prisma/client";


export default async function DashboardOrderPage() {
    const orders = await prisma.order.findMany()
    const products = await prisma.product.findMany()
    const ordersWithProducts = orders.map((order) => {
        const items = JSON.parse(order.items as string);
        console.dir(items)
        const orderProducts = items
            .map((item: any) => {
                const product = products.find((el) => el.id === item.variant.productId);
                return product;
            })

        console.dir(orderProducts, "oredr porducts")
        return {
            ...order,
            products: orderProducts,
        };
    });
    console.dir(products)
    console.dir(ordersWithProducts)
    return (
        <>
            <div>
                <h1>Orders</h1>

                {ordersWithProducts.map((order) => (
                    <div key={order.id}>
                        <h2 className="text-2xl">{order.fullName}</h2>
                        <p>{order.email}</p>
                        <p>{order.phone}</p>
                        <p>{order.address}</p>
                        <p>{order.comment}</p>
                        <p>{order.totalAmount}</p>

                        <div style={{ marginLeft: "1rem" }}>
                            <strong>Products:</strong>
                            <ul>
                                {order.products.map((product: Product) => (
                                    <li key={product.id}>{product.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}   