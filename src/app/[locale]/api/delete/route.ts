// app/api/delete-product/route.ts (or .ts for TypeScript)
import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "../../../../utils/supabase/server";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.method); // Log the request method to see if it's DELETE

  if (req.method === "DELETE") {
    const { id } = req.body;

    console.log("Deleting product with ID:", id); // Log the ID for debugging

    try {
      const supabase = await createClient();
      const { error } = await supabase
        .from("products")
        .delete()
        .eq("id", id);

      if (error) {
        return res.status(400).json({ message: "Error deleting product", error: error.message });
      }

      return res.status(200).json({ message: "Product deleted successfully!" });
    } catch (err: unknown) {
      if (err instanceof Error) {
        return res.status(500).json({ message: "An unexpected error occurred.", error: err.message });
      }
      return res.status(500).json({ message: "An unexpected error occurred." });
    }
  }
  return res.status(405).json({ message: "Method Not Allowed" });
}
