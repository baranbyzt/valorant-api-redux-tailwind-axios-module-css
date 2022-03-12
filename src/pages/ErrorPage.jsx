



import React from "react";

import style from '../style/ErrorPage.module.css'
import img from '../assets/img/404.png'

const ErrorPage = () => {

    return (
<div className={style.wrapper_error_page}>
<img src={img} />
</div>
    )
}

export default ErrorPage