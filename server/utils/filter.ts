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
  const obj: any = { type };
  if (brand) {
    const brandArr = urlConverter(brand);
    if (obj["$and"] === undefined) {
      obj["$and"] = [];
    }
    obj["$and"].push({
      $or: brandArr.map((el) => ({ brand: el })),
    });
  }

  if (catagory) {
    const catagoryArr = urlConverter(catagory);
    if (obj["$and"] === undefined) {
      obj["$and"] = [];
    }
    obj["$and"].push({
      $or: catagoryArr.map((el) => ({ catagory: el })),
    });
  }

  if (price) {
    const priceSplit = urlConverter(price);
    if (obj["$and"] === undefined) {
      obj["$and"] = [];
    }
    obj["$and"].push({ price: { $gte: +priceSplit[0] } });
    obj["$and"].push({ price: { $lte: +priceSplit[1] } });
  }
  return obj;
};

export { urlConverter, filter };
