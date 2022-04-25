import { config } from "../../utils/configLoader"
import { setIds } from "../helper/genetateIds"

describe("NavBar", () => {
    let navlinksWithIds = []
    it("should generate id's", () => {
        navlinksWithIds = setIds(config.navlinks)
        navlinksWithIds.forEach(navlink => expect(navlink).toHaveProperty("_id"))
    })

    it("links objects should have unique _id's", () => {
        navlinksWithIds.forEach((navlink, index) => {
            navlinksWithIds.forEach((navlinktocheck, indextocheck) => {
                if (index !== indextocheck) {
                    expect(navlink._id).not.toBe(navlinktocheck._id)
                }
            })
        })
    })
    it("should get nav links objects list with _id, path, and label properties", () => {
        const requiredProperties = ["_id", "path", "label"]
        navlinksWithIds.forEach(
            navlink => {
                requiredProperties.forEach(property => expect(navlink).toHaveProperty(property))
            }
        )
    })
})