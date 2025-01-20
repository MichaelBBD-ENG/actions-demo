export const handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!  This function was deployed from zip by Michael'),
    };
};
