import { createAction } from '@reduxjs/toolkit';

export const getProductPending = createAction('product/get/pending');
export const getProductFulfiled = createAction('product/get/fulfiled');
export const getProductRejected = createAction('product/get/rejected');
