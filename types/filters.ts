export type FilterTypes = {
  result: ResultFilterTypes | null;
  loading: boolean;
  error: string;
};

// export type ResultFilterTypes = {
//   schema: {
//     origin: {
//       enum: any;
//     };
//   };
// };

export type ResultFilterTypes = {
  schema: {
    attributes: {
      origin: {
        enum: any;
      };
    };
  };
};
