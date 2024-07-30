const OrderDetails = ({ params, searchParams }) => {
  const { hello } = searchParams;
  const { id } = params;

  return (
    <div>
      {id}
      <br></br>
      {hello}
    </div>
  );
};

export default OrderDetails;
