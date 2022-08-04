const urlConverter = (value: string) => {
  let arrayValue = value.split("-");
  return arrayValue.map((el) => {
    return el.replace("%", " ");
  });
};

const filter = (
  brand: any | undefined,
  price: any | undefined,
  catagory: any | undefined,
  type: any
) => {
  const obj: any = { type,$and:[]};
  if (brand) {
    const brandArr = urlConverter(brand);
    obj["$and"].push({
      $or: brandArr.map((el) => ({ brand: el }))
    })
  }

  if (catagory) {
    const catagoryArr = urlConverter(catagory);
    obj["$and"].push({
      $or: catagoryArr.map((el) => ({ catagory: el }))
    })
  }

  if (price) {
    const priceSplit = urlConverter(price);
    obj["$and"].push([
      { price: { $gte: +priceSplit[0] } },
      { price: { $lte: +priceSplit[1] } },
    ]);
  }
  return obj;
};

export { urlConverter, filter };
