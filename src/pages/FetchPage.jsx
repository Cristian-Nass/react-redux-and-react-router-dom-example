import useFetchData from "../hooks/useFetchData";

const FetchPage = () => {
  const { data, isLoading } = useFetchData(
    "https://gist.githubusercontent.com/Cristian-Nass/f5e2dedf7f090591fca4ba9d9873a2f9/raw/ace08fb1b35b3987c3631adf1583ffb1405a4a37/products.json"
  );

  if (isLoading) return <>Loading</>;
  return (
    <>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <div>{item.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FetchPage;
