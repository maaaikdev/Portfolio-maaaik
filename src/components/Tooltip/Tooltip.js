import React from "react";
import "./Tooltip.css"

const Tooltip = ({props}) => {

    return (
        <div class="tooltip">Hover over me
        <   span class="tooltiptext">Tooltip text</span>
        </div>
    )
}

export default Tooltip;