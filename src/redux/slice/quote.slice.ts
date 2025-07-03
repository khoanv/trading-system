import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { QuoteInfo } from '../../models/object.model';

export interface QuoteState {
    [symbol: string]: QuoteInfo
}

const initialState: QuoteState = {

}

export const quoteSlice = createSlice({
    name: "quote",
    initialState,
    reducers: {
        updateQuote: (state, action: PayloadAction<QuoteInfo>) => {
            const quote = action.payload as QuoteInfo;
            let symbolCode = "";
            if(quote.symbolCode) symbolCode = quote.symbolCode;
            return {
                ...state,
                [symbolCode]: quote
            }
        }
    }
})

export const {updateQuote} = quoteSlice.actions;
export default quoteSlice.reducer;