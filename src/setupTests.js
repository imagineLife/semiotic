/* eslint-disable */
import "@inrupt/jest-jsdom-polyfills"
import React from "react"
import PropTypes from "prop-types"
import { configure } from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"

configure({ adapter: new Adapter() })
