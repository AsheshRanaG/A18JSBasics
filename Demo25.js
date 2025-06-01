const Userdata = [
  {
    id: 1,
    name: "sefina",
    age: 25,
    gender: "female",
    hasPassedOut: true,
    occupation: undefined,
  },
  {
    id: 2,
    name: "Jalan",
    age: 25,
    gender: "male",
    hasPassedOut: false,
    occupation: undefined,
  },
  {
    id: 3,
    name: "nirpa",
    age: 25,
    gender: "male",
    hasPassedOut: true,
    occupation: "intern",
  },
  {
    id: 4,
    name: "gaurav",
    age: 23,
    gender: "male",
    hasPassedOut: false,
    occupation: "animator",
  },
  {
    id: 5,
    name: "ishowr",
    age: 1000000,
    gender: undefined,
    hasPassedOut: true,
    occupation: "be god",
  },
  {
    id: 6,
    name: "safalta",
    age: 20,
    gender: "female",
    hasPassedOut: false,
    occupation: undefined,
  },
  {
    id: 7,
    name: "bimal",
    age: 23,
    gender: "male",
    hasPassedOut: true,
    occupation: "SSWE",
  },
];

const response = {
  status: 200,
  message: "Data fetched successfully",
  data: Userdata,
};

const getUserName = () => {
  const APIStatus = response.status;
  if (APIStatus === 200) {
    const result = response.data
      // .map((user)=> user.occupation ?? user.name)
      .filter((user) => user.age > 22 || user.occupation)
      .map((user) => user.name);
    return result;
  } else {
  }
};
// console.log(getUserName());

const customers = [
  {
    id: 1,
    name: "Nirpa",
    bought: [
      { id: 2, name: "pressure cooker" },
      { id: 45, name: "Mixer" },
    ],
  },
  {
    id: 2,
    name: "dikchya",
    bought: [
      { id: 45, name: "Mixer" },
      { id: 405, name: "Chowmien" },
    ],
  },
  {
    id: 3,
    name: "Bimal",
    bought: [
      { id: 100, name: "T shirt" },
      { id: 2, name: "pressure cooker" },
    ],
  },
  {
    id: 4,
    name: "Simple",
    bought: [
      { id: 120, name: "Momo and coke" },
      { id: 22, name: "biscuit" },
    ],
  },
];

const CustomerResponse = {
  status: 200,
  message: "Data fetched successfully",
  data: customers,
};

const getProductName = () => {
  if (CustomerResponse.status === 200) {
    let boughtProduct = [];
    CustomerResponse.data.forEach((customer) => {
      customer.bought.map((item) => {
        boughtProduct.unshift(item.name);
      });
    });
    return boughtProduct;
  }
};
// console.log(getProductName());

const getProductNumbers = () => {
  if (CustomerResponse.status === 200) {
    let productNumber = {};
    CustomerResponse.data.forEach((customer) => {
      customer.bought.forEach((item) => {
        if (productNumber[item.id]) {
          productNumber[item.id] += 1;
        } else {
          productNumber[item.id] = 1;
        }
      });
    });
    return productNumber;
  }
};

// const data={
//     "pressure cooker":2,
//     "mixer":2,
//     "chowmien":1

// }
