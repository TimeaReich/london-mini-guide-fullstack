const SearchResult = (props) => {
  console.log(props.data);
  return (
    <div className="table-container">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        {props.data ? (
          <tbody>
            {props.data.map((item, index) => (
              <tr>
                <th scope="row">{index}</th>
                <th scope="row">{item.name}</th>
                <th scope="row">{item.address}</th>
                <th scope="row">{item.phone}</th>
                <th scope="row">
                  <a href={item.website}>Website</a>
                </th>
              </tr>
            ))}
          </tbody>
        ) : (
          ""
        )}
      </table>
    </div>
  );
};
export default SearchResult;
