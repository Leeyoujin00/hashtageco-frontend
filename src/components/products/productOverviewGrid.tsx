import ProductBadge from "./productBadge";
import ProductRating from "./productRating";
import ProductGallery from "./productGallery";
import ProductSizes from "./productSizes";

interface Props {
  title: string;
  colors: string[];
  images: {
    src: string;
    alt: string;
  }[];
  full_description: string;
  price: number;
  highlights: string[];
  details: string;
  rating: number;
  reviews: number;
  sizes: Map<string, number>;
}

export default function ProductOverview({ title, colors, images, full_description, price, highlights, details, rating, reviews, sizes }: Props) {
  return (
    <>
      <div className="card card-product card-plain">
        <div className="row mt-5">
          <div className="col-12 col-lg-5 border-end">
            <img
              style={{ width: "100%" }}
              src="https://images.unsplash.com/photo-1494173853739-c21f58b16055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
            ></img>
          </div>
          <div className="col-12 col-lg-6 ps-4">
            {title.length != 0 && <h2>{title}</h2>}

            {details.length != 0 && (
              <>
                <h6 className="mt-4">Details</h6>
                <p>{details}</p>
              </>
            )}
            <h6 className="mt-4">Manufacturer</h6>
            <p></p>
            <h6 className="mt-4">Purchase Link</h6>
            <p></p>
            <h6 className="mt-4">Price</h6>
            <form action="" method="post">
              {price.length != 0 && (
                <div className="d-flex">
                  <h6 className="font-weight-normal">${price.toFixed(2)}</h6>
                  <input className="opacity-0" defaultValue={price} />
                </div>
              )}
              {rating != 0 && (
                <>
                  <h6>Reviews</h6>
                  <h3 className="sr-only">Reviews</h3>
                  <ProductRating rating={rating} reviews={reviews} />
                </>
              )}
              {colors.length != 0 && (
                <>
                  <h6 className="mt-4">Colors:</h6>
                  <div className="d-flex">{colors && <ProductBadge colors={colors} />}</div>
                </>
              )}
              <br />
              <br />
              <button className="btn btn-primary btn-lg w-100" type="submit" style={{ backgroundColor: "darkgreen", border: "darkgreen" }}>
                Scrap this product
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
