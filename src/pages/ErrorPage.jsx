



import React from "react";
// our error page style
import style from '../style/ErrorPage.module.css'
// 404.png image
import img from '../assets/img/404.png'

const ErrorPage = () => {

    return (
<div className={style.wrapper_error_page}>
<img src={img} />
</div>
    )
}

export default ErrorPage