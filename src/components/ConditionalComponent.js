import { useState } from "react"

export default function ConditionalComponents() {
    const [display, setDisplay] = useState(false)
    let output;
    return display ? (
        <div><h3>This is Conditional components</h3></div>
    ) : (
        <div><h3>Nothing to see here</h3></div>
    )



}