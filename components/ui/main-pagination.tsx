import Pagination from "@mui/material/Pagination";

export default function MainPagination({
  countOfNews,
  handleChange,
  limit,
}: {
  countOfNews: number;
  limit: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}) {
  const count = Math.ceil(countOfNews / limit);

  return (
    <Pagination
      count={count}
      shape="rounded"
      onChange={handleChange}
      disabled={count >= limit}
    />
  );
}
