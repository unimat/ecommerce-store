import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container"

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("b3f69db9-31bb-4ddc-9735-314ef0251585");
  return (
    <Container>
      <div className="space-10 pb-10">
        <Billboard data={billboard}/>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
          {/*For testing
          <ProductList title="Featured Products" items={[]} /> */}
        </div>
      </div>
    </Container>
  )
}

export default HomePage