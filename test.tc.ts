import { fixture, test, Selector } from "testcafe";

fixture("Worker")
	.page(`http://127.0.0.1:3000/index.html`)

test("works", async(t) => {
    await t.expect(Selector("#out").textContent).eql("");
    await t.click(Selector("#btn"))
    await t.expect(Selector("#out").textContent).eql("42");
});