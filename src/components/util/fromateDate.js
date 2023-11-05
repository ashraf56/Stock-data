const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = {month: 'short', year: 'numeric' };
    return date.toLocaleDateString( undefined, options);
  };
  

  export default formatDate;