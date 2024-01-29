class ApiFeature {
  constructor(query, queryStr) {
    //this.queryStr in req.body.parms This holdes  basically everything after the ?
    //In ur url
    this.query = query;
    this.queryStr = queryStr;
  }
  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
    // In the below line we are just taking in the this.query object
    // and replacing its condition value with the above object that we have created
    this.query = this.query.find({ ...keyword });

    return this;
  }
  filter() {
    const queryCopy = { ...this.queryStr };

    const removeField = ["keyword", "page", "limit"];
    removeField.forEach((key) => delete queryCopy[key]);
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }
  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resultPerPage * (currentPage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}
module.exports = ApiFeature;
