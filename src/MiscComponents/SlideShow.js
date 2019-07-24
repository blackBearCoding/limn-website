import React, { Component } from 'react'
import './SlideShow.css'

export default class SlideShow extends Component {
    render() {
        return (
            <div className="cb-container">
                <ul className="cb-slideshow">
                    <li>
                        <span>Image 01</span>
                    </li>
                    <li>
                        <span>Image 02</span>
                    </li>
                    <li>
                        <span>Image 03</span>
                    </li>
                    <li>
                        <span>Image 04</span>
                    </li>
                    <li>
                        <span>Image 05</span>
                    </li>
                    <li>
                        <span>Image 06</span>
                    </li>
                </ul>
            </div>
        )
    }
}
