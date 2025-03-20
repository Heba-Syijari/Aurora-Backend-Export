export const genderTypes = ['MALE', 'FEMALE'] as const;

export type Gender = (typeof genderTypes)[number];
