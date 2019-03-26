import React from "react"
import Enzyme, {
  shallow, render, mount
} from "enzyme"
import { createSerializer } from "enzyme-to-json"
import Adapter from "enzyme-adapter-react-16"


// Set the default serializer for Jest to be the from enzyme-to-json
// This produces an easier to read (for humans) serialized format.
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }))

// React 16 Enzyme Adapter
Enzyme.configure({ adapter: new Adapter() })

// define globals to cut down on imports in test files
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;