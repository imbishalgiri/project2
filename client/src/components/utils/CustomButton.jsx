import React from 'react'

export default function CustonButton({ text, loadingText, isLoading }) {

    const loadingBtn = (
        <div input className="btn btn-info btn-block mt-4" type="button" disabled>
        {loadingText} {'\u00A0'}{'\u00A0'}
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        </div>
    );

    const btn = (
        <input 
            type="submit" 
            className="btn btn-info btn-block mt-4" 
            value={text}
        />
    );

    return !isLoading ? btn : loadingBtn;
}
