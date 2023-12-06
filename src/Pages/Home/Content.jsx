import Card from "../../components/Card";
import Loading from "../../components/Loading";

function Content({ isLoading, loadMore, products }) {
  return (
    <div className="container mx-auto px-2">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
          {products?.map((item, i) => (
            <Card item={item} index={i} />
          ))}
        </div>
      )}
      {
        <button
          onClick={() => loadMore()}
          className="my-5 md:w-1/3 p-5 bg-blue-600 text-white font-medium rounded-sm hover:bg-blue-500"
        >
          Load More (+6)
        </button>
      }
    </div>
  );
}

export default Content;
