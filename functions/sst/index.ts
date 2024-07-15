export const handler = async (event: any) => {
  console.log(event);
  return {
    statusCode: 200,
    body: JSON.stringify(event),
  };
};
