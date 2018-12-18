import React from 'react';
import ReactDOM from 'react-dom';

import Canvas from './components/Canvas';

ready(() => {
    const containers = document.querySelectorAll(".wp-block-guty2-paint-me");
    const containersArray = Array.prototype.slice.call(containers);

    containersArray.forEach((element) => {

        const reactProps = JSON.parse(element.dataset.reactProps);

        ReactDOM.render(
            <Canvas {...reactProps} viewMode={true}/>,
            element
        )
    })
});

// Thank you http://youmightnotneedjquery.com/
function ready(fn) {
    if (
        document.attachEvent
            ? document.readyState === "complete"
            : document.readyState !== "loading"
    ) {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
