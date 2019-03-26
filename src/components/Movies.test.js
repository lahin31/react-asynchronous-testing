import Movies from "./Movies"

jest.mock("../api/Movies")

describe("Movies Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Movies />) // shallow - returns a light-weight representation of what component renders
    expect(wrapper).toMatchSnapshot();
  })

  it("fetches movies from movieDB api and renders them on mount", done => {
    const wrapper = shallow(<Movies />)

    setTimeout(() => {
      wrapper.update()
      const state = wrapper.state()
      expect(state.error).toEqual("")
      expect(wrapper.find("Movie").length).toEqual(1)
      done()
    })
  })

})