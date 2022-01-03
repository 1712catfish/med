import React, { useState } from "react"

import { btnStyle, divStyle, tableStyle, theadStyle } from "./TableStyle"

function Table({
    list,
    colNames,
    pageNum = 0,
    pageSize = 10,
    width = "auto",
    height = "auto",
}) {
    const [page, setPage] = useState(pageNum)

    const onBack = () => {
        setPage(page - 1 > -1 ? page - 1 : page)
    }

    const onNext = () => {
        setPage(page + 1 < list.length / pageSize ? page + 1 : page)
    }

    return (
        <div style={divStyle}>
            {list.length > 0 && (
                <table
                  cellSpacing="0"
                  style={tableStyle}
                >
                    <thead style={theadStyle}>
                        <tr>
                            {colNames.map((headerItem, i) => (
                            <th key={i}>{headerItem.toUpperCase()}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {Object.values(
                            list.slice(pageSize * page, pageSize * page + pageSize)
                        ).map((obj, i) => (
                            <tr key={i}>
                                {Object.values(obj).map((value, j) => (
                                    <td key={j}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>

                    <tfoot>
                        <td></td>
                        <td style={{ padding: "10px 0" }}>
                            <button style={btnStyle} onClick={onBack}>
                                Back
                            </button>
                            <label style={{ padding: "0 1em" }}>{page + 1}</label>
                            <button style={btnStyle} onClick={onNext}>
                                Next
                            </button>
                        </td>
                    </tfoot>
                </table>
          )}
        </div>
    )
}

export default Table
