export const jwtConstant = {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN
};

export const hashConstant = {
    hashRound: Number(process.env.HASH_ROUNDS)
};