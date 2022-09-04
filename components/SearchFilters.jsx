import { Flex, Select, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { filterData, getFilterValues } from "utils/filterData";

const SearchFilters = () => {
  const router = useRouter();

  const handleSearchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);
    values.forEach((item) => {
      console.log("item", item);
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      } else if (item.value === "") {
        delete query[item.name];
      }
    });
    // console.log("query", query);
    router.push({ pathname: path, query });
  };

  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {filterData.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            w="fit-content"
            p="2"
            onChange={(e) => {
              console.log(e.target.value);
              handleSearchProperties({ [filter.queryName]: e.target.value });
            }}
          >
            {filter?.items?.map((item) => (
              // eslint-disable-next-line react/no-unknown-property
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
