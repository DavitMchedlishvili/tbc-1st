import Stripe from "stripe";

export function CreateProductForm() {
    async function createProduct(formData: FormData) {
        "use server";

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

        const name = formData.get("name") as string;
        const price = Number(formData.get("price"));

        const stripeProduct = await stripe.products.create({
            name,
        })


        const stripePrice = await stripe.prices.create({
            product: stripeProduct.id,
            unit_amount: price,
            currency: "usd",
        })

        console.log(stripeProduct, stripePrice);
    }



    return (
        <form 
    action={createProduct} 
    className="flex flex-col gap-6 w-[70%] max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
>
    <div className="flex flex-col">
        <label 
            htmlFor="name" 
            className="text-sm font-medium text-gray-700 dark:text-gray-200"
        >
            Name
        </label>
        <input 
            type="text" 
            id="name" 
            name="name" 
            className="mt-1 p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
            placeholder="Enter product name"
        />
    </div>
    <div className="flex flex-col">
        <label 
            htmlFor="price" 
            className="text-sm font-medium text-gray-700 dark:text-gray-200"
        >
            Price
        </label>
        <input 
            type="number" 
            id="price" 
            name="price" 
            className="mt-1 p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
            placeholder="Enter product price"
        />
    </div>
    <div className="flex flex-col">
        <label 
            htmlFor="image" 
            className="text-sm font-medium text-gray-700 dark:text-gray-200"
        >
            Image
        </label>
        <input 
            type="file" 
            id="file" 
            name="image" 
            className="mt-1 p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
        />
    </div>
    <button 
        type="submit" 
        className="w-full py-2 px-4 bg-blue-500 dark:bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300"
    >
        Create Product
    </button>
</form>

    );
}
