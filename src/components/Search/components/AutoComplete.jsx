const AutoComplete = ({ data }) => {
  return <ul>{data?.map(el => el.name)}</ul>;
};

export default AutoComplete;
